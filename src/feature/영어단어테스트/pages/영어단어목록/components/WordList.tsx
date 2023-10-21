import { Box, List, } from 'grommet'

function WordList(){
  // TODO: 알파벳 정렬
  // 무한스크롤
  const data = [
    { word: 'A', meaning: 'A 뜻' },
    { word: 'B', meaning: 'B 뜻' },
    { word: 'C', meaning: 'C 뜻' },
  ]
  return (
    <Box>
      <List
        primaryKey="word"
        secondaryKey="meaning"
        data={data}
      />
    </Box>
  )
}

export default WordList
