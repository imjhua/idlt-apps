
import styled from '@emotion/styled/macro'
import { Box, Button } from 'grommet'
import { Link } from 'react-router-dom'

import { SUB_MENU } from '../shared/meta'

function Page(){
  return (
    <PageBlock>
      <Box
        gap="large"
        justify="center"
        alignContent="center"
      >
        {SUB_MENU.map(({ path, title }, index) => {
          const to = decodeURI(path.split('/').slice(-1)[0])
          return (
            <Link key={index} to={to}>
              <Button label={title} />
            </Link>
          )
        })}
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
