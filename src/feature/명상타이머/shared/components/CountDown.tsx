
import styled from '@emotion/styled/macro'

type CountDownProps = { count: number }
function CountDown({ count }: CountDownProps){
  return count ? (
    <Text>{count}</Text>
  ) : null
}

export default CountDown

const Text = styled.div`
  text-align: center;
  z-index: 10;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  font-weight: bold;
  font-size: 130px;

  color: #333;
  background: rgb(255 255 255 / 60%);

  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: calc(100px + env(safe-area-inset-bottom));

`
