/* eslint-disable react-refresh/only-export-components */
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import { createRoot } from 'react-dom/client'

const SELECTOR_ID = 'toast'
const Toast = function () {
  return (
    <ToastBlock id={SELECTOR_ID} />
  )
}

export function notify(message: string) {
  if (typeof window !== 'undefined' && document) {
    const selectorDiv = document.getElementById(SELECTOR_ID) as HTMLElement
    const root = createRoot(selectorDiv)
    const portal = createPortal(
      <Message show={!!message}>
        {message}
      </Message>
      , selectorDiv)

    root.render(portal)

    setTimeout(() => {
      selectorDiv.innerHTML = ''
    }, (TIMING) * 1000)
  }
}

export default Toast

const ToastBlock = styled.div`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  > div{
    padding: 14px 20px;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    border-radius: 8px;
    /* border: 1px solid ${({ theme }) => theme.border}; */
  }
`

const Message = styled.div<{ show: boolean }>`
  opacity: 0;

  ${({ show }) => show && css`
    animation: ${FADEIN_TIMING.duration}s ${fadein} ${FADEIN_TIMING.delay}s ease-in,
            ${HOLD_TIMING.duration}s ${hold} ${HOLD_TIMING.delay}s ease-out,
            ${FADEOUT_TIMING.duration}s ${fadeout} ${FADEOUT_TIMING.delay}s ease-out;
  `}
`

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const hold = keyframes`
  from, to {
    opacity: 1;
  }
`

const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

/*
텍스트필드 탭 시 노출 후 사라짐
a.
opacity (노출) 0% -> 100%
duration : 0.3
start delay : 0.2
easing : ease in , cubic

b.
opacity (사라질 때) 100% -> 0%
duration : 0.4
start delay : 2.6
easing : ease out , cubic
*/

const TIMING = 2.2 // 각각의 duration 합
const FADEIN_TIMING = {
  delay: 0.2,
  duration: 0.3
}
const HOLD_TIMING = {
  delay: FADEIN_TIMING.delay + FADEIN_TIMING.duration,
  duration: 1.5
}
const FADEOUT_TIMING = {
  delay: HOLD_TIMING.delay + HOLD_TIMING.duration,
  duration: 0.4
}