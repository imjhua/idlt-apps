import styled from '@emotion/styled/macro'
import { Image as Img } from 'grommet'
import { ImgHTMLAttributes } from 'react'

function Image({ src, width, height }: ImgHTMLAttributes<HTMLImageElement>){
  return (
    <ImageBlock
      src={src}
      width={width}
      height={height}
    />
  )
}

export default Image

const ImageBlock = styled(Img)`
  vertical-align: middle;
`