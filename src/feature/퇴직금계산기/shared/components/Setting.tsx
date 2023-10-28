import { Box, Button, Text, TextInput } from 'grommet'
import { ChangeEvent, useEffect, useState } from 'react'

import { numberWithCommas } from '@/lib/utils'
import { Highlight } from '@/shared/components/Styles'

type SettingProps = {
  retiermentPay: number; onPaymentChange: (payment: number) => void;
  year: number; onYearChange: (year: number) => void;
  continuousYears: number; onContinuousYearsChange: (year: number) => void;

}
function Setting({
  retiermentPay, onPaymentChange,
  year, onYearChange,
  continuousYears, onContinuousYearsChange
}: SettingProps){
  const [showRetiermentPay, setShowRetiermentPay] = useState<boolean>(false)

  const [salary, setSalary] = useState<number>(0)

  useEffect(() => {
    // 유효성
    if (!salary){
      onPaymentChange(0)
    }

    if (!year){
      onContinuousYearsChange(0)
    }
    if (year < continuousYears){
      onContinuousYearsChange(year)
    }
  }, [salary, year, onPaymentChange, continuousYears, onContinuousYearsChange])

  const handleRestClick = () => {
    setShowRetiermentPay(false)
    onPaymentChange(0)
    setSalary(0)
    onYearChange(0)
    onContinuousYearsChange(0)
  }

  const handleShowRetiermentPayClick = () => {
    setShowRetiermentPay(true)

    if (salary && year){
      onPaymentChange(salary * year)
    }
  }
  const handleSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const salary = Number(e.target.value)
    setSalary(salary)
  }
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const year = Number(e.target.value)
    onYearChange(year)
  }

  const handleContinuousYearsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const continuousYears = Number(e.target.value)
    onContinuousYearsChange(year < continuousYears ? year : continuousYears)
  }

  return (
    <Box gap="small">
      <Box
        direction="row" justify="center" align="center"
        gap="small">
        <Box direction="row" justify="center" align="end">
          <Box>
            <Text size="small">평균월급(만원)</Text>
            <TextInput
              value={salary || ''}
              placeholder="한달에 얼마?"
              type="tel"
              size="small"
              onChange={handleSalaryChange}
              disabled={!!(retiermentPay)}
            />
          </Box>
        </Box>
        <Box style={{ paddingTop: 24, width: 14 }} align="center">
          <Text>x</Text>
        </Box>
        <Box direction="row" justify="center" align="end">
          <Box>
            <Text size="small">퇴직시기(몇 년)</Text>
            <TextInput
              value={year || ''}
              placeholder="몇년 후 퇴직?"
              type="tel"
              size="small"
              onChange={handleYearChange}
              disabled={!!(retiermentPay)}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Text size="small">(추가정보) 근속년수</Text>
        <TextInput
          value={continuousYears || ''}
          placeholder="몇년 근무?"
          type="tel"
          size="small"
          onChange={handleContinuousYearsChange}
          disabled={!!(retiermentPay)}
        />
      </Box>
      <Box>
        <Text size="medium" weight="bold">
          <Highlight>
          예상 퇴직금
          </Highlight>
        </Text>
        {!showRetiermentPay ? (
          <Button
            disabled={!(salary && year)}
            style={{ borderRadius: 4 }}
            primary
            label="퇴직금 보기"
            onClick={handleShowRetiermentPayClick} />
        ) : (
          <Box direction="row" gap="small">
            <TextInput
              // width="200"
              value={retiermentPay ? numberWithCommas(retiermentPay, ' 만원') : ''}
              placeholder="계산된 퇴직금"
              type="tel"
              size="small"
              readOnly
            />
            <Button
              primary
              disabled={!(salary && year)}
              style={{ borderRadius: 4, width: 120 }}
              label="초기화"
              size="small"
              onClick={handleRestClick} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Setting
