import { Box, Button, Grid, Text } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { type MouseEvent, useState } from 'react'

import useQueryParams from '@/shared/hooks/useQueryParams'

import { 프리다이빙용어목록 } from '../../shared/meta'

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
      if (state === 프리다이빙용어목록.length) {
        return 1
      }
      return state + 1
    })
  }

  const handleBgClick = () => {
    setPatternIndex((state) => {
      if (state === 프리다이빙용어목록.length) {
        return 1
      }
      return state + 1
    })
  }

  const { 뜻, 용어, 용어풀이, 태그 } = 프리다이빙용어목록[patternIndex - 1]
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
            {태그 && <Text size="small">{태그}</Text>}
          </Box>

          <Box
            gridArea="description"
            gap="medium"
            pad="large"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            {/* {용어풀이.indexOf('(') > 0 && ( */}
            <Text
              size="small"
              // style={{
              //   display: 'block',
              //   overflow: 'hidden',
              //   whiteSpace: 'nowrap',
              //   textOverflow: 'ellipsis',
              // }}
            >
              {용어풀이}
            </Text>
            {/* )} */}
            <Text
              size="medium"
              style={{
                lineHeight: '28px',
                // overflow: 'scroll',
              }}
            >
              {뜻}
            </Text>
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
          style={{ height: 60, }}
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
        {/* 면책조항 */}
        <Box pad="large" style={{ paddingTop: 10, }}>
          <Text size="xsmall" style={{ color: '#c1121f', }}>
            * 이 용어집은 정보 제공을 목적으로 하며, 실제 다이빙 활동에서 발생할
            수 있는 부상이나 사고에 대한 책임은 지지 않습니다.
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default Page
