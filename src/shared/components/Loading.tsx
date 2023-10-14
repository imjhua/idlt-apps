import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Spinner } from 'grommet'

type LoadingProps = { size?: 'small' | 'default' | 'large' }
function Loading({ size = 'large' }: LoadingProps){
  return (
    <Container full={size === 'large'}>
      <Spinner />
    </Container>
  )
}

export default Loading

const Container = styled.div<{ full: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  ${({ full }) => full && css`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
  `};
`