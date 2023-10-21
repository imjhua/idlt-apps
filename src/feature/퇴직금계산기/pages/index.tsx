import { Box } from 'grommet'
import { useState } from 'react'

import Setting from '../shared/components/Setting'
import SuccessGraph from '../shared/components/SuccessGraph'

function Page(){
  const [retiermentPay, setRetiermentPay] = useState<number>(0)
  const [year, setYear] = useState<number>(2)

  const handleRetiermentPayChange = (count: number) => {
    setRetiermentPay(count)
  }
  const handleYearChange = (count: number) => {
    setYear(count)
  }
  return (
    <Box gap="small">
      <Setting
        retiermentPay={retiermentPay} onPaymentChange={handleRetiermentPayChange}
        year={year} onYearChange={handleYearChange}
      />
      <SuccessGraph retiermentPay={retiermentPay} year={year} />
    </Box>
  )
}

export default Page
