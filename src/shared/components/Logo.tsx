import styled from '@emotion/styled/macro'

import Img from './Image'

function Logo(){
  return (
    <Anchor
      onClick={() => {
        window.location.reload()
      }}>
      <Img src="/logo.png" width={44} height={44} />
    </Anchor>
  )
}

export default Logo

const Anchor = styled.span`
  border-radius: 4px;
  text-align: center;
  padding-left: 6px;
`
