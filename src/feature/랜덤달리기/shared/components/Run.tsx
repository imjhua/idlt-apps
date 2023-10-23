import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import {
  Box, Button, CheckBox, DataTable, Text
} from 'grommet'
import { Cycle } from 'grommet-icons'
import { useEffect, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Img from '@/shared/components/Image'
import NoData from '@/shared/components/NoData'

import { CHARACTER_LIST, COUNT_DWON_STATUS, STATUS } from '../meta'

const DURATION = 10
type RunProps = { delay: number; status: STATUS | undefined; count: number; countDownStatus: COUNT_DWON_STATUS;onUpdateStatus: (status: STATUS) => void }

function Run({
  delay, status, count, countDownStatus, onUpdateStatus
}: RunProps){
  // const [clickedImg, setClickedImg] = useState<{ path: string; show: boolean }>()

  const [speedMode, setSpeedMode] = useState(false)

  const [memberList, setMemberList] = useState<string[]>([])
  const [playerList, setPlayerList] = useState<{
    index: number;
    winner: boolean;
    character: string;
    timings: number[];
    duration: number;
    ranking: number;
  }[]>([])

  useEffect(() => {
    CHARACTER_LIST.map((character) => {
      const fileName = `/images/animal/${String(character)}.png`
      const images = new Image()
      images.src = fileName
    })
  }, [])

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
        duration: 0,
        ranking: 0
      }
    })
    setPlayerList(playerListInit)

    onUpdateStatus(STATUS.READY)
  }, [count, onUpdateStatus])

  // const durationList = useMemo(() => {
  //   if (count === 0){
  //     return []
  //   }

  //   const defaultValues = new Array(count).fill(0)
  //     .map((_, index) => (index + 1))

  //   const durationList = defaultValues.reduce<number[]>((data) => {
  //     const randomNumber1 = getRandomIntInclusive(0, count - 1)
  //     const randomNumber2 = getRandomIntInclusive(0, count - 1)
  //     const temp = data[randomNumber1]
  //     data[randomNumber1] = data[randomNumber2]
  //     data[randomNumber2] = temp
  //     return data
  //   }, [...defaultValues])

  //   return durationList
  // }, [count])

  // const sortedDurationList = useMemo(() => {
  //   return [...durationList].sort((a, b) => a - b)
  // }, [durationList])

  const handleGoButtonClick = () => {
    if (memberList.length === 0 || status === STATUS.START){
      return
    }

    const defaultValues = new Array(count).fill(0)
      .map((_, index) => (index + 1))

    const durationList = defaultValues.reduce<number[]>((data) => {
      const randomNumber1 = getRandomIntInclusive(0, count - 1)
      const randomNumber2 = getRandomIntInclusive(0, count - 1)
      const temp = data[randomNumber1]
      data[randomNumber1] = data[randomNumber2]
      data[randomNumber2] = temp
      return data
    }, [...defaultValues])

    const sortedDurationList = [...durationList].sort((a, b) => a - b)

    const winningTiming = [10, 12, 14, 10, 14, 12, 14, 6, 4]
    const playerTiming = [18, 15, 16, 16, 12, 14, 18, 10, 12]
    const winningIndex = getRandomIntInclusive(0, memberList.length - 1)
    console.log(winningTiming.reduce((data, item) => data + item, 0))
    console.log(playerTiming.reduce((data, item) => data + item, 0))

    console.log('wwwww'.repeat(10))
    console.log(memberList[winningIndex])
    console.log('='.repeat(10))

    const playerList = memberList.map((player, index) => {
      const randomMaxValues = index === winningIndex ?
        winningTiming
        : playerTiming

      const number0 = getRandomIntInclusive(1, randomMaxValues[0])
      const number1 = getRandomIntInclusive(1, randomMaxValues[1])
      const number2 = getRandomIntInclusive(3, randomMaxValues[2])
      const number3 = getRandomIntInclusive(2, randomMaxValues[3])
      const number4 = getRandomIntInclusive(5, randomMaxValues[4])
      const number5 = getRandomIntInclusive(7, randomMaxValues[5])
      const number6 = getRandomIntInclusive(1, randomMaxValues[6])
      const number7 = getRandomIntInclusive(1, randomMaxValues[7])
      const number8 = getRandomIntInclusive(1, randomMaxValues[8])

      const valueList = [
        number0,
        number0 + number1,
        number0 + number1 + number2,
        number0 + number1 + number2 + number3,
        number0 + number1 + number2 + number3 + number4,
        number0 + number1 + number2 + number3 + number4 + number5,
        number0 + number1 + number2 + number3 + number4 + number5 + number6,
        number0 + number1 + number2 + number3 + number4 + number5 + number6 + number7,
        number0 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8,
      ]

      // 보정
      const newValueList = valueList.map((value, index) => {
        if (index >= 7 && value > 90){
          console.log('보정')
          return valueList[index - 1] + getRandomIntInclusive(1, 5)
        }

        return value
      })

      let duration = 0
      const defaultDuration = speedMode ? 1 : DURATION
      if (winningIndex === index){
        duration = defaultDuration
      } else {
        duration = defaultDuration + (durationList[index] * (speedMode ? 0.1 : 0.2))
      }

      const removeItem = durationList[winningIndex]
      const rankingList = sortedDurationList.filter((value) => (value !== removeItem))

      return {
        index: index + 1,
        character: player,
        timings: [...newValueList, 100],
        winner: winningIndex === index,
        ranking: winningIndex === index ? 1 : rankingList.indexOf(durationList[index]) + 2, //(index > winningIndex ? 2 : 1),
        duration
      }
    })
    // console.log(playerList)

    // 플레이어 설정
    setPlayerList(playerList)

    // 당첨자 확인
    // setTimeout(() => {
    //   if (!playerList){
    //     return
    //   }
    //   // console.log(playerList.filter(({ winner }) => (winner))[0].character, '당첨!')
    // }, ((delay + DURATION) * 1000) + 200 + 200)

    onUpdateStatus(STATUS.START)
  }

  const handleResetButtonClick = () => {
    onUpdateStatus(STATUS.READY)
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
        duration: 0,
        ranking: 0
      }
    })
    setPlayerList(playerListInit)
  }

  return (
    <Block>
      <Box gap="small">
        <Box direction="row" gap="medium" justify="between">
          {
            status === STATUS.READY ? (
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
              <Button label="Re-Game" onClick={handleResetButtonClick} disabled={countDownStatus === COUNT_DWON_STATUS.START} />
            )
          }
        </Box>
        <Box>
          {/* {clickedImg && <CharacterImg
            show={clickedImg.show}
            src={clickedImg.path}
            width={38}
            height={38}
          />} */}

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
                    render: ({
                      character, timings, winner, duration, ranking
                    }) => {
                      return (
                        <>
                          <Rail
                            alpha={getRandomIntInclusive(1, 2) % 2 === 0 ? 1 : -1}
                            delay={delay}
                            duration={duration}
                            active={status !== STATUS.READY}
                            timing={timings}
                            winner={winner}
                            speedMode={speedMode}
                          >
                            <Ranking active={status !== STATUS.READY} delay={delay + duration}>{ranking}</Ranking>

                            <Img
                              width={38} height={38}
                              src={`/images/animal/${String(character)}.png`}
                              alt={character}
                              // onClick={() => {

                              //   setClickedImg({
                              //     show: true,
                              //     path: `/images/animal/${String(character)}.png`
                              //   })

                              //   setTimeout(() => {
                              //     setClickedImg({
                              //       show: false,
                              //       path: `/images/animal/${String(character)}.png`
                              //     })
                              //   }, 800)

                              //   setTimeout(() => {
                              //     setClickedImg({
                              //       show: false,
                              //       path: ''
                              //     })
                              //   }, 1000)
                              // }}
                            />
                          </Rail>
                        </>
                      )
                    }
                  },
                ]}
              />)}
          </Item>
        </Box>
      </Box>
    </Block>
  )
}

