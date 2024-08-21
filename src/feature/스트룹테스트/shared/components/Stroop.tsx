import { keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import {
  Box,
  // Button,
  Card, Flex,
  // RadioGroup,
  Text
} from '@radix-ui/themes'
import {
  Button, Form, FormField, RadioButton, RadioButtonGroup
} from 'grommet'
import { Fragment } from 'react'

import { getRandomIntInclusive, getRandomList } from '@/lib/utils'

// const { Root, Item } = RadioGroup

// 과제에 대한 반응 시간이 주의에 따라 달라지는 효과 또는 현상
/*

스트룹(Stroop effect) 효과 또는 스트룹(Stroop effect) 검사는 과제에 대한 반응 시간이 주의에 따라 달라지는 효과 또는 이러한 현상을 말합니다. 예를들어 검정, 노랑, 파랑과 같은 글자와 이 글자가 나타내는 의미인 실제 색상이 일치하지 않을 경우 글자의 색을 말하는 데 더 오랜 시간이 걸리거나 잘못 말하는 경향이 생기는 현상입니다.
*/

// 35개의 단어를 글자가 아닌 색깔을 보고 말해주세요 !

const 스트룹효과링크 = 'https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%8A%B8%EB%A3%A8%ED%94%84_%ED%9A%A8%EA%B3%BC'
function Stroop(){
  /*
  노출 방식
  0. 시작 -> 타이머 -> 종료 -> 시간층정
  1. 여러개의 색상목록 랜덤섞기 - 랜덤배열활용
  2. 순서대로 노출 - 색상명칭 그대로 / 색상은 랜덤
  3. 객관식 예시 - 노출 순서(홀/짝) & 자신을 제외한 나머지 랜덤 중 하나
  */

  const 반복되는_횟수 = 3
  const 여러개_색상목록 = new Array(반복되는_횟수).fill(0).reduce<typeof 색상목록>((data) => {
    return [...data, ...색상목록]
  }, [])
  const randomList = getRandomList({ arrayLength: 여러개_색상목록.length - 1, maxNumber: 여러개_색상목록.length - 1 })

  const handleGoTestButtonClick = () => {
    console.log('테스트하기!')
  }
  return (
    <>
      <Box>
        <Text>
          스트룹(Stroop effect) 효과는 과제에 대한 반응 시간이 주의에 따라 달라지는 효과 또는 이러한 현상을 말합니다. 예를들어 검정, 노랑, 파랑과 같은 글자와 이 글자가 나타내는 의미인 실제 색상이 일치하지 않을 경우 글자의 색을 말하는 데 더 오랜 시간이 걸리거나 잘못 말하는 경향이 생기는 현상입니다.
        </Text>
        <Text color="blue">
          <a href={스트룹효과링크}>(스트룹효과란?)</a>
        </Text>
      </Box>
      <Content>
        <Box>
          <Text size="3" color="bronze">
           보여지는 카드의 단어를 <strong>글자가 아닌 색상</strong>을 보고 정답을 선택 해 주세요!
          </Text>
        </Box>
        <FloatButton onClick={handleGoTestButtonClick}>테스트하기</FloatButton>
      </Content>

      <Flex gap="3" mb="6">
        {색상목록.map(({ 명칭, 코드 }, index) => {
          return (
            <ColorCard bgColor={코드} key={index}>
              {명칭}
            </ColorCard>
          )
        })}
      </Flex>

      <Flex gap="3" direction="column">
        {randomList.map((number, index) => {
          const { 명칭, 코드 } = 여러개_색상목록[number]
          const targetIndex = getRandomIntInclusive(0, 여러개_색상목록.length - 1 - 반복되는_횟수)
          const 다른색상목록 = 여러개_색상목록.filter(({ 명칭: 색상목록명칭 }) => (색상목록명칭 !== 명칭))
          return (
            <Card key={index}>
              <ColorText color={코드}>
                {다른색상목록[targetIndex].명칭}
              </ColorText>
              <AnswerItem color={명칭} text={다른색상목록[targetIndex].명칭} tureOrFalse={Math.random() < 0.5} />
            </Card>
          )
        })}
      </Flex>
      {/* <Button size="4" onClick={handleSubmitClick}>정답제출</Button> */}
    </>
  )
}

export default Stroop

function AnswerItem({ color, text, tureOrFalse }: { color: string; text: string; tureOrFalse: boolean }){

  const handleSubmitClick = ({ value }) => {
    console.log('정답제출!')
    console.log(value)

  }
  // return (
  // // <form>
  // //   <Root>
  // //     <Flex gap="4" direction="row" justify="center">
  // //       {[tureOrFalse, !tureOrFalse].map((answer, index) => {
  // //         return (
  // //           <Text as="label" size="5" key={index}>
  // //             <Flex gap="2">
  // //               <Item value={String(answer)} />{answer ? color : text}
  // //             </Flex>
  // //           </Text>
  // //         )
  // //       }
  // //       )}
  // //     </Flex>
  // //   </Root>
  // //   <Button onSubmit={handleSubmitClick}>정답제출</Button>

  //   // </form>
  //   // <Form.Root onSubmit={handleSubmitClick}>
  //   // </Form.Root>

  // // <form>
  // //   <Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
  // //     <div style={{ display: 'flex', alignItems: 'center' }}>
  // //       <Item className="RadioGroupItem" value="default" id="r1">
  // //         <Indicator className="RadioGroupIndicator" />
  // //       </Item>
  // //       <label className="Label" htmlFor="r1">
  // //     Default
  // //       </label>
  // //     </div>
  // //     <div style={{ display: 'flex', alignItems: 'center' }}>
  // //       <Item className="RadioGroupItem" value="comfortable" id="r2">
  // //         <Indicator className="RadioGroupIndicator" />
  // //       </Item>
  // //       <label className="Label" htmlFor="r2">
  // //     Comfortable
  // //       </label>
  // //     </div>
  // //     <div style={{ display: 'flex', alignItems: 'center' }}>
  // //       <Item className="RadioGroupItem" value="compact" id="r3">
  // //         <Indicator className="RadioGroupIndicator" />
  // //       </Item>
  // //       <label className="Label" htmlFor="r3">
  // //     Compact
  // //       </label>
  // //     </div>
  // //   </Root>
  // //   <Button onSub={handleSubmitClick}>정답제출</Button>
  // // </form>
  // )

  return (
    <Form
      // value={value}
      // onChange={(nextValue) => setValue(nextValue)}
      // onReset={() => setValue({})}
      // onSubmit={({ value }) => {}}
      onSubmit={handleSubmitClick}
    >
      <FormField name="name" htmlFor="text-input-id" label="Name">
        <RadioButtonGroup
          name="doc"
          options={
            [tureOrFalse, !tureOrFalse].map((answer) => {
              return (
                answer ? color : text
              )
            })
          }
        />
      </FormField>
      <Button type="submit" primary label="정답제출" />
    </Form>
  )

}

const ColorCard = styled.div<{ bgColor: string }>`
  border: 1px solid${({ theme }) => theme.color};
  border-radius: 4px;
  color: ${({ bgColor }) => bgColor};

  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  width: 80px;
  height: 36px;
  line-height: 36px;
  text-align: center;
`
const ColorText = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  padding: 10px;
`

const float = keyframes`
  from{
    transform: translateY(-2px);
  }
  to{
    transform: translateY(2px);
  }
`

const FloatButton = styled(Button)`
  animation: ${float} 1s .5s linear alternate infinite;
`

const Content = styled.div`
  margin: 40px 0;
  text-align: center;

  strong{
    font-weight: 900;
    font-size: 1.2em;
  }
`

const 색상목록: {
  코드: `#${string}`; 명칭: string;
}[] = [
  { 코드: '#ff0000', 명칭: '빨강' },
  { 코드: '#0000ff', 명칭: '파랑' },
  { 코드: '#ffee00', 명칭: '노랑' },
  { 코드: '#00ff00', 명칭: '초록' },
  { 코드: '#800080', 명칭: '보라' },
  { 코드: '#000000', 명칭: '검정' }
]

