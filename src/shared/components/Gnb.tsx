import styled from '@emotion/styled/macro'
import { Box } from '@radix-ui/themes'
// import { Header } from 'grommet'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import theme from '@/styles/theme'

// import { GNB_HEIGHT } from './Layout'
import Logo from './Logo'
import Profile from './Profile'

const GNB_HEIGHT = 62

type GnbProps = { addYOffset?: number };
function Gnb({ addYOffset }: GnbProps) {
  const [opacity, setOpacity] = useState<number>(addYOffset ? 0 : 1)

  const location = useLocation()
  const title = useMemo(() => {
    const subPath = decodeURI(location.pathname).split('/')[1]
    const hash = decodeURI(location.hash).split('#')[1]
    if (hash) {
      setOpacity(1)
    }

    return hash || subPath
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
        const yOffsetHeight = 20 // 기본 scrollY 20지점에서 opacity 계산
        const start = addYOffset + yOffsetHeight
        const opacity =
					window.scrollY < start ? 0 : (window.scrollY - start) / yOffsetHeight
        setOpacity(opacity)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [addYOffset])

  return (
    <>
      <Box
        height={`calc(${GNB_HEIGHT}px + env(safe-area-inset-top))`}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          zIndex: 10,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `1px solid ${theme.border}`,
          background: `${theme.background}`
        }}
      >
        <div>
          <Logo />
          <Title opacity={opacity}>{title && title}</Title>
        </div>

        <Profile email="idlt@email.com" />
      </Box>
      <Box height={`${GNB_HEIGHT}px`} />
    </>
  )
}

export default Gnb

const Title = styled.span<{ opacity: number }>`
  margin: 4px;
  opacity: ${({ opacity }) => opacity};
  transition: .5s;
`
