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
            <Text>평균 월급</Text>
            <TextInput
              value={salary || ''}
              placeholder="한달에 얼마?"
              type="tel"
              onChange={handleSalaryChange}
            />
          </Box>
          <Text size="small">만원</Text>
        </Box>
        <Box direction="row" justify="center" align="end">
          <Box>
            <Text>퇴직시기</Text>
            <TextInput
              value={year || ''}
              placeholder="몇년 후 퇴직?"
              type="tel"
              onChange={handleYearChange}
            />
          </Box>
          <Text size="small">년</Text>
        </Box>
        <Box style={{ paddingTop: 24 }}>
          <Text>=</Text>
        </Box>
        <Box>
          <Text>퇴직금</Text>
          <TextInput
            value={retiermentPay ? numberWithCommas(retiermentPay, ' 만원') : ''}
            placeholder="계산된 퇴직금"
            type="tel"
            disabled
          />
        </Box>
      </Box>
    </>
  // <Box>
  //   <Form
  //     value={{ count: count || '' }}
  //     onChange={({ count }) => {
  //       const value = (Number(count || 0) > MAX_MEMBER) ? MAX_MEMBER : Number(count)
  //       onChange(value)
  //     }}
  //   >
  //     <FormField
  //       name="count" htmlFor="count" label="인원수"
  //       info={`최대 인원수는 ${MAX_MEMBER}명 입니다.`}
  //       margin="small"
  //       validateOn="change"
  //       validate={(value: number) => {
  //         if (value > MAX_MEMBER){
  //           return {
  //             message: 'string',
  //             status: 'error',
  //           }
  //         }
  //       }}
  //     >
  //       <Box direction="row">
  //         <Text>asldjf</Text>
  //         <TextInput
  //           id="count"
  //           name="count"
  //           placeholder="몇 명?"
  //           textAlign="start"
  //           type="tel"
  //           min={1}
  //           max={12}
  //           disabled={status === STATUS.START}
  //         />
  //       </Box>
  //     </FormField>
  //   </Form>
  // </Box>

  )
}

export default Setting
