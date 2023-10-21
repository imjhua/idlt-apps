
import { Box, Button } from 'grommet'
import { Link } from 'react-router-dom'

function Page(){
  return (
    <Box gap="small">
      <Link to="영어단어추가">
        <Button label="영어단어 추가" />
      </Link>

      <Link to="영어단어퀴즈">
        <Button label="영어단어 퀴즈" />
      </Link>
    </Box>
  )
}

export default Page

