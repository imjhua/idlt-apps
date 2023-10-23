import styled from '@emotion/styled/macro'
import { Box, Nav, Text } from 'grommet'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { GNB_HEIGHT, SUB_NAV_HEIGHT, SUB_NAV_PADDING } from '@/shared/components/Layout'
import { Padding } from '@/shared/components/Styles'

import { SUB_MENU } from '../meta'

function SubNav(){
  const location = useLocation()

  const menu = useMemo(() => {
    const menu = SUB_MENU.map(({ path, title }) => {
      return { path, title, active: path === decodeURI(location.pathname) }
    })
    return menu
  }, [location])

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
        >{menu.map(({ path, title, active }, index) => {
            return (
              <Link
                style={{ fontWeight: active ? 'bold' : 'normal' }}
                key={index} to={path}><Text>{title}</Text></Link>
            )
          })}
        </Nav>
      </NavBlock>
      <Padding height={SUB_NAV_HEIGHT + SUB_NAV_PADDING} />
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