import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import {
  Box, Button, CheckBox, DataTable, Text
} from 'grommet'
import { Cycle } from 'grommet-icons'
import { useEffect, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Image from '@/shared/components/Image'
import NoData from '@/shared/components/NoData'

import { CHARACTER_LIST, STATUS } from '../meta'
import CountDown from './CountDown'

const COUNT_DOWN = 3
const DURATION = 10
type RunProps = { status: STATUS | undefined; count: number; onUpdateStatus: (status: STATUS) => void }

function Run({ status, count = 0, onUpdateStatus }: RunProps){
  const [countDown, setCountDown] = useState<number>(COUNT_DOWN)

  const [memberList, setMemberList] = useState<string[]>([])
  const [playerList, setPlayerList] = useState<{
    index: number;
    winner: boolean;
    character: string;
    timings: number[];
  }[]>([])

  useEffect(() => {
    if (status === STATUS.READY){
      onUpdateStatus(STATUS.START)
    }
  }, [status, count, onUpdateStatus])

  useEffect(() => {
    // 카운트 변경시마다 멤버 리스트 업데이트
    if (!count){
      return
    }

    const memberList = CHARACTER_LIST.reduce<string[]>((data) => {
      const randomNumber1 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
      const randomNumber2 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
      const temp = data[randomNumber1]
      data[randomNumber1] = data[randomNumber2]
      data[randomNumber2] = temp
      return data
    }, [...CHARACTER_LIST]).slice(0, count)
    setMemberList(memberList)

    const playerListInit = memberList.map((value, index) => {
      return {
        index: index + 1,
        character: value,
        timings: [],
        winner: false,
      }
    })
    setPlayerList(playerListInit)
  }, [count])

  const handleGoButtonClick = () => {
    if (memberList.length === 0 || status === STATUS.START){
      return
    }

    const winningIndex = getRandomIntInclusive(0, memberList.length - 1)
    const randomMaxValues = [
      16, // 0
      14, // 1
      18, // 2
      14, // 3
      15, // 4
      17, // 5
      14, // 6
      13 // 7  -> sum 121
    ]
    // console.log('wwwww'.repeat(10))
    // console.log(memberList[winningIndex])
    // console.log(randomMaxValues.reduce((data, item) => data + item, 0))
    // console.log('='.repeat(10))

    const playerList = memberList.map((player, index) => {
      const number0 = getRandomIntInclusive(1, randomMaxValues[0])
      const number1 = getRandomIntInclusive(1, randomMaxValues[1])
      const number2 = getRandomIntInclusive(1, randomMaxValues[2])
      const number3 = getRandomIntInclusive(1, randomMaxValues[3])
      const number4 = getRandomIntInclusive(1, randomMaxValues[4])
      const number5 = getRandomIntInclusive(1, randomMaxValues[5])
      const number6 = getRandomIntInclusive(1, randomMaxValues[6])
      const number7 = getRandomIntInclusive(1, randomMaxValues[7])

      const valueList = [number0, number1, number2, number3, number4, number5, number6, number7]
      const sumValue = valueList.reduce((data, item) => data + item, 0)
      if (sumValue > 90){
        // console.log(player)
        // console.log([...valueList])
        // console.log('보정')
        const filtedList = valueList.filter((value) => {
          return value > 12
        })
        filtedList.forEach((_, maxValueIndex) => {
          valueList[maxValueIndex] = getRandomIntInclusive(1, 10)
        })
        // console.log(valueList)
      }

      const lastNumber = (winningIndex === index ? 100 - sumValue : getRandomIntInclusive(1, 5))

      // console.log(player)
      // console.log([number0, number1, number2, number3, number4, number5, number6, number7, lastNumber])
      // console.log([number0, number1, number2, number3, number4, number5, number6, number7, lastNumber].reduce((data, item) => data + item, 0))
      return {
        index: index + 1,
        character: player,
        timings: [...valueList, lastNumber],
        winner: winningIndex === index,
      }
    })

    // 플레이어 설정
    setPlayerList(playerList)

    // 카운트다운
    setCountDown(COUNT_DOWN)
    for (let i = 1; i <= COUNT_DOWN;i++){
      (function(i){
        setTimeout(() => {
          setCountDown(COUNT_DOWN - i)
        }, 1000 * i)
      }(i))
    }

    // 당첨자 확인
    setTimeout(() => {
      if (!playerList){
        return
      }
      // console.log(playerList.filter(({ winner }) => (winner))[0].character, '당첨!')
    }, ((COUNT_DOWN + DURATION) * 1000) + 200 + 200)

    onUpdateStatus(STATUS.READY)
  }

  const handleResetButtonClick = () => {
    onUpdateStatus(STATUS.RESET)
  }
  const handleShuffleButtonClick = () => {
    const memberList = CHARACTER_LIST.reduce<string[]>((data) => {
      const randomNumber1 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
      const randomNumber2 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
      const temp = data[randomNumber1]
      data[randomNumber1] = data[randomNumber2]
      data[randomNumber2] = temp
      return data
    }, [...CHARACTER_LIST]).slice(0, count)
    setMemberList(memberList)

    const playerListInit = memberList.map((value, index) => {
      return {
        index: index + 1,
        character: value,
        timings: [],
        winner: false,
      }
    })
    setPlayerList(playerListInit)
  }
  const [speedMode, setSpeedMode] = useState(false)

  return (
    <Block>
      <Box gap="small">
        <Box direction="row" gap="medium" justify="between">
          {
            status !== STATUS.START ? (
              <>
                <Box direction="row" gap="small">
                  <Button
                    label="Go!" onClick={handleGoButtonClick} disabled={!count}
                    primary />
                  <CheckBox
                    checked={speedMode}
                    label="Speed Mode"
                    onChange={(event) => setSpeedMode(event.target.checked)}
                    disabled={!count}
                  />
                </Box>
                <Button
                  style={{ borderRadius: 10 }}
                  label={<Cycle />} onClick={handleShuffleButtonClick} disabled={!count} />
              </>
            ) : (
              <Button label="Reset" onClick={handleResetButtonClick} disabled={countDown !== 0} />
            )
          }
        </Box>
        <Box>
          <Item>
            {!count ? (
              <NoData text="인원수를 입력해주세요." />
            ) : (
              <DataTable
                data={playerList}
                columns={[
                  {
                    property: 'index',
                    header: <Text>#</Text>,
                    align: 'center',
                    primary: true,
                    size: 'small'
                  },
                  {
                    property: 'character',
                    header: <Text></Text>,
                    size: 'large',
                    render: ({ character, timings }) => {
                      return (
                        <>
                          <Rail
                            alpha={getRandomIntInclusive(1, 2) % 2 === 0 ? 1 : -1}
                            delay={COUNT_DOWN}
                            duration={speedMode ? 1 : DURATION}
                            active={status === STATUS.START}
                            timing={timings}
                            speedMode={speedMode}
                          >
                            <Image
                              width={38} height={38}
                              src={`/images/animal/${String(character)}.png`}
                              alt={character} />
                          </Rail>
                        </>
                      )
                    }
                  },
                ]}
              />)}
            {/* <CountDown count={3} /> */}
            {status === STATUS.START && countDown !== 0 && <CountDown count={countDown} />}
          </Item>
        </Box>
      </Box>
    </Block>
  )
}

export default Run

const Block = styled.div`
  padding: 16px;
  margin-bottom: 4px;
  border: 3px solid ${({ theme }) => theme.border};
`

const Item = styled.div`
  position: relative;
  table{
    width: 100%;
    @media (max-width: 968px) {
      width: auto;
    }

    border-collapse: collapse;

    position: relative;
    &:after{
      content: '';
      display: inline-block;
      /* background-color: ${({ theme }) => theme.highlight}; */
      background-color: rgb(165 155 121 / 20%);
      vertical-align: middle;
      width: 2px;

      position: absolute;
      right: 10px;
      top: 36px;
      bottom: 0;
    }

    th:first-of-type{
      width: 40px;
    }
    th{
      padding: 4px 6px !important;
    }
    td{
      padding: 4px 0 !important;
    }
    tr{
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  } 
`
const Rail = styled.div<{ speedMode: boolean; alpha: number; delay: number; duration: number; active: boolean; timing: number[] }>`
  width: calc(100% - 46px);
  transform: translateX(0px) translateY(0px);
  /* transform: translateX(calc(99%)) translateY(0px); */
  /* transform: translateX(calc(100% - 20px)) translateY(0px); */
  
  ${({
    alpha, delay, duration, active, timing
  }) => !active || timing.length === 0 ?
    css`
      animation: ${ready(alpha)} 1s ease infinite;
    `
    : css`
      animation: ${running(timing)} ${duration}s ${delay}.2s linear forwards;
  `}
  

  ${({ speedMode }) => speedMode && css`
    margin-left: -20px;
    &:before{
      background-image: url('/images/fire.png');
      background-size: 20px 20px;
      display: inline-block;
      width: 20px; 
      height: 20px;
      content:"";
      transform: rotate(-90deg) translateX(-12px);
    }
  `}

  > img{
    vertical-align: middle;
  }

  ${({ delay, active, timing, duration }) => active && (timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7] + timing[8]) === 100 && css`
    > img{
      animation: ${shake} .3s ${delay + duration}.4s ease-in infinite;
    }
  `}
`

const ready = (alpha: number) => keyframes`
  0% {
    transform: translateY(0px);
  }
  25%, 75% {
    transform: translateY(calc(-2px * ${alpha}));
  }
  50%, 100% {
    transform: translateY(calc(2px * ${alpha}));
  }
`
const running = (timing: number[]) => keyframes`
  0% {
    transform: translateX(0px) translateY(0px);
  }
  9% {
    transform: translateX(calc(${timing[0]}%)) translateY(2px);
  }
  22% {
    transform: translateX(calc(${(timing[0] + timing[1])}%)) translateY(-2px);
  }
  34% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2])}%)) translateY(2px);
  }
  45% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2] + timing[3])}%)) translateY(-2px);
  }
  57% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4])}%)) translateY(2px);
  }
  71% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5])}%)) translateY(2px);
  }
  82% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6])}%)) translateY(2px);
  }
  92% {
    transform: translateX(calc(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7])}%)) translateY(2px);
  }
  100% {
    transform: translateX(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7] + timing[8]) === 100
    ? '100%'
    : String((timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7] + timing[8])) + '%'})
    translateY(0);
  }
`

const shake = keyframes`
  0%{
    transform: rotate(0deg);
  }
  20%{
    transform: rotate(-10deg);
  }
  50%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(10deg);
  }
  100%{
    transform: rotate(0deg);
  }
`