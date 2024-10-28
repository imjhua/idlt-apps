import styled from '@emotion/styled/macro'
import { Box, Button, Text } from 'grommet'
import { useEffect, useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Img from '@/shared/components/Image'
import Loading from '@/shared/components/Loading'

import Run from '../shared/components/Run'
import { CHARACTER_LIST } from '../shared/meta'

const IMAGE_PRE_FIX = {
  Animals: '/images/animals',
  Foods: '/images/foods',
}

function MainPage() {
  const [runType] = useState<keyof typeof CHARACTER_LIST>('Animals')
  // const [runType, setRunType] = useState<keyof typeof CHARACTER_LIST>('Animals')
  const [isUserReady, setIsUserReady] = useState<boolean>(false)

  const [players, setPlayers] = useState<string[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<{
    Animals: Set<string>;
    Foods: Set<string>;
  }>({
    Animals: new Set(),
    Foods: new Set(),
  })

  const characterList = useMemo(() => {
    return CHARACTER_LIST[runType]
  }, [runType])

  const characterImagePreFix = useMemo(() => {
    return IMAGE_PRE_FIX[runType]
  }, [runType])

  useEffect(() => {
    if (!characterImagePreFix) {
      return
    }

    characterList.map((character) => {
      const fileName = `${characterImagePreFix}/${String(character)}.png`
      const images = new Image()
      images.src = fileName
    })

    const randomCharacterList = characterList.reduce<string[]>(
      (data) => {
        const randomNumber1 = getRandomIntInclusive(
          0,
          characterList.length - 1
        )
        const randomNumber2 = getRandomIntInclusive(
          0,
          characterList.length - 1
        )
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      },
      [...characterList]
    )

    setPlayers(randomCharacterList)
  }, [characterList, characterImagePreFix])

  const handleUserReadyButtonClick = (isUserReady: boolean) => {
    setIsUserReady(isUserReady)
  }

  const handleCharacterChange = (characterName: string) => {
    setSelectedPlayers((state) => {
      const list = new Set(state[runType])

      list.has(characterName)
        ? list.delete(characterName)
        : list.add(characterName)

      return {
        ...state,
        [runType]: list,
      }
    })
  }

  if (players.length === 0) {
    return <Loading />
  }

  return (
    <Box pad="small" gap="small">
      {!isUserReady ? (
        <Box gap="large">
          <Text size="small">
            * Choose the characters to participate in the race.
          </Text>
          {/* <Box direction="row" justify="center" gap="small">
            <Button
              primary={runType === 'Animals'}
              label="Animals"
              onClick={() => {
                setRunType('Animals')
              }}
            />
            <Button
              primary={runType === 'Foods'}
              label="Foods"
              onClick={() => {
                setRunType('Foods')
              }}
            />
          </Box> */}
          <Box gap="medium">
            <Grid>
              {players.map((characterName) => {
                return (
                  <GridItem
                    key={characterName}
                    selected={selectedPlayers[runType].has(characterName)}
                    onClick={() => {
                      handleCharacterChange(characterName)
                    }}
                  >
                    <Img
                      width={50}
                      height={50}
                      src={`${characterImagePreFix}/${String(
                        characterName
                      )}.png`}
                      alt={characterName}
                    />
                  </GridItem>
                )
              })}
            </Grid>
            <Button
              label="Are You Ready?"
              onClick={() => {
                handleUserReadyButtonClick(true)
              }}
              disabled={selectedPlayers[runType].size === 0}
              primary
            />
          </Box>
        </Box>
      ) : (
        <>
          <Run
            runType={runType}
            playerNames={[...selectedPlayers[runType]]}
            onUserReadyChange={() => {
              handleUserReadyButtonClick(false)
            }}
          />
        </>
      )}
    </Box>
  )
}

export default MainPage

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`

const GridItem = styled.div<{ selected: boolean }>`
  background: ${({ theme, selected }) => selected ? theme.highlight : theme.background};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`
