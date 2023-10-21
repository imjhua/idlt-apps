import styled from '@emotion/styled/macro'
import { Box, Text, } from 'grommet'
import { useMemo, useState } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'

const wordListOriginal = [
  { word: 'A', meaning: 'A 뜻' },
  { word: 'B', meaning: 'B 뜻' },
  { word: 'C', meaning: 'C 뜻' },
]

function Word(){
  const wordList = useMemo(() => {
    wordListOriginal.reduce<{ word: string; meaning: string }[]>((data) => {
      const randomNumber1 = getRandomIntInclusive(0, wordListOriginal.length - 1)
      const randomNumber2 = getRandomIntInclusive(0, wordListOriginal.length - 1)
      const temp = data[randomNumber1]
      data[randomNumber1] = data[randomNumber2]
      data[randomNumber2] = temp
      return data
    }, [...wordListOriginal])

    return wordListOriginal
  }, [])

  const [nextIndex, setNextIndex] = useState<number>(0)
  const [showMeaning, setShowMeaning] = useState<boolean>(false)

  // 터치할때마다 랜덤노출 뜻
  const handleBgClick = () => {
    if (!showMeaning){
      setShowMeaning(true)
      return
    }
    setShowMeaning(false)
    setNextIndex((state) => {
      if (state === wordList.length - 1){
        return 0
      }
      return (state + 1)
    })

  }
  return (
    <Block onClick={handleBgClick}>
      <Box>
        <Text alignSelf="center" size="6xl" weight={900}>
          {wordList[nextIndex].word}
        </Text>
        <Text>
          {(showMeaning) && wordList[nextIndex].meaning}
        </Text>
      </Box>
    </Block>
  )
}

export default Word

const Block = styled.div`
  /* background-color: red; */

  text-align: center;
  position: absolute;
  right: 0;
  left: 0; 
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`
