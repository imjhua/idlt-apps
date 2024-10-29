import { Box, Button, Grid, Text } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { type MouseEvent, useState } from 'react'

import useQueryParams from '@/shared/hooks/useQueryParams'

import { 프리다이빙용어목록 } from '../../shared/meta'

function Page() {
  const index = Number(useQueryParams('index') as string)

  const [patternIndex, setPatternIndex] = useState<number>(index)

  /* TODO: index & key URL변경 */
  const handlePreviousClick = (e: MouseEvent) => {
    e.stopPropagation()

    setPatternIndex((state) => {
      if (state === 0) {
        return 0
      }
      return state - 1
    })
  }
  const handleNextClick = (e: MouseEvent) => {
    e.stopPropagation()

    setPatternIndex((state) => {
      if (state === 프리다이빙용어목록.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  const handleBgClick = () => {
    setPatternIndex((state) => {
      if (state === 프리다이빙용어목록.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  const { 뜻, 용어, 용어풀이, 태그 } = 프리다이빙용어목록[patternIndex]
  return (
    <Grid
      fill
      height="full"
      areas={[['title'], ['description'], ['button']]}
      rows={['80px', 'auto', '150px']}
      columns={['full']}
      pad="small"
      gap="medium"
      onClick={handleBgClick}
    >
      <>
        <Box gridArea="title" align="center" style={{ marginTop: '30px' }}>
          <Text size="large">
            #{patternIndex + 1}. {용어}
          </Text>
          {태그 && <Text size="small">{태그}</Text>}
        </Box>

        <Box gridArea="description" gap="medium" pad="large">
          {용어풀이.indexOf('(') > 0 && (
            <Text
              size="small"
              style={{
                display: 'block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {용어풀이}
            </Text>
          )}
          <Text size="medium" style={{ lineHeight: '28px' }}>
            {뜻}
          </Text>
        </Box>

        <Box
          gridArea="button"
          direction="row"
          justify="between"
          style={{
            height: 100,
            position: 'fixed',
            bottom: 100,
            right: 0,
            left: 0,
          }}
        >
          <Button
            pad="none"
            style={{
              height: '100%',
              width: 60,
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
              width: 60,
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
