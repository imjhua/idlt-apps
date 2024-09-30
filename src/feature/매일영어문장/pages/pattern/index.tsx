import {
 Accordion, AccordionPanel, Box, Button, Card, Grid, Text
} from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES, type SentencesType } from '../../shared/meta'

function Page() {
  const title = useQueryParams('title') as string

  const [patternIndex, setPatternIndex] = useState<number>(0)

  const randomList = useMemo(() => {
    const originalList = SENTENCES[title]

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
  }, [title])

  const { sentence, value, pattern, mean, test, ex } = useMemo(() => {
    return randomList[patternIndex]
  }, [patternIndex, randomList])

  const handleBgClick = () => {
    setPatternIndex((state) => {
      if (state === randomList.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  const handlePreviousClick = () => {
    setPatternIndex((state) => {
      if (state === 0) {
        return 0
      }
      return state - 1
    })
  }
  const handleNextClick = () => {
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
      areas={[['pattern'], ['main'], ['footer'], ['button']]}
      height="full"
      rows={['auto', 'auto', 'auto', '300px']}
      columns={['full']}
      pad="small"
      gap="small"
    >
      <>
        <Box gridArea="pattern" align="center" style={{ marginTop: '30px' }}>
          <Text size="large">#{patternIndex + 1}. {mean}</Text>
        </Box>
        <Box gridArea="main" align="center" onClick={handleBgClick}>
          <Card
            pad="large"
            background="white"
            width="auto"
            style={{ whiteSpace: 'pre', padding: '14px' }}
          >
            <Text size="medium">{pattern}</Text>
          </Card>
        </Box>
        {/* const { sentence, value, pattern, mean, test, ex } = useMemo(() => { */}

        <Box gridArea="footer" style={{ marginTop: '30px' }}>
          <Accordion multiple gap="small">
            <AccordionPanel label={sentence} style={{ height: '40px' }}>
              <Box pad="small">{value}</Box>
            </AccordionPanel>
            <AccordionPanel label={test} style={{ height: '40px' }}>
              <Box pad="small">{ex}</Box>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box gridArea="button" direction="row" justify="between">
        <Button
          pad="none"
          style={{
              height: '100%',
              width: '100px',
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
              width: '100px',
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