export default Run

// const CharacterImg = styled(Img)<{ show: boolean }>`
//   transition: all .8s;
//   /* display: ${({ show }) => !show ? 'block' : 'none' }; */
//   /* opacity: ${({ show }) => !show ? 1 : 0.5 }; */
//   transform: translate(50%, 50%) scale(${({ show }) => !show ? 0 : 4 });
//   position: absolute;
//   right: 50%;
//   top: 50%;
//   z-index: 1;
//   padding: 10px;
//   background: ${({ theme }) => theme.background};
//   border: 3px solid ${({ theme }) => theme.border};
// `

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
const Rail = styled.div<{ speedMode: boolean; alpha: number; delay: number; duration: number; active: boolean; timing: number[]; winner: boolean }>`
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

  ${({ delay, active, winner, duration }) => active && winner && css`
    > img{
      animation: ${shake} .3s ${delay + duration}s ease-in infinite;
    }
  `}
`

const show = keyframes`
  from{
    visibility: hidden;
  }
  to{
    visibility: visible;
  }
`

const Ranking = styled.span<{ active: boolean; delay: number }>`
  display: inline-block;
  font-size: 20px;
  width: 130px;
  margin-left: -150px;
  padding-right: 20px;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.highlight};
  text-align: right;
  visibility: hidden;
  ${({ active, delay }) => active && css`
    animation: ${show} 1s ${delay + 0.5}s linear infinite;
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
  10% {
    transform: translateX(calc(${timing[0]}%)) translateY(2px);
  }
  20% {
    transform: translateX(calc(${timing[1]}%)) translateY(2px);
  }
  30% {
    transform: translateX(calc(${timing[2]}%)) translateY(2px);
  }
  40% {
    transform: translateX(calc(${timing[3]}%)) translateY(2px);
  }
  50% {
    transform: translateX(calc(${timing[4]}%)) translateY(2px);
  }
  60% {
    transform: translateX(calc(${timing[5]}%)) translateY(2px);
  }
  70% {
    transform: translateX(calc(${timing[6]}%)) translateY(2px);
  }
  80% {
    transform: translateX(calc(${timing[7]}%)) translateY(2px);
  }
  90% {
    transform: translateX(calc(${timing[8]}%)) translateY(2px);
  }
  100% {
    transform: translateX(calc(${timing[9]}%)) translateY(2px);
    /* transform: translateX(100%) translateY(2px); */
  }
  
  /* 100% {
    transform: translateX(${(timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7] + timing[8]) === 100
    ? '100%'
    : String((timing[0] + timing[1] + timing[2] + timing[3] + timing[4] + timing[5] + timing[6] + timing[7] + timing[8])) + '%'})
    translateY(0);
  } */
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