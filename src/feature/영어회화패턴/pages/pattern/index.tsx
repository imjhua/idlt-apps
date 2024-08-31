import {
  Box, Button, Card, Grid, Heading, List, Text
} from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { type MouseEvent, useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES } from '../../shared/meta'

function HomePage() {
  const start = Number(useQueryParams('start'))
  const end = Number(useQueryParams('end'))
  const [nextIndex, setNextIndex] = useState<number>(0)
  const [showMeaning, setShowMeaning] = useState<boolean>(false)

  const originalList = useMemo(() => {
    return SENTENCES.slice(start - 1, end)
  }, [start, end])

  const randomList = useMemo(() => {
    const randomList = originalList.reduce<
    { key: string; value: string; index: string;
      ex1: string | null; ex2: string | null; }[]
    >(
      (data) => {
        const randomNumber1 = getRandomIntInclusive(0, originalList.length - 1)
        const randomNumber2 = getRandomIntInclusive(0, originalList.length - 1)
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      },
      [...originalList],
    )

    return randomList
  }, [originalList])

  const [showExSentence, setShowExSentence] = useState<boolean>(false)

  const handleExampleSentenceClick = (e: MouseEvent) => {
    e.stopPropagation()
    setShowExSentence((state) => !state)
  }
  const handlePreviousClick = (e: MouseEvent) => {
    e.stopPropagation()

    setShowMeaning(false)
    setShowExSentence(false)

    setNextIndex((state) => {
      if (state === 0) {
        return 0
      }
      return state - 1
    })
  }
  const handleNextClick = (e: MouseEvent) => {
    e.stopPropagation()

    setShowMeaning(false)
    setShowExSentence(false)

    setNextIndex((state) => {
      if (state === randomList.length - 1) {
        return 0
      }
      return state + 1
    })
  }
  const handleBgClick = () => {
    setShowExSentence(false)

    if (!showMeaning) {
      setShowMeaning(true)
      return
    }
    setShowMeaning(false)

    setNextIndex((state) => {
      if (state === randomList.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  return (
    <Grid
      fill
      areas={[['pattern'], ['main'], ['footer']]}
      height="full"
      rows={['auto', 'auto', 'auto']}
      columns={['full']}
      gap="small"
      onClick={handleBgClick}
    >
      <Box
        pad="medium" gridArea="pattern" direction="row"
        justify="between">
        <Heading># {nextIndex + 1}</Heading>
        <Box align="end">
          <Text size="medium">
            PATTERN: {start}-{end}
          </Text>
          <Text>(pattern: {randomList[nextIndex].index})</Text>
        </Box>
      </Box>

      <Box gridArea="main" gap="large" align="center">
        <Box
          align="center" direction="row" justify="between"
          width="100%">
          <Button
            pad="none"
            style={{
              height: '100%',
              width: '40px',
              textAlign: 'center'
            }}
            icon={<CaretPrevious />}
            hoverIndicator
            onClick={handlePreviousClick}
          />

          <Box
            height="240px" gap="large" justify="center"
            align="center">
            <Text size="xlarge" weight="bold" style={{ whiteSpace: 'pre' }}>
              {randomList[nextIndex].key}
            </Text>
            {showMeaning && (
              <Card
                pad="large" background="white" width="auto"
                style={{ whiteSpace: 'pre', padding: '14px' }}>
                <Text size="medium">{randomList[nextIndex].value}</Text>
              </Card>
            )}
          </Box>

          <Button
            pad="none"
            style={{
              height: '100%',
              width: '40px',
              textAlign: 'center'
            }} icon={<CaretNext />}
            hoverIndicator onClick={handleNextClick} />
        </Box>
      </Box>

      <Box gridArea="footer" gap="large" pad="small">
        <Text size="small">* 예문을 보려면 아래 영역을 터치하세요.</Text>
        <List
          style={{ color: showExSentence ? 'inherit' : 'transparent' }}
          onClick={handleExampleSentenceClick}
          pad="small"
          data={[randomList[nextIndex].ex1 || '(문장 필요)', randomList[nextIndex].ex2 || '(문장 필요)']}
        />
      </Box>
    </Grid>
  )
}
export default HomePage
