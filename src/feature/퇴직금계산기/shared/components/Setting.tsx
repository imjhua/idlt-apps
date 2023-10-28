import { Box, Text, TextInput } from 'grommet'
import { ChangeEvent, useEffect, useState } from 'react'

import { numberWithCommas } from '@/lib/utils'

type SettingProps = {
  retiermentPay: number; onPaymentChange: (payment: number) => void;
  year: number; onYearChange: (year: number) => void;

}
function Setting({ retiermentPay, onPaymentChange, year, onYearChange }: SettingProps){
  const [salary, setSalary] = useState<number>(0)

  useEffect(() => {
    if (salary && year){
      onPaymentChange(salary * year)
    }
  }, [salary, year, onPaymentChange])

  const handleSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(e.target.value))
  }
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    onYearChange(Number(e.target.value))
  }
  // 근속년수
  return (
    <>
      <Box
        direction="row" justify="center" align="center"
        gap="small">
        <Box direction="row" justify="center" align="end">
          <Box>
            <Text>평균월급</Text>
            <TextInput
              value={salary || ''}
              placeholder="한달에 얼마?"
              type="tel"
              onChange={handleSalaryChange}
              size="small"
            />
          </Box>
        </Box>
        <Box style={{ paddingTop: 24, width: 14 }} align="center">
          <Text>x</Text>
        </Box>
        <Box direction="row" justify="center" align="end">
          <Box>
            <Text>퇴직시기</Text>
            <TextInput
              value={year || ''}
              placeholder="몇년 후 퇴직?"
              type="tel"
              onChange={handleYearChange}
              size="small"
            />
          </Box>
        </Box>
        <Box style={{ paddingTop: 24, width: 14 }} align="center">
          <Text>=</Text>
        </Box>
        <Box>
          <Text>퇴직금</Text>
          <TextInput
            value={retiermentPay ? numberWithCommas(retiermentPay, ' 만원') : ''}
            placeholder="계산된 퇴직금"
            type="tel"
            size="small"
            disabled
          />
        </Box>
      </Box>
    </>
  )
}

export default Setting
