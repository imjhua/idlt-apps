import styled from '@emotion/styled/macro'
import { Image } from 'grommet'
import { ImgHTMLAttributes } from 'react'

function Img({ src, width, height }: ImgHTMLAttributes<HTMLImageElement>){
  return (
    <ImageBlock
      src={src}
      width={width}
      height={height}
    />
  )
}

export default Img

const ImageBlock = styled(Image)`
  vertical-align: middle;
`