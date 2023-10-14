import { useState } from 'react'

import { Section } from '@/shared/components/Styles'

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
    <>
      <Section>
        <Setting status={status} count={count} onChange={handleCountChange} />
      </Section>
      <Section>
        <Run status={status} count={count} onUpdateStatus={handleStatusUpdate} />
      </Section>
    </>
  )
}

export default Page

