
import { Box, Text } from 'grommet'

import { ErrorCode, Highlight, PageBlock } from './Styles'

type ErrorProps = { errorMessage?: string }
function Error({ errorMessage }: ErrorProps){
  return (
    <Box>
      <PageBlock>
        <ErrorCode>500</ErrorCode>
        <Text size="large">ERROR</Text>
        <Box>
          <Highlight>
            {errorMessage || '서비스 제공 중 문제가 발생했습니다. 홈으로 이동해 주세요.'}
          </Highlight>
        </Box>
        <Text size="small"><a href="/">GO TO HOME</a></Text>
      </PageBlock>
    </Box>
  )
}

export default Error
