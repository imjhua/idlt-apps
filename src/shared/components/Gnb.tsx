import styled from '@emotion/styled/macro'
import { Header } from 'grommet'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Logo from './Logo'
import Profile from './Profile'

type GnbProps = { addYOffset?: number }
function Gnb({ addYOffset }: GnbProps){
  const [opacity, setOpacity] = useState<number>(addYOffset ? 0 : 1)

  const location = useLocation()
  const title = useMemo(() => {
    const path = decodeURI(location.pathname)
    return path.split('/')[1]
  }, [location])

  /*
  헤더 타이틀 노출 케이스
  - 없음
  - 있음
  - 임계치에 따라 보여짐(디폴트 / 속성)
  */
  useEffect(() => {
    const handleScroll = () => {
      if (addYOffset) {
        const yOffsetHeight = 20 // scrollY 20지점에서 opacity 계산
        const start = addYOffset + yOffsetHeight
        const opacity = window.scrollY < start ? 0 : (window.scrollY - start) / yOffsetHeight
        setOpacity(opacity)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [addYOffset])

  return (
    <Header>
      <div>
        <Logo />
        <Title opacity={opacity}>{(title) && title}</Title>
      </div>
      <Profile email="idlt@email.com"></Profile>
    </Header>
  )
}

export default Gnb

export const Title = styled.span<{ opacity: number }>`
  margin: 4px;
  opacity: ${({ opacity }) => opacity};
  transition: .5s;
`
