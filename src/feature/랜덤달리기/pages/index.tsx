import { Box } from 'grommet'
import { useState } from 'react'

import useTitle from '@/shared/hooks/useTitle'

import Run from '../shared/components/Run'
import Setting from '../shared/components/Setting'
import { COUNT_DWON_STATUS } from '../shared/meta'

function Page(){
  useTitle('랜덤달리기 | IDLT APPs')

  const [status, setStatus] = useState<COUNT_DWON_STATUS | undefined>()
  const [count, setCount] = useState<number>(0)

  const handleCountChange = (count: number) => {
    setCount(count)
  }
  const handleStatusUpdate = (status: COUNT_DWON_STATUS) => {
    setStatus(status)
  }
  return (
    <Box gap="small">
      <Setting status={status} count={count} onChange={handleCountChange} />
      <Run status={status} count={count} onUpdateStatus={handleStatusUpdate} />
    </Box>
  )
}

export default Page

