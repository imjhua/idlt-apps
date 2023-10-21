
import styled from '@emotion/styled/macro'
import { Box, Button } from 'grommet'
import { Link } from 'react-router-dom'

function Page(){
  return (
    <PageBlock>
      <Box
        gap="large"
        justify="center"
        alignContent="center"
      >
        <Link to="영어단어추가">
          <Button label="영어단어 추가" />
        </Link>
        <Link to="영어단어퀴즈">
          <Button label="영어단어 퀴즈" />
        </Link>
      </Box>
    </PageBlock>
  )
}

export default Page

const PageBlock = styled.div`
  text-align: center;
  margin-top: 140px;
  @media (orientation: landscape) {
    margin-top: 70px;
  }
`
