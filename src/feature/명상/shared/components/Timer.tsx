import styled from '@emotion/styled/macro'
import { Box, Text } from 'grommet'
import { useEffect, useMemo, useState } from 'react'

import { Highlight } from '@/shared/components/Styles'

import { STATUS } from '../meta'

const TIME = 60

type TimerProps = { minutes: number; onEnd: () => void }
function Timer({ minutes, onEnd }: TimerProps){
  const [timerId, setTimerId] = useState<NodeJS.Timeout>()
  const [status, setStatus] = useState<STATUS>(STATUS.READY)
  const [seconds, setSeconds] = useState<number>(minutes * TIME)

  useEffect(() => {
    if (status === STATUS.READY){
      setStatus(STATUS.START)
    }
    if (status === STATUS.END){
      clearInterval(timerId)
      setTimerId(undefined)
    }
  }, [status, timerId, onEnd])

  useEffect(() => {
    if (status === STATUS.START){
      console.log('start')
      const id = setInterval(() => {
        console.log('timer')

        setSeconds((state) => {
          if (state > 0){
            return state - 1
          }
          return state
        })
      }, 1000)
      setTimerId(id)
    }
  }, [status])

  const time = useMemo(() => {
    if (seconds === 0){
      return { minute: '', second: '' }

    }
    const minute = Math.floor(seconds / 60).toString().padStart(2, '0')
    const second = (seconds % 60).toString().padStart(2, '0')
    return { minute, second }
  }, [seconds])

  useEffect(() => {
    if (time.minute === '' && time.second === ''){
      setStatus(STATUS.END)
    }
  }, [time])

  const text = useMemo(() => {
    if (time.minute === '' && time.second === ''){
      return '끝'
    }
    return `${time.minute} : ${time.second}`
  }, [time])

  const handleTimerClick = () => {
    if (status === STATUS.END){
      onEnd()
      return
    }

    setStatus((state) => {
      if (state === STATUS.START){
        clearInterval(timerId)
        return STATUS.STOP
      }

      if (state === STATUS.STOP){
        setTimerId(undefined)
        return STATUS.START
      }
      return status
    })
  }

  return (
    <Box direction="column">
      <Text alignSelf="center" size="3xl" margin="medium">
        <Highlight>
          {status !== STATUS.END && (status === STATUS.STOP ? '멈춤' : '시작')}
        </Highlight>
      </Text>

      <Block onClick={handleTimerClick}>
        <Text size="6xl" weight={900}>{text}</Text>
      </Block>
    </Box>
  )
}

export default Timer

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    font-size: 170px;
  }

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`
