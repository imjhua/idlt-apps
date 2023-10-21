import { Box } from 'grommet'

import useTitle from '@/shared/hooks/useTitle'

import Xxx from '../shared/components/Xxx'

function Page(){
  useTitle('제목')

  return (
    <Box gap="small">
      <Xxx text="text" />
    </Box>
  )
}

export default Page

