import styled from '@emotion/styled/macro'
import { Box, Button, Text } from 'grommet'
import { useEffect, useMemo, useState } from 'react'

import { TOP_PADDING } from '@/shared/components/Layout'
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
    return `${time.minute} : ${time.second}`
  }, [time])

  const handleTimerEndClick = () => {
    setStatus(STATUS.END)
    onEnd()
  }

  const handleTimerClick = () => {
    console.log('asdf')

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
  if (status === STATUS.END){
    return (
      <Block onClick={handleTimerClick}>
        <Text alignSelf="center" size="6xl" weight={900}>끝</Text>
      </Block>
    )

  }

  return (
    <>
      <Block onClick={handleTimerClick}>
        <Box>
          <Text alignSelf="center" size="3xl" margin="medium">
            <Highlight>
              {(status === STATUS.STOP ? '멈춤' : '시작')}
            </Highlight>
          </Text>

          <Text alignSelf="center" size="6xl" weight={900}>{text}</Text>
        </Box>
      </Block>

      <ButtonBlock>
        <Button
          primary
          size="small"
          label="종료하기"
          onClick={handleTimerEndClick} fill />
      </ButtonBlock>
    </>
  )
}

export default Timer

const Block = styled.div`
  /* background-color: red; */

  text-align: center;
  
  position: fixed;
  right: 0;
  left: 0; 
  top: 0;
  bottom: 0;
  padding-top: calc(100px + ${TOP_PADDING}px);

`
const ButtonBlock = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
`
