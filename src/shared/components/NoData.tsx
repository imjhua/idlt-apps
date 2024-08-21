import { Paragraph } from 'grommet'
import { Gremlin } from 'grommet-icons'
import { ReactNode } from 'react'

import { PageBlock } from './Styles'

type NoDataProps = { children?: ReactNode; text?: string }
const NoData = ({ children, text }: NoDataProps) => (
  <PageBlock>
    <Gremlin style={{ fontSize: 20, marginBottom: 6 }} />
    {children
      ? children
      : <Paragraph>{text || '데이터가 존재하지 않습니다.'}</Paragraph>}
  </PageBlock>
)

export default NoData

