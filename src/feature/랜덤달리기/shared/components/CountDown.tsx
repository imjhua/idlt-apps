
import styled from '@emotion/styled/macro'

type CountDownProps = { count: number }
function CountDown({ count }: CountDownProps){
  return count ? (
    <Text>{count}</Text>
  ) : null
}

export default CountDown

const Text = styled.div`
  position: fixed;
  transform: translate(50%, 50%) scale(4);
  top: 50%;
  right: 50%;

  font-weight: bold;
  font-size: 50px;

  color: ${({ theme }) => theme.highlight};
`
