import styled from '@emotion/styled/macro'

export const Section = styled.div`
  margin-bottom: 10px;
  &:last-of-type{
    margin: 0;
  }
`

export const PageBlock = styled.div`
  margin: 40px 0;
  text-align: center;
`

export const ErrorCode = styled.div`
  font-size: 100px;
  font-weight: bold;
`

export const Highlight = styled.span`
  background-color: ${({ theme }) => theme.highlight};
`

export const ContentBlock = styled.div`
  height: 100vh;
`

export const Padding = styled.div<{ height: number }>`
  background-color: ${({ theme }) => theme.highlight};
  height: ${({ height }) => `${height}px`};
`