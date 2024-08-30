
import {
  Box, Button, Card, Grid,
  Heading, List, Text
} from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES } from '../../shared/meta'

function HomePage(){
  const start = Number(useQueryParams('start'))
  const end = Number(useQueryParams('end'))
  const [nextIndex, setNextIndex] = useState<number>(0)
  const [showMeaning, setShowMeaning] = useState<boolean>(false)

  const originalList = useMemo(() => {
    return SENTENCES.slice(start - 1, end)
  }, [start, end])

  const randomList = useMemo(() => {
    const randomList = originalList.reduce<{ key: string; value: string; index: string; ex1: string | null; ex2: string | null }[]>((data) => {
      const randomNumber1 = getRandomIntInclusive(0, originalList.length - 1)
      const randomNumber2 = getRandomIntInclusive(0, originalList.length - 1)
      const temp = data[randomNumber1]
      data[randomNumber1] = data[randomNumber2]
      data[randomNumber2] = temp
      return data
    }, [...originalList])

    return randomList
  }, [originalList])

  const [show, setShow] = useState<boolean>(false)

  const handlePreviousClick = () => {
    setNextIndex((state) => {
      if (state === randomList.length - 1){
        return 0
      }
      return (state - 1)
    })
  }
  const handleNextClick = () => {
    setNextIndex((state) => {
      if (state === randomList.length - 1){
        return 0
      }
      return (state + 1)
    })
  }
  const handleBgClick = () => {
    if (!showMeaning){
      setShowMeaning(true)
      return
    }
    setShowMeaning(false)

    setNextIndex((state) => {
      if (state === randomList.length - 1){
        return 0
      }
      return (state + 1)
    })
  }

  return (
    <Grid
      fill
      areas={[
        ['pattern'],
        ['index'],
        ['main'],
        ['button'],
        ['footer'],
      ]}
      rows={['auto', 'auto', '260px', 'xsmall']}
      columns={['full']}
      gap="small"
    >
      <Box gridArea="pattern" align="end">
        <Text size="medium">
          PATTERN: {start}-{end}
        </Text>
        <Text>
          (pattern: {randomList[nextIndex].index})
        </Text>
      </Box>

      <Box
        gridArea="index"
        pad="medium" gap="large">
        <Heading>
          # {nextIndex + 1}
        </Heading>
      </Box>

      <Box
        gridArea="main" align="center" pad="large"
        gap="large"
        onClick={handleBgClick}
      >
        <Text size="xlarge" weight="bold">
          {randomList[nextIndex].key}
        </Text>
        {showMeaning &&
        (<Card pad="large" background="white">
          <Text size="medium">
            {randomList[nextIndex].value}
          </Text>
        </Card>)}
      </Box>
      <Box gridArea="button" justify="between" direction="row">
        <Button icon={<CaretPrevious />} hoverIndicator onClick={handlePreviousClick} />
        <Button icon={<CaretNext />} hoverIndicator onClick={handleNextClick} />
      </Box>
      <Box gridArea="footer" gap="large">
        <Button
          primary
          label="응용 문장 보기" onClick={() => {
            setShow((state) => (!state))
          }} />

        {show && <List
          pad="medium"
          data={
            [
              randomList[nextIndex].ex1 || '',
              randomList[nextIndex].ex2 || '',
            ]
          }
        />}
      </Box>
    </Grid>
  )
}
export default HomePage

