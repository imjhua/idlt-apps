import styled from '@emotion/styled/macro'
import { Box } from 'grommet'

function Parallax(){
  return (
    <>
      <ParallaxSection1 />
      <Section>
        <Box>ParallaxSection1</Box>
      </Section>
      <ParallaxSection2 />
      <Section>
        <Box>ParallaxSection2</Box>
      </Section>
      <ParallaxSection3 />
      <Section>
        <Box>ParallaxSection3</Box>
      </Section>
    </>
  )
}

export default Parallax

const Section = styled.div`
  text-align: center;
  /* padding: 50px 80px; */
  text-align: justify;
`

const ParallaxSection = styled.div`
  opacity: 0.65;

  /* Set a specific height */
  /* min-height: 400px; */
  height: 100%;

  /* 만약 %로 높이를 조정하려면 컨테이너(감싸는 부모 & body & html) 에 100% 높이를 준다. */
  /* height: 50%; */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ParallaxSection1 = styled(ParallaxSection)`
  background-image: url('/images/background/1.jpg');
`

export const ParallaxSection2 = styled(ParallaxSection)`
  background-image: url('/images/background/2.jpg');
`

export const ParallaxSection3 = styled(ParallaxSection)`
  background-image: url('/images/background/3.jpg');
`

