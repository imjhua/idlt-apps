import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Box, Button, Heading, List, Text, TextInput } from 'grommet'
import { Sort } from 'grommet-icons'
import { ChangeEvent, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { GNB_HEIGHT } from '@/shared/components/Gnb'
import theme from '@/styles/theme'

import { 프리다이빙용어목록 } from '../shared/meta'

// SEE: https://coolors.co/palettes/trending
const COLORS: Record<string, `#${string}`> = {
  '프리다이빙 협회': '#8ac926',
  용어: '#8ecae6',
  훈련법: '#a4ac86',
  종목: '#ffca3a',
  기술: '#cfbaf0',
  // 질환: '#be95c4',
  위험상태: '#ff595e',
  스트레칭: '#81b29a',
}

// console.log(Array.from(new Set(프리다이빙용어목록.map((({ 태그 }) => (`"${태그 || ''}"`))))).join(', '))
function HomePage() {
  const [isSort, setIsSort] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const filteredList = useMemo(() => {
    const filteredList = 프리다이빙용어목록.filter(({ 용어, 용어풀이 }) => {
      return (
        용어.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        용어풀이.toUpperCase().indexOf(value.toUpperCase()) > -1
      )
    })

    if (isSort) {
      filteredList.sort(function (a, b) {
        return a.용어 < b.용어 ? -1 : a.용어 > b.용어 ? 1 : 0
      })
    }
    return filteredList
  }, [value, isSort])

  const handleOrderClick = () => {
    setIsSort((state) => !state)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setValue(search)
  }

  return (
    <>
      <Box pad="large" gap="large">
        <Box
          gap="medium" style={{
          paddingTop: 20,
          paddingBottom: 10,
          position: 'fixed', top: `${GNB_HEIGHT}px`, left: 20, right: 20, background: `${theme.background}`
}}>
          <Box direction="row" justify="between">
            <Heading level={2}>프리다이빙 용어집</Heading>
            <Button primary={isSort} style={{ padding: 4, borderRadius: 4 }}>
              <SortIcon sort={isSort} onClick={handleOrderClick} />
            </Button>
          </Box>
          <TextInput
            name="name"
            placeholder={<Text>검색</Text>}
            onChange={handleInputChange}
        />
        </Box>
        <List
          style={{ paddingTop: 100 }}
          data={filteredList.map(({ 용어, 용어풀이, 태그, index }) => {
            return {
              item: (
                <Link
                  key={index}
                  to={{ pathname: 'detail', search: `?index=${index}` }}
                >
                  <Text size="large">{용어}</Text>
                  {태그 && (
                    <Text
                      size="small"
                      style={{
                        background: `${COLORS[태그]}`,
                        borderRadius: 12,
                        padding: '4px 6px',
                        marginLeft: 4,
                      }}
                    >
                      {태그}
                    </Text>
                  )}

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
                </Link>
              ),
            }
          })}
        />
      </Box>
    </>
  )
}

export default HomePage

const SortIcon = styled(Sort)<{ sort: boolean }>`
  ${({ theme, sort }) => sort &&
    css`
      stroke: ${theme.background};
    `};
`
