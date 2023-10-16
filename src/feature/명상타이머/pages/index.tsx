import { keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Box, Button } from 'grommet'
import { useState } from 'react'

import useTitle from '@/shared/hooks/useTitle'

import CountDown from '../shared/components/CountDown'
import InspirationalQuotes from '../shared/components/InspirationalQuotes'
import Timer from '../shared/components/Timer'
import { COUNT_DWON_STATUS } from '../shared/meta'

const COUNT_DOWN = 3
const TIMER_MINUTES = 10

function Page(){
  useTitle('명상타이머 | IDLT APPs')

  const [countDownStatus, setCountDownStatus] = useState<COUNT_DWON_STATUS>(COUNT_DWON_STATUS.READY)
  const [countDown, setCountDown] = useState<number>(COUNT_DOWN)

  const [showTimer, setShowTimer] = useState<boolean>(false)

  const handleTimerEnd = () => {
    setShowTimer(false)
  }
  const handleTimerButtonClick = () => {
    setCountDownStatus(COUNT_DWON_STATUS.START)

    // 카운트다운
    setCountDown(COUNT_DOWN)
    for (let i = 1; i <= COUNT_DOWN;i++){
      (function(i){
        setTimeout(() => {
          setCountDown(COUNT_DOWN - i)
          if (i === COUNT_DOWN){
            setShowTimer(true)
          }
        }, 1000 * i)
      }(i))
    }
  }

  if (showTimer){
    return <Timer minutes={TIMER_MINUTES} onEnd={handleTimerEnd} />
  }

  return (
    <Box align="center">
      <InspirationalQuotes />
      <ButtonBlock>
        <Button
          primary
          size="large"
          label="타이머 시작" onClick={handleTimerButtonClick} />
      </ButtonBlock>
      {/* <CountDown count={3} /> */}
      {countDownStatus === COUNT_DWON_STATUS.START && countDown !== 0 && <CountDown count={countDown} />}
    </Box>
  )
}

export default Page

const float = keyframes`
  from{
    transform: translateY(-4 px);
  }
  to{
    transform: translateY(4px);
  }
`

const ButtonBlock = styled.div`
  animation: ${float} 1s 1s ease-out alternate infinite;

  position: absolute;
  bottom: 50px;
  @media (orientation: landscape) {
    bottom: 30px;
  }
`
