import styled from '@emotion/styled/macro'
import { Image } from 'grommet'
import { ImgHTMLAttributes } from 'react'

function Img({ ...option }: ImgHTMLAttributes<HTMLImageElement>){
  return (
    <ImageBlock
      {...option}
    />
  )
}

export default Img

const ImageBlock = styled(Image)`
  vertical-align: middle;
`