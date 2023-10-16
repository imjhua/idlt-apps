
import styled from '@emotion/styled/macro'
import { useMemo } from 'react'

import { getRandomIntInclusive } from '@/lib/utils'

import { QUOTES } from '../meta'

function InspirationalQuotes(){
  const quote = useMemo(() => {
    const randomIndex = getRandomIntInclusive(0, QUOTES.length - 1)
    return QUOTES[randomIndex].replace('‘', '.‘')
  }, [])

  // console.log(quote)
  // console.log(quote.length)

  return (
    <TextBlock textLength={quote.length}>
      {quote.split(/[.,]/).map((text, index) => {
        return <div key={index}>{text}</div>
      })}
    </TextBlock>
  )
}

export default InspirationalQuotes

const TextBlock = styled.div<{ textLength: number }>`
  padding: 30px;
  @media (orientation: landscape) {
    padding: 5px;
  }

  font-weight: bold;
  font-size: ${({ textLength }) => {
    if (textLength > 100){
      return '1.4rem'
    }
    if (textLength > 80){
      return '1.8rem'
    }
    if (textLength > 55){
      return '2.1rem'
    }
    if (textLength > 40){
      return '2.2rem'
    }
    return '2.3rem'
  }};
  text-align: center;
  word-break: keep-all;
  width: 80vw;  
`