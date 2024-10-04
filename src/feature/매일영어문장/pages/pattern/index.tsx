import { Box, Button, Card, Grid, List, Text } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES, type SentencesType } from '../../shared/meta'

function Page() {
  const day = useQueryParams('day') as string

  const [patternIndex, setPatternIndex] = useState<number>(0)
  const [showExSentence, setShowExSentence] = useState<boolean>(false)

  const randomList = useMemo(() => {
    const originalList = SENTENCES[day]

    const randomList = originalList.reduce<SentencesType>((data) => {
        const randomNumber1 = getRandomIntInclusive(0, originalList.length - 1)
        const randomNumber2 = getRandomIntInclusive(0, originalList.length - 1)
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      }, [...originalList]
    )

    return randomList
  }, [day])

  const { SentenceOfTheDay,	EnglishSentence, Pattern, PatternMeaning, Example, ExampleMeaning } = useMemo(() => {
    return randomList[patternIndex]
  }, [patternIndex, randomList])

  const handleExampleSentenceClick = () => {
    setShowExSentence((state) => !state)

    // if (showExSentence) {
    //   setShowMeaning(false)
    //   setPatternIndex((state) => {
    //     if (state === randomList.length - 1) {
    //       return 0
    //     }
    //     return state + 1
    //   })
    // }
  }

  const handlePreviousClick = () => {
    setShowExSentence(false)

    setPatternIndex((state) => {
      if (state === 0) {
        return 0
      }
      return state - 1
    })
  }
  const handleNextClick = () => {
    setShowExSentence(false)

    setPatternIndex((state) => {
      if (state === randomList.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  return (
    <Grid
      fill
      areas={[['pattern'], ['card'], ['ex'], ['button']]}
      height="full"
      rows={['auto', 'auto', 'auto', '150px']}
      columns={['full']}
      pad="small"
      gap="large"
    >
      <>
        <Box gridArea="pattern" align="center" style={{ marginTop: '30px' }}>
          <Text size="large">#{patternIndex + 1}. {PatternMeaning}</Text>
        </Box>
        <Box gridArea="card" align="center">
          <Box align="center">
            <Card
              pad="large"
              background="white"
              width="auto"
              style={{ whiteSpace: 'pre', padding: '14px' }}
          >
              <Text size="medium">{Pattern}</Text>
            </Card>
          </Box>
        </Box>

        <Box gridArea="ex">
          <Box gridArea="footer" gap="medium" pad="small">
            <Text size="small">* 예문을 보려면 아래 영역을 터치하세요.</Text>
            <List
              pad="small"
              onClick={handleExampleSentenceClick}
              data={showExSentence ? [
                EnglishSentence || '(문장 필요) - 1',
                Example || '(문장 필요) - 2',
              ] : [SentenceOfTheDay, ExampleMeaning]}
            />
          </Box>
        </Box>

        <Box gridArea="button" direction="row" justify="between">
          <Button
            pad="none"
            style={{
              height: '100%',
              width: '40px',
              textAlign: 'center',
            }}
            icon={<CaretPrevious />}
            hoverIndicator
            onClick={handlePreviousClick}
          />
          <Button
            pad="none"
            style={{
              height: '100%',
              width: '40px',
              textAlign: 'center',
            }}
            icon={<CaretNext />}
            hoverIndicator
            onClick={handleNextClick}
          />
        </Box>
      </>
    </Grid>
  )
}

export default Page
