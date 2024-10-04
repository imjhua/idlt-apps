
import styled from '@emotion/styled/macro'
import { useEffect, useState } from 'react'

import { COUNT_DWON_STATUS, RUNNING_STATUS } from '../meta'

type CountDownProps = {
  count: number;
  onCountDownStatus: (status: COUNT_DWON_STATUS) => void;
  onRunningStatus: (status: RUNNING_STATUS) => void;
}
function CountDown({ count, onCountDownStatus, onRunningStatus }: CountDownProps){
  const [countDown, setCountDown] = useState<number>(count)

  useEffect(() => {
    setCountDown(count)
    for (let i = 1; i <= count; i++) {
      ((i) => {
        setTimeout(() => {
          setCountDown(count - i)
          if (i === count) {
            onCountDownStatus(COUNT_DWON_STATUS.HIDDEN)
            onRunningStatus(RUNNING_STATUS.RUN)
          }
        }, 1000 * i)
      })(i)
    }
  }, [count, onCountDownStatus, onRunningStatus])

  return countDown ? (
    <Text>{countDown}</Text>
  ) : null
}

export default CountDown

const Text = styled.div`
  position: fixed;
  transform: translate(50%, 50%) scale(4);
  top: 50%;
  right: 50%;

  font-weight: bold;
  font-size: 50px;

  color: ${({ theme }) => theme.highlight};
`
