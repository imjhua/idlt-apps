import { Box, Text } from 'grommet'

import { ErrorCode, PageBlock } from './shared/components/Styles'

function NotFound(){
  return (
    <PageBlock>
      <ErrorCode>404</ErrorCode>
      <Box>
        <Text>Not Found</Text>
        <Text>
        페이지를 찾을 수 없습니다.
        </Text>
      </Box>
    </PageBlock>
  )
}

export default NotFound
