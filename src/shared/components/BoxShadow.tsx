import styled from '@emotion/styled'
import { ReactNode } from 'react'

function BoxShadow({ children }: { children: ReactNode }) {
  return (
    <BoxShadowBlock>
      {children}
    </BoxShadowBlock>
  )
}
export default BoxShadow

const BoxShadowBlock = styled.div`
  /* offset-x | offset-y | blur-radius | color */
  /* box-shadow: 0px 2px 6px ${({ theme }) => theme.border}; */
  box-shadow: rgb(0 0 0 / 25%) 0 -6px 10px 0;
  background: ${({ theme }) => theme.background};
  border-radius: 12px 12px 0 0;
  padding: 14px 16px;
`

export const BoxShadowBottom = styled(BoxShadowBlock)`
`

