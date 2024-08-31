import { Box, Text } from 'grommet'
import { Gremlin } from 'grommet-icons'
import type { ReactNode } from 'react'

import { PageBlock } from './Styles'

type NoDataProps = { children?: ReactNode; text?: string }
const NoData = ({ children, text }: NoDataProps) => (
  <PageBlock>
    <Gremlin style={{ fontSize: 20, marginBottom: 6 }} />
    <Box>
      {children
        ? children
        : <Text>{text || '데이터가 존재하지 않습니다.'}</Text>}
    </Box>
  </PageBlock>
)

export default NoData

