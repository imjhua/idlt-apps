
import { Box, Button } from 'grommet'
import { Link } from 'react-router-dom'

import useTitle from '@/shared/hooks/useTitle'

function Page(){
  useTitle()

  return (
    <Box gap="small">
      <Link to="영어단어추가">
        <Button label="영어단어 추가" />
      </Link>
    </Box>
  )
}

export default Page

