import { Box } from 'grommet'
import { useState } from 'react'

import Run from '../shared/components/Run'
import Setting from '../shared/components/Setting'
import { STATUS } from '../shared/meta'

function Page(){
  const [status, setStatus] = useState<STATUS | undefined>()
  const [count, setCount] = useState<number>(0)

  const handleCountChange = (count: number) => {
    setCount(count)
  }
  const handleStatusUpdate = (status: STATUS) => {
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

