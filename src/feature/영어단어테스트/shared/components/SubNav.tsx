import styled from '@emotion/styled/macro'
import { Box, Nav, Text } from 'grommet'
import { Link } from 'react-router-dom'

import { GNB_HEIGHT, SUB_NAV_HEIGHT, SUB_NAV_PADDING } from '@/shared/components/Layout'
import { Padding } from '@/shared/components/Styles'

function SubNav(){
  return (
    <>
      <NavBlock
        background="header"
      >
        <Nav
          style={{
            height: SUB_NAV_HEIGHT,
            margin: SUB_NAV_PADDING
          }}
          direction="row" background="brand" gap="large"
          justify="center"
        >
          <Link to="/영어단어테스트/영어단어추가"><Text>영어단어추가</Text></Link>
          <Link to="/영어단어테스트/영어단어퀴즈"><Text>영어단어퀴즈</Text></Link>
        </Nav>
      </NavBlock>
      <Padding height={SUB_NAV_HEIGHT + SUB_NAV_PADDING + 30} />
    </>
  )
}

export default SubNav

export const NavBlock = styled(Box)`
  position: fixed;
  right: 0;
  left: 0;
  top: ${GNB_HEIGHT}px;
  z-index: 1;
  padding-top: env(safe-area-inset-top);
`