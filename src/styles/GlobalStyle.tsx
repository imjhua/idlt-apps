import '@radix-ui/themes/styles.css'

import { Global } from '@emotion/react'

import global from './global'
import reset from './reset'

export default function GlobalStyle() {
  return <Global styles={[reset, global]} />
}
