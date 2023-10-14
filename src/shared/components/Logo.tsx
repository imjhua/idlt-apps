import styled from '@emotion/styled/macro'

import Image from './Image'

function Logo(){
  return (
    <Anchor href="/">
      <Image src="/logo.png" width={44} height={44} />
    </Anchor>
  )
}

export default Logo

const Anchor = styled.a`
  border-radius: 4px;
  text-align: center;
`
