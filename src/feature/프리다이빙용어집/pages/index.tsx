import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Box, Button, Heading, List, Text, TextInput } from 'grommet'
import { Sort } from 'grommet-icons'
import { ChangeEvent, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { 프리다이빙용어목록 } from '../shared/meta'

const COLORS = ['8AC926', '1982C4', 'a4ac86', 'FFCA3A', 'FF595E', '8ecae6', '9f86c0']
function HomePage() {
  const [isSort, setIsSort] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  /* TODO: 정렬했을때 index 변경 */
  const filteredList = useMemo(() => {
    const filteredList = 프리다이빙용어목록.filter(({ 용어, 용어풀이 }) => {
      return (
        용어.toLowerCase().indexOf(value.toLowerCase()) > -1
        || 용어풀이.toUpperCase().indexOf(value.toUpperCase()) > -1
      )
    })

    if (isSort) {
      filteredList.sort(function (a, b) {
        return a.용어 < b.용어 ? -1 : a.용어 > b.용어 ? 1 : 0
      })
    }
    return filteredList
  }, [value, isSort])

  const colorIndex = useMemo(() => {
    const tags = 프리다이빙용어목록.map(({ 태그 }) => {
      return 태그
    })

    return Array.from(new Set(tags))
  }, [])

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
        <Box direction="row" justify="between">
          <Heading level={2}>프리다이빙 용어집</Heading>
          <Button primary={isSort} style={{ padding: 4, borderRadius: 4 }}>
            <SortIcon
              sort={isSort}
              onClick={handleOrderClick}
          />
          </Button>
        </Box>

        <TextInput
          name="name"
          placeholder={<Text>검색</Text>}
          onChange={handleInputChange}
        />
        <List
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
                        background: `#${COLORS[colorIndex.indexOf(태그)]}`,
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
