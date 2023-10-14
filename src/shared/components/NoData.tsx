import { Gremlin } from 'grommet-icons'
import { ReactNode } from 'react'

import { PageBlock } from './Styles'

type NoDataProps = { children?: ReactNode; text?: string }
const NoData = ({ children, text }: NoDataProps) => (
  <PageBlock>
    <Gremlin style={{ fontSize: 20, marginBottom: 6 }} />
    {children ? children
      : <p>{text || '데이터가 존재하지 않습니다.'}</p>}
  </PageBlock>
)

export default NoData
