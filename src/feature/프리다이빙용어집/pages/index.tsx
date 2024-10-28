import { Box, Heading, List, Text, TextInput } from 'grommet'
import { ChangeEvent, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { 목록 } from '../shared/meta'

const COLORS = ['8AC926', '1982C4', 'a4ac86', 'FFCA3A', 'FF595E']
function HomePage() {
  const [value, setValue] = useState<string>('')

  const filteredList = useMemo(() => {
    return 목록.filter(({ 용어 }) => {
      return (용어.toLowerCase().indexOf(value) > -1) || (용어.toUpperCase().indexOf(value)) > -1
    })
  }, [value])

  const colorIndex = useMemo(() => {
    const tags = 목록.map(({ 태그 }) => {
      return 태그
    })

    return Array.from(new Set(tags))
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setValue(search)
  }

  return (
    <>
      <Box pad="large" gap="large">
        <Heading level={2}>프리다이빙 용어집</Heading>

        <TextInput
          name="name"
          placeholder={<Text>검색</Text>}
          onChange={handleInputChange}
      />
        <List
          data={filteredList.map(({ 용어, 용어풀이, 태그 }, index) => {
            return {
              item: (
                <Link key={index} to={{ pathname: 'detail', search: `?index=${index}` }}>
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
