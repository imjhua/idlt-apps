import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Box, Button, Heading, List, Text, TextInput } from 'grommet'
import { Sort } from 'grommet-icons'
import { ChangeEvent, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { GNB_HEIGHT } from '@/shared/components/Gnb'
import theme from '@/styles/theme'

import { 요가용어목록 } from '../shared/meta'

// SEE: https://coolors.co/palettes/trending
const COLORS: Record<string, `#${string}`> = {
  동물: '#cfbaf0',
  반다: '#a4ac86',
  방향: '#f28482',
  사물: '#be95c4',
  용어: '#ffd670',
  신체부위: '#81b29a',
  상태: '#8ac926',
  현인: '#be95c4',
  호흡법: '#ff595e',
  자연: '#f4a261',
  숫자: '#e5e5e5',
  요가: '#8ecae6',
  차크라: '#a8dadc',
  '식물, 곤충': '#d4a373',
}

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isSort, setIsSort] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('search') || '')

  const filteredList = useMemo(() => {
    const filteredList = 요가용어목록.filter(({ 용어, 용어풀이, 태그 }) => {
      return (
        용어.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        용어풀이.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 ||
        태그.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
    })

    if (isSort) {
      filteredList.sort(function (a, b) {
        return a.용어 < b.용어 ? -1 : a.용어 > b.용어 ? 1 : 0
      })
    }
    return filteredList
  }, [searchValue, isSort])

  const handleOrderClick = () => {
    setIsSort((state) => !state)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setSearchValue(search)
  }

  return (
    <>
      <Box pad="large" gap="large">
        <Box
          gap="medium" style={{
          paddingTop: 20,
          paddingBottom: 10,
          position: 'fixed',
          top: `calc(env(safe-area-inset-top) + ${GNB_HEIGHT}px)`,
          left: 20, right: 20, background: `${theme.background}`
        }}>
          <Box direction="row" justify="between">
            <Heading level={2}>요가 용어집</Heading>
            <Button primary={isSort} style={{ padding: 4, borderRadius: 4 }}>
              <SortIcon sorted={isSort} onClick={handleOrderClick}>
                <Sort />
              </SortIcon>
            </Button>
          </Box>
          <TextInput
            name="name"
            placeholder={<Text>검색</Text>}
            onChange={handleInputChange}
            value={searchValue}
        />
        </Box>
        <List
          style={{ paddingTop: 100 }}
          data={filteredList.map(({ 용어, 용어풀이, 태그, 뜻, index }) => {
            return {
              item: (
                <Link
                  key={index}
                  to={{ pathname: 'detail', search: `?index=${index + 1}` }}
                  onClick={() => {
                    setSearchParams({ search: searchValue })
                  }}
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
                        color: '#444',
                        verticalAlign: 'text-top'
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
                    {용어풀이} - {뜻}
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

const SortIcon = styled.span<{ sorted: boolean }>`
  ${({ theme, sorted }) => sorted &&
    css`
      stroke: ${theme.background};
    `};
`
