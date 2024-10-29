import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { useContext, useEffect, useRef, useState } from 'react'

import { ThemeContext } from '@/context/ThemeProvider'

function ThemeSwitch() {
  const { theme, onChangeTheme } = useContext(ThemeContext)

  const [show, setShow] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleScroll() {
      setShow(false)

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => {
        setShow(true)
      }, 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ModeBlock
      show={show}
      isDark={theme === 'dark'}
      onClick={() => {
        onChangeTheme()
      }}>

      <Icon isDark={theme === 'dark'} />
    </ModeBlock>
  )
}

export default ThemeSwitch

const ModeBlock = styled.div<{ show: boolean; isDark: boolean }>`
  transition: .3s;
  /* FIXME: 스크롤 이벤트 동작 안함. 수정필요 */
  /* ${({ show }) => !show && css`
    transform: translateY(-20%);
  `} */

  position: fixed;
  
  bottom: 16px;
  right: 16px;
  border-radius: 40px;
  padding: 10px;
  background: #fff;

  ${({ isDark, theme }) => isDark ?
    css`
  ` :
    css`
      border: 1px solid ${theme.border};
  `}
  z-index: 18;

`
const Icon = styled.div<{ isDark: boolean }>`
  ${({ isDark }) => isDark ?
    css`
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 4px solid #2d3748;
      background-color: #2d3748;
      transform: scale(0.55);
      transition: all 0.45s ease 0s;
      overflow: visible;
      box-shadow: none;

      &:before {
        content: "";
        position: absolute;
        right: -9px;
        top: -9px;
        height: 24px;
        width: 24px;
        border: 2px solid #2d3748;
        border-radius: 50%;
        transform: translate(14px, -14px);
        opacity: 0;
        transition: transform 0.45s ease 0s;
      }
        
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0px 0px -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 #2d3748,0 23px 0 #2d3748,23px 0 0 #2d3748,-23px 0 0 #2d3748,15px 15px 0 #2d3748,-15px 15px 0 #2d3748,15px -15px 0 #2d3748,-15px -15px 0 #2d3748;
        transform: scale(1);
        transition: all 0.35s ease 0s;
      }
    `
    :
    css`
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      padding: 2px;
      border: none;
      background-color: var(--theme-ui-colors-transparent);
      transform: scale(1);
      -webkit-transition: all 0.45s ease;
      transition: all 0.45s ease;
      overflow: hidden;
      box-shadow: inset 8px -8px 0px 0px #2d3748;
    
      &:before {
        content: "";
        position: absolute;
        right: -9px;
        top: -9px;
        height: 24px;
        width: 24px;
        border: none;
        border-radius: 50%;
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
        opacity: 1;
        -webkit-transition: -webkit-transform 0.45s ease;
        transition: transform 0.45s ease;
      }
    
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 #2d3748,0 23px 0 #2d3748,23px 0 0 #2d3748,-23px 0 0 #2d3748,15px 15px 0 #2d3748,-15px 15px 0 #2d3748,15px -15px 0 #2d3748,-15px -15px 0 #2d3748;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
      }
    `
}
`
