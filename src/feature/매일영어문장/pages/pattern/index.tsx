import { Accordion, AccordionPanel, Box, Card, Grid, Text } from 'grommet'
import { useMemo, useState } from 'react'

import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES } from '../../shared/meta'

function Page() {
  const title = useQueryParams('title') as string

  const [patternIndex, setPatternIndex] = useState<number>(0)

  const { sentence, value, pattern, mean, test, ex } = useMemo(() => {
    return SENTENCES[title][patternIndex]
  }, [patternIndex, title])

  const handleBgClick = () => {
    setPatternIndex((state) => {
      if (state === SENTENCES[title].length - 1) {
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
      pad="small"
      gap="small"
    >
      <>
        <Box gridArea="pattern" align="center" style={{ marginTop: '30px' }}>
          <Text size="large">{mean}</Text>
        </Box>
        <Box
          gridArea="main" align="center"
          onClick={handleBgClick}>
          <Card
            pad="large" background="white" width="auto"
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
      </>
    </Grid>
  )
}

export default Page
