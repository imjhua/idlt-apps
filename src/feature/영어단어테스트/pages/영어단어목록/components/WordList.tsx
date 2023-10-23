import { Box, List, Menu, Text, } from 'grommet'
import { More, Star } from 'grommet-icons'

import { wordListOriginal } from '@/feature/영어단어테스트/shared/meta'

import Sorting from './Sorting'

function WordList(){
  // TODO: 알파벳 또는 추가 순서 또는 즐겨찾기 정렬
  // 무한스크롤
  // 즐겨찾기
  // 단어 삭제

  return (
    <Box>
      <Box pad="small" direction="row" justify="end">
        <Sorting />
      </Box>

      <List
        primaryKey="word"
        secondaryKey={({ id, meaning, favorites }) => (
          <Box key={id} direction="row" align="center">
            <Text size="small" color="dark-4">
              {meaning}
            </Text>
            <Text>{favorites && <Star style={{ fill: '#ffc95e' }} />}</Text>
          </Box>
        )}
        data={wordListOriginal}
        action={({ id }, index) => {
          console.log(id)

          return (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={[{
                label: '삭제',
                onClick: () => {
                  console.log('삭제 클릭')
                }
              }]}
            />
          ) }}
      />
    </Box>
  )
}

export default WordList
