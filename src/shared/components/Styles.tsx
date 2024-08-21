import styled from '@emotion/styled/macro'

export const PageBlock = styled.div`
  margin: 40px 0;
  text-align: center;

  strong{
    font-weight: 500;
  }
`

export const ErrorCode = styled.div`
  font-size: 100px;
  font-weight: bold;
`

export const Highlight = styled.span`
  background-color: ${({ theme }) => theme.highlight};
`

export const Padding = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`
