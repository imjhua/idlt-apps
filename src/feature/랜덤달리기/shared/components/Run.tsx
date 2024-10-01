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
import { useCallback, useEffect, useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Img from '@/shared/components/Image'
import NoData from '@/shared/components/NoData'

import { COUNT_DWON_STATUS, STATUS } from '../meta'
import CountDown from './CountDown'

const COUNT_DOWN = 3

const DURATION = 10
const DURATION_FOR_SPEEDMODE = 1
type RunProps = {
  playerNames: string[];
  onUserReadyChange: (isUserReady: boolean) => void;
};

function Run({ playerNames, onUserReadyChange }: RunProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [speedMode, setSpeedMode] = useState<boolean>(false)
  const [charaterNicknameMap, setCharaterNicknameMap] = useState<
    Record<string, string>
  >({})

  const [selectedPlayer, setSelectedPlayer] = useState<string>('')
  const [runningStatus, setRunningStatus] = useState<STATUS>(STATUS.READY)

  const [countDown, setCountDown] = useState<number>(COUNT_DOWN)
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

  useEffect(() => {
    setCountDown(COUNT_DOWN)
    for (let i = 1; i <= COUNT_DOWN; i++) {
      ((i) => {
        setTimeout(() => {
          setCountDown(COUNT_DOWN - i)
          if (i === COUNT_DOWN) {
            setCountDownStatus(COUNT_DWON_STATUS.HIDDEN)
          }
        }, 1000 * i)
      })(i)
    }
  }, [countDownStatus])

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

    if (count === 0 || runningStatus !== STATUS.READY) {
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

    const winningTiming = [10, 12, 14, 10, 14, 12, 14, 6, 4]
    const playerTiming = [18, 15, 16, 16, 12, 14, 14, 10, 12]
    const winningIndex = getRandomIntInclusive(0, count - 1)

    // console.log(winningTiming.reduce((data, item) => data + item, 0))
    // console.log(playerTiming.reduce((data, item) => data + item, 0))

    // console.log('wwwww'.repeat(10))
    // console.log(playerNames[winningIndex])
    // console.log('='.repeat(10))

    const defaultDuration = speedMode ? DURATION_FOR_SPEEDMODE : DURATION

    const playerList = players.map(({ name: playerName }, index) => {
      const randomMaxValues =
        index === winningIndex ? winningTiming : playerTiming

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
        number0 +
          number1 +
          number2 +
          number3 +
          number4 +
          number5 +
          number6 +
          number7,
        number0 +
          number1 +
          number2 +
          number3 +
          number4 +
          number5 +
          number6 +
          number7 +
          number8,
      ]

      // 보정
      const newValueList = valueList.map((value, index) => {
        if (index >= 7 && value > 90) {
          console.log('보정', playerName)
          return valueList[index - 1] + getRandomIntInclusive(1, 5)
        }

        return value
      })

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
        timings: [...newValueList, 100],
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

    setTimeout(() => {
      setRunningStatus(STATUS.RUN)
    }, COUNT_DOWN * 1000)

    setTimeout(() => {
      setRunningStatus(STATUS.END)

      setOpenModal(() => {
        setTimeout(() => {
          setOpenModal(false)
        }, 1500)
        return true
      })
    }, (COUNT_DOWN + 1 + defaultDuration) * 1000)
  }

  const handleResetButtonClick = () => {
    setRunningStatus(STATUS.READY)
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

  return (
    <>
      <Block>
        <Box gap="medium">
          <Box gap="medium">
            {runningStatus === STATUS.READY ? (
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
                          runningStatus === STATUS.READY &&
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
                          runningStatus === STATUS.READY &&
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
                          runningStatus === STATUS.READY &&
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
                disabled={
                  countDownStatus === COUNT_DWON_STATUS.SHOW || openModal
                }
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
                      header: (
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
                                runningStatus === STATUS.READY &&
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
                                getRandomIntInclusive(1, 2) % 2 === 0 ? 1 : -1
                              }
                              delay={0}
                              duration={duration}
                              active={runningStatus !== STATUS.READY}
                              timing={timings}
                              winner={winner}
                              speedMode={speedMode}
                            >
                              <Ranking
                                delay={duration}
                                active={runningStatus !== STATUS.READY}
                              >
                                {ranking}
                              </Ranking>
                              <Img
                                width={38}
                                height={38}
                                src={`/images/animal/${String(character)}.png`}
                                alt={character}
                                onClick={() => {
                                  if (countDownStatus === COUNT_DWON_STATUS.SHOW || runningStatus === STATUS.RUN){
                                    return
                                  }
                                  handleCharacterButtonClick(character)
                                }}
                              />
                              {runningStatus === STATUS.READY &&
                                charaterNicknameMap[character] !==
                                  character && !openModal && (
                                  <Text size="small" style={{ marginLeft: 4 }}>
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
                  {runningStatus === STATUS.READY && (
                  <>
                    <Box pad="medium" align="center">
                      <Img
                        width={80}
                        height={80}
                        src={`/images/animal/${String(selectedPlayer)}.png`}
                        alt={selectedPlayer}
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

                  {runningStatus === STATUS.END && (
                  <>
                    <Box direction="row" justify="end">
                      <Button
                        icon={<Close size="small" />}
                        onClick={() => {
                          setOpenModal(false)
                        }}
                      />
                    </Box>
                    <Box pad="large" gap="large" align="center">
                      <Text>🎉 축하합니다 🎉</Text>
                      <Text size="xlarge">
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
        <CountDown count={countDown} />
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
        background-image: url("/images/fire.png");
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
    transform: translateX(${
      timing[0] +
        timing[1] +
        timing[2] +
        timing[3] +
        timing[4] +
        timing[5] +
        timing[6] +
        timing[7] +
        timing[8] ===
      100
        ? '100%'
        : `${String(
            timing[0] +
              timing[1] +
              timing[2] +
              timing[3] +
              timing[4] +
              timing[5] +
              timing[6] +
              timing[7] +
              timing[8]
          )}%`
    })
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
