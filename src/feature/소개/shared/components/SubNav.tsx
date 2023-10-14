import styled from '@emotion/styled/macro'
import { Box, Nav, Text } from 'grommet'
import { Link } from 'react-router-dom'

import { GNB_HEIGHT, SUB_NAV_HEIGHT, SUB_NAV_PADDING } from '@/shared/components/Layout'

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
          <Link to="#메뉴1"><Text>메뉴1</Text></Link>
          <Link to="#메뉴2"><Text>메뉴2</Text></Link>
          <Link to="#메뉴3"><Text>메뉴3</Text></Link>
        </Nav>
      </NavBlock>
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