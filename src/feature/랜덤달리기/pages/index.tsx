import { Box, } from 'grommet'
import { useCallback, useState } from 'react'

import CountDown from '../shared/components/CountDown'
import Run from '../shared/components/Run'
import Setting from '../shared/components/Setting'
import { COUNT_DWON_STATUS, STATUS } from '../shared/meta'

const COUNT_DOWN = 3
function MainPage(){

  const [count, setCount] = useState<number>(0)

  const [countDownStatus, setCountDownStatus] = useState<COUNT_DWON_STATUS>(COUNT_DWON_STATUS.READY)
  const [countDown, setCountDown] = useState<number>(COUNT_DOWN)

  const [status, setStatus] = useState<STATUS>(STATUS.READY)

  const handleCountChange = (count: number) => {
    setCount(count)
  }
  const handleStatusUpdate = useCallback((status: STATUS) => {
    setStatus(status)

    if (status === STATUS.START){
      setCountDownStatus(COUNT_DWON_STATUS.START)

      // 카운트다운
      setCountDown(COUNT_DOWN)
      for (let i = 1; i <= COUNT_DOWN; i++){
        (function(i){
          setTimeout(() => {
            setCountDown(COUNT_DOWN - i)
            if (i === COUNT_DOWN){
              setCountDownStatus(COUNT_DWON_STATUS.READY)
            }
          }, 1000 * i)
        }(i))
      }
    }
  }, [])

  return (
    <Box gap="small">
      <Setting status={status} count={count} onChange={handleCountChange} />
      <Run
        delay={COUNT_DOWN}
        status={status}
        count={count}
        countDownStatus={countDownStatus}
        onUpdateStatus={handleStatusUpdate} />

      {/* <CountDown count={3} /> */}
      {countDownStatus === COUNT_DWON_STATUS.START && <CountDown count={countDown} />}
    </Box>
  )
}

export default MainPage