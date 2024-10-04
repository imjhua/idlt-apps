import styled from '@emotion/styled/macro'
import { Box, Button, Text } from 'grommet'
import { useEffect, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'
import Img from '@/shared/components/Image'
import Loading from '@/shared/components/Loading'

import Run from '../shared/components/Run'
import { CHARACTER_LIST } from '../shared/meta'

function MainPage() {
  const [isUserReady, setIsUserReady] = useState<boolean>(false)

  const [players, setPlayers] = useState<string[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<Set<string>>(new Set())

  useEffect(() => {
    CHARACTER_LIST.map((character) => {
      const fileName = `/images/animal/${String(character)}.png`
      const images = new Image()
      images.src = fileName
    })

    const randomCharacterList = CHARACTER_LIST.reduce<string[]>((data) => {
        const randomNumber1 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
        const randomNumber2 = getRandomIntInclusive(0, CHARACTER_LIST.length - 1)
        const temp = data[randomNumber1]
        data[randomNumber1] = data[randomNumber2]
        data[randomNumber2] = temp
        return data
      }, [...CHARACTER_LIST])

    setPlayers(randomCharacterList)
  }, [])

  const handleUserReadyButtonClick = (isUserReady: boolean) => {
    setIsUserReady(isUserReady)
  }

  const handleCharacterChange = (characterName: string) => {
    setSelectedPlayers((state) => {
      const newState = new Set([...state])

      newState.has(characterName) ? newState.delete(characterName) : newState.add(characterName)

      return newState
    })
  }

  if (players.length === 0){
    return <Loading />
  }

  return (
    <Box pad="small" gap="small">
      {!isUserReady ? (
        <Box gap="medium">
          <Text size="small">* 참여 할 캐릭터들을 선택하세요.</Text>
          <Grid>
            {players.map((characterName) => {
              return (
                <GridItem
                  key={characterName}
                  selected={selectedPlayers.has(characterName)}
                  onClick={() => {
                    handleCharacterChange(characterName)
                  }}
                >
                  <>
                    <Img
                      width={50} height={50} src={`/images/animal/${String(characterName)}.png`}
                      alt={characterName} />
                  </>
                </GridItem>
              )
            })}
          </Grid>
          <Button
            label="Are You Ready?"
            onClick={() => {
              handleUserReadyButtonClick(true)
            }}
            disabled={selectedPlayers.size === 0}
            primary
          />
        </Box>
      ) : (
        <>
          <Run
            playerNames={[...selectedPlayers]}
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
  background: ${({ theme, selected }) => (selected ? theme.highlight : theme.background)};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`
