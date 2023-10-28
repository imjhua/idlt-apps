import { Box } from 'grommet'
import { useState } from 'react'

import Setting from '../shared/components/Setting'
import SuccessGraph from '../shared/components/SuccessGraph'

function Page(){
  const [retiermentPay, setRetiermentPay] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [continuousYears, setContinuousYears] = useState<number>(0)

  const handleRetiermentPayChange = (pay: number) => {
    setRetiermentPay(pay)
  }
  const handleYearChange = (year: number) => {
    setYear(year)
  }
  const handleContinuousYearsChange = (continuousYears: number) => {
    setContinuousYears(continuousYears)
  }
  return (
    <Box gap="small">
      <Setting
        retiermentPay={retiermentPay} onPaymentChange={handleRetiermentPayChange}
        year={year} onYearChange={handleYearChange}
        continuousYears={continuousYears} onContinuousYearsChange={handleContinuousYearsChange}
      />
      <SuccessGraph retiermentPay={retiermentPay} year={year} continuousYears={continuousYears} />
    </Box>
  )
}

export default Page
