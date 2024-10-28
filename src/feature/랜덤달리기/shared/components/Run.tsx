import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import {
  Box,
  Button,
  CheckBox,
  DataTable,
  Layer,
  Text,
  TextInput,
} from 'grommet'
import { Close, Cycle } from 'grommet-icons'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Img from '@/shared/components/Image'
import Loading from '@/shared/components/Loading'
import NoData from '@/shared/components/NoData'

import { CHARACTER_LIST, COUNT_DWON_STATUS, RUNNING_STATUS } from '../meta'
import CountDown from './CountDown'

const COUNT_DOWN = 3

const DURATION = 10
const DURATION_FOR_SPEEDMODE = 1
type RunProps = {
  runType: keyof typeof CHARACTER_LIST;
  playerNames: string[];
  onUserReadyChange: (isUserReady: boolean) => void;
};

function Run({ runType, playerNames, onUserReadyChange }: RunProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [speedMode, setSpeedMode] = useState<boolean>(false)
  const [charaterNicknameMap, setCharaterNicknameMap] = useState<
    Record<string, string>
  >({})

  const [selectedPlayer, setSelectedPlayer] = useState<string>('')
  const [runningStatus, setRunningStatus] = useState<RUNNING_STATUS>(RUNNING_STATUS.READY)

  const [countDownStatus, setCountDownStatus] = useState<COUNT_DWON_STATUS>(
    COUNT_DWON_STATUS.HIDDEN
  )

  const [players, setPlayers] = useState<
    {
      index: number;
      winner: boolean;
      name: string;
      timings: number[];
      duration: number;
      ranking: number;
    }[]
  >([])

  /* FIXME: path */
  const characterImagePreFix = useMemo(() => {
    let preFix = ''
      if (runType === 'Animals'){
        preFix = '/images/animals'
      }
      if (runType === 'Foods'){
        preFix = '/images/foods'
      }
      return preFix
  }, [runType])

  useEffect(() => {
    if (runningStatus === RUNNING_STATUS.END){
      setOpenModal(true)
    }
  }, [runningStatus])

  useEffect(() => {
    setCharaterNicknameMap((state) => {
      return playerNames.reduce((data, playerName) => {
        data[playerName] = playerName
        return data
      }, state)
    })
  }, [playerNames])

  const count = useMemo(() => {
    return playerNames.length
  }, [playerNames.length])

  const handleShuffleButtonClick = useCallback(() => {
    const randomPlayerNames = playerNames.reduce<string[]>(
      (data) => {
        const randomNumber1 = getRandomIntInclusive(0, playerNames.length - 1)
        const randomNumber2 = getRandomIntInclusive(0, playerNames.length - 1)
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      },
      [...playerNames]
    )

    const playerListInit = randomPlayerNames.map((name, index) => {
      return {
        index: index + 1,
        name,
        timings: [],
        winner: false,
        duration: 0,
        ranking: 0,
      }
    })
    setPlayers(playerListInit)
  }, [playerNames])

  useEffect(() => {
    handleShuffleButtonClick()
  }, [handleShuffleButtonClick])

  const handleGoButtonClick = () => {
    const count = players.length

    if (count === 0 || runningStatus !== RUNNING_STATUS.READY) {
      return
    }

    const defaultValues = new Array(count).fill(0).map((_, index) => index + 1)

    const durationList = defaultValues.reduce<number[]>(
      (data) => {
        const randomNumber1 = getRandomIntInclusive(0, count - 1)
        const randomNumber2 = getRandomIntInclusive(0, count - 1)
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      },
      [...defaultValues]
    )

    const sortedDurationList = [...durationList].sort((a, b) => a - b)
    const winningIndex = getRandomIntInclusive(0, count - 1)

    // console.log(winningTiming.reduce((data, item) => data + item, 0))
    // console.log(playerrTiming.reduce((data, item) => data + item, 0))

    // console.log('wwwww'.repeat(10))
    // console.log(players[winningIndex].name)
    // console.log('='.repeat(10))

    const defaultDuration = speedMode ? DURATION_FOR_SPEEDMODE : DURATION

    const playerList = players.map(({ name: playerName }, index) => {
      // const timings = [10, 6, 10, 12, 14, 12, 12, 10, 14]
      // timings.reduce((data, item) => data + item, 0)
      const number1 = getRandomIntInclusive(1, 10)
      const number2 = getRandomIntInclusive(2, 6)
      const number3 = getRandomIntInclusive(3, 10)
      const number4 = getRandomIntInclusive(3, 12)
      const number5 = getRandomIntInclusive(3, 14)
      const number6 = getRandomIntInclusive(5, 12)
      const number7 = getRandomIntInclusive(5, 12)
      const number8 = getRandomIntInclusive(5, 10)
      const number9 = getRandomIntInclusive(3, 14)

      const timings = [
        number1, number2, number3, number4, number5, number6, number7, number8, number9
      ]

      const totalTiming = timings.reduce((data, item) => data + item, 0)

      // 보정
      if (totalTiming < 100){
        const diff = 100 - totalTiming
        const targetIndex = getRandomIntInclusive(0, 8)
        timings[targetIndex] += diff
      }

      const valueList = [
        0,
         number1,
         number1 + number2,
         number1 + number2 + number3,
         number1 + number2 + number3 + number4,
         number1 + number2 + number3 + number4 + number5,
         number1 + number2 + number3 + number4 + number5 + number6,
         number1 + number2 + number3 + number4 + number5 + number6 + number7,
         number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8,
         number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9,
         100
      ]

      let duration = 0
      if (winningIndex === index) {
        duration = defaultDuration
      } else {
        duration = Number(
          (
            defaultDuration +
            durationList[index] * (speedMode ? 0.1 : 0.2)
          ).toFixed(2)
        )
      }

      const removeItem = durationList[winningIndex]
      const rankingList = sortedDurationList.filter(
        (value) => value !== removeItem
      )

      return {
        index: index + 1,
        name: playerName,
        timings: [...valueList, 100],
        winner: winningIndex === index,
        ranking:
          winningIndex === index
            ? 1
            : rankingList.indexOf(durationList[index]) + 2, //(index > winningIndex ? 2 : 1),
        duration,
      }
    })

    // 플레이어 설정
    setPlayers(playerList)

    // 카운트다운
    setCountDownStatus(COUNT_DWON_STATUS.SHOW)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setRunningStatus(RUNNING_STATUS.END)
    }, Number(0.8 + COUNT_DOWN
      + defaultDuration
      + (sortedDurationList[sortedDurationList.length - 1] * (speedMode ? 0.1 : 0.2))
    ) * 1000)
  }

  const handleResetButtonClick = () => {
    setRunningStatus(RUNNING_STATUS.READY)
  }

  const handleUserReadyButtonClick = () => {
    onUserReadyChange(false)
  }

  const handleCharacterButtonClick = (character: string) => {
    setSelectedPlayer(character)
    setOpenModal(true)
  }
  const handleCharacterNickNameCloseClick = () => {
    setOpenModal(false)
  }

  const handleInputChange = (character: string, nickName: string) => {
    // 입력 후 자동 저장
    setCharaterNicknameMap((state) => {
      return {
        ...state,
        [character]: nickName,
      }
    })
  }

  if (players.length === 0){
    return <Loading />
  }

  return (
    <>
      <Block>
        <Box gap="medium">
          <Box gap="medium">
            {runningStatus === RUNNING_STATUS.READY ? (
              <>
                <Box direction="row" gap="medium" justify="between">
                  <Box direction="row" gap="small">
                    <Button
                      primary
                      label="Go!"
                      onClick={handleGoButtonClick}
                      disabled={
                        !count ||
                        openModal ||
                        !(
                          runningStatus === RUNNING_STATUS.READY &&
                          countDownStatus === COUNT_DWON_STATUS.HIDDEN
                        )
                      }
                    />
                  </Box>
                  <Box direction="row" gap="small">
                    <Button
                      size="small"
                      label="Change Character"
                      onClick={handleUserReadyButtonClick}
                      disabled={
                        !count ||
                        openModal ||
                        !(
                          runningStatus === RUNNING_STATUS.READY &&
                          countDownStatus === COUNT_DWON_STATUS.HIDDEN
                        )
                      }
                    />
                    <Button
                      size="small"
                      style={{ borderRadius: 10, padding: 4 }}
                      label={<Cycle />}
                      onClick={handleShuffleButtonClick}
                      disabled={
                        !count ||
                        openModal ||
                        !(
                          runningStatus === RUNNING_STATUS.READY &&
                          countDownStatus === COUNT_DWON_STATUS.HIDDEN
                        )
                      }
                    />
                  </Box>
                </Box>
              </>
            ) : (
              <Button
                label="Re-Game"
                onClick={handleResetButtonClick}
                disabled={openModal}
              />
            )}
          </Box>

          <Box>
            <Item>
              {!count ? (
                <NoData text="인원수를 입력해주세요." />
              ) : (
                <DataTable
                  data={players}
                  columns={[
                    {
                      property: 'index',
                      header: <Text>#</Text>,
                      align: 'center',
                      primary: true,
                      size: 'small',
                    },
                    {
                      property: 'character',
                      header: runningStatus === RUNNING_STATUS.READY && (
                        <Box align="end">
                          <CheckBox
                            checked={speedMode}
                            label="Speed Mode"
                            onChange={(event) => {
                              setSpeedMode(event.target.checked)
                            }}
                            disabled={
                              !count ||
                              openModal ||
                              !(
                                runningStatus === RUNNING_STATUS.READY &&
                                countDownStatus === COUNT_DWON_STATUS.HIDDEN
                              )
                            }
                          />
                        </Box>
                      ),
                      size: 'large',
                      render: ({
                        name: character,
                        timings,
                        winner,
                        duration,
                        ranking,
                      }) => {
                        return (
                          <>
                            <Rail
                              alpha={
                                countDownStatus === COUNT_DWON_STATUS.SHOW
                                ? 0
                                : (getRandomIntInclusive(1, 2) % 2 === 0 ? 1 : -1)
                              }
                              delay={0}
                              duration={duration}
                              active={runningStatus !== RUNNING_STATUS.READY}
                              timing={timings}
                              winner={winner}
                              speedMode={speedMode}
                            >
                              <Ranking
                                delay={duration}
                                active={runningStatus !== RUNNING_STATUS.READY}
                              >
                                {ranking}
                              </Ranking>
                              <Img
                                width={38}
                                height={38}
                                src={`${characterImagePreFix}/${String(character)}.png`}
                                alt={character}
                                onClick={() => {
                                  if (countDownStatus === COUNT_DWON_STATUS.SHOW || runningStatus === RUNNING_STATUS.RUN){
                                    return
                                  }
                                  handleCharacterButtonClick(character)
                                }}
                              />
                              {runningStatus === RUNNING_STATUS.READY && (
                                <Text
                                  size="small" style={{ marginLeft: 4 }}
                                  onClick={() => {
                                  if (countDownStatus === COUNT_DWON_STATUS.SHOW){
                                    return
                                  }
                                  handleCharacterButtonClick(character)
                                }}>
                                  {charaterNicknameMap[character]}
                                </Text>
                              )}
                            </Rail>
                          </>
                        )
                      },
                    },
                  ]}
                />
              )}
            </Item>

            {openModal && (
              <Layer
                style={{
                  height: 200,
                  width: '70vw',
                  border: '1px solid #eee',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
                  borderRadius: 10,
                }}
              >
                <>
                  {runningStatus === RUNNING_STATUS.READY && (
                  <>
                    <Box pad="medium" align="center">
                      <Img
                        width={80}
                        height={80}
                        src={`${characterImagePreFix}/${String(selectedPlayer)}.png`}
                        alt={selectedPlayer}
                        style={{ marginBottom: 8 }}
                      />
                      <TextInput
                        placeholder={`Nick Name: ${selectedPlayer}`}
                        onChange={(e) => {
                        handleInputChange(selectedPlayer, e.target.value)
                          }}
                        />
                    </Box>
                    <Button
                      size="small"
                      margin="small"
                      label="Save"
                      onClick={handleCharacterNickNameCloseClick}
                      style={{ marginTop: 0 }}
                    />
                    </>
                )}

                  {runningStatus === RUNNING_STATUS.END && (
                  <>
                    <Box direction="row" justify="end">
                      <Button
                        icon={<Close size="small" />}
                        onClick={() => {
                          setOpenModal(false)
                        }}
                      />
                    </Box>
                    <Box pad="small" gap="medium" align="center">
                      <Text size="large">🎉 Congratulations! 🎉</Text>
                      <Img
                        width={48}
                        height={48}
                        src={`${characterImagePreFix}/${String(players.filter(({ winner }) => winner)[0]?.name)}.png`}
                        alt="winner"
                      />
                      <Text>
                        {
                          charaterNicknameMap[
                            players.filter(({ winner }) => winner)[0]?.name
                          ]
                        }
                      </Text>
                    </Box>
                  </>
                )}
                </>
              </Layer>
            )}
          </Box>
        </Box>
      </Block>
      {countDownStatus === COUNT_DWON_STATUS.SHOW && (
        <CountDown
          count={COUNT_DOWN}
          onCountDownStatus={(countDownStatus) => {
            setCountDownStatus(countDownStatus)
          }}
          onRunningStatus={(runningStatus) => {
            setRunningStatus(runningStatus)
          }}
        />
      )}
    </>
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
  table {
    width: 100%;
    @media (max-width: 968px) {
      width: auto;
    }

    border-collapse: collapse;

    position: relative;
    &:after {
      content: "";
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

    th:first-of-type {
      width: 40px;
    }
    th {
      padding: 4px 6px !important;
    }
    td {
      padding: 4px 0 !important;
    }
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }
`
const Rail = styled.div<{
  speedMode: boolean;
  alpha: number;
  delay: number;
  duration: number;
  active: boolean;
  timing: number[];
  winner: boolean;
}>`
  width: calc(100% - 46px);
  transform: translateX(0px) translateY(0px);

  ${({ alpha, delay, duration, active, timing }) => !active || timing.length === 0
      ? css`
          animation: ${ready(alpha)} 1s ease infinite;
        `
      : css`
          animation: ${running(timing)} ${duration}s ${delay}.2s linear forwards;
        `}

  ${({ speedMode }) => speedMode &&
    css`
      margin-left: -20px;
      &:before {
        /* FIXME: Anima?! */
        background-image: url("/images/animals/fire.png");
        background-size: 20px 20px;
        display: inline-block;
        width: 20px;
        height: 20px;
        content: "";
        transform: rotate(-90deg) translateX(-12px);
      }
    `}

  > img {
    vertical-align: middle;
  }

  ${({ delay, active, winner, duration }) => active &&
    winner &&
    css`
      > img {
        animation: ${shake} 0.3s ${delay + duration}s ease-in infinite;
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
  border-radius: 4px;
  font-size: 20px;
  width: 130px;
  margin-left: -150px;
  padding-right: 20px;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.highlight};
  color: #333;
  text-align: right;
  visibility: hidden;
  ${({ active, delay }) => active &&
    css`
      animation: ${show} 0.1s ${delay + 0.5}s linear forwards;
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
    transform: translateX(calc(${timing[0]}%)) translateY(2px);
  }
  10% {
    transform: translateX(calc(${timing[1]}%)) translateY(2px);
  }
  20% {
    transform: translateX(calc(${timing[2]}%)) translateY(2px);
  }
  30% {
    transform: translateX(calc(${timing[3]}%)) translateY(2px);
  }
  40% {
    transform: translateX(calc(${timing[4]}%)) translateY(2px);
  }
  50% {
    transform: translateX(calc(${timing[5]}%)) translateY(2px);
  }
  60% {
    transform: translateX(calc(${timing[6]}%)) translateY(2px);
  }
  70% {
    transform: translateX(calc(${timing[7]}%)) translateY(2px);
  }
  80% {
    transform: translateX(calc(${timing[8]}%)) translateY(2px);
  }
  90% {
    transform: translateX(calc(${timing[9]}%)) translateY(2px);
  }
  100% {
    transform: translateX(calc(${timing[10]}%)) translateY(2px);
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
