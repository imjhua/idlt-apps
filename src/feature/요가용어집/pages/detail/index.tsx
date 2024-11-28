import { Box, Button, Grid, Text } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { type MouseEvent, useState } from 'react'

import useQueryParams from '@/shared/hooks/useQueryParams'

import { 요가용어목록 } from '../../shared/meta'

function Page() {
  const index = Number(useQueryParams('index') as string)

  const [patternIndex, setPatternIndex] = useState<number>(index)

  const handlePreviousClick = (e: MouseEvent) => {
    e.stopPropagation()

    setPatternIndex((state) => {
      if (state === 1) {
        return 1
      }
      return state - 1
    })
  }
  const handleNextClick = (e: MouseEvent) => {
    e.stopPropagation()

    setPatternIndex((state) => {
      if (state === 요가용어목록.length) {
        return 1
      }
      return state + 1
    })
  }

  const handleBgClick = () => {
    setPatternIndex((state) => {
      if (state === 요가용어목록.length) {
        return 1
      }
      return state + 1
    })
  }

  const { 뜻, 용어, 용어풀이, 태그, 아사나 } = 요가용어목록[patternIndex - 1]
  return (
    <>
      <Grid
        fill
        height="full"
        areas={[['title'], ['description']]}
        rows={['80px', 'auto']}
        columns={['full']}
        pad="small"
        gap="medium"
        onClick={handleBgClick}
      >
        <>
          <Box gridArea="title" align="center" style={{ marginTop: '30px' }}>
            <Text size="large">
              #{patternIndex}. {용어}
            </Text>
            {태그 && (
            <Text size="small">
              ({태그}) <span>- {용어풀이}</span>
            </Text>
            )}
          </Box>

          <Box
            gridArea="description"
            gap="medium"
            pad="large"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <Text
              size="medium"
              style={{ lineHeight: '28px', }}
            >
              뜻: {뜻}
            </Text>

            <>
              {아사나 && (<>
                <Text size="medium">
                  아사나:
                </Text>
                {아사나.split('/').map((value, index) => {
                return value && (
                  <Text
                    key={index}
                    size="medium"
                    style={{
                        background: '#83c5be',
                        padding: '4px 6px',
                        borderRadius: 12,
                        color: '#444',
                        verticalAlign: 'text-top',
                        marginBottom: 8
                      }}
                    >
                    {value}
                  </Text>
                )
              })}</>)}
            </>
          </Box>
        </>
      </Grid>

      <Box
        style={{
          position: 'fixed',
          bottom: 30,
          right: 0,
          left: 0,
        }}
      >
        <Box
          gridArea="button"
          direction="row"
          justify="between"
          style={{ height: 60 }}
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
        <Box pad="large" style={{ paddingTop: 10 }}>
          <Text size="xsmall" style={{ color: '#c1121f' }}>
            * 요가에서는 산스크리트어를 사용하기 때문에 생소할 수 있어요.
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default Page
