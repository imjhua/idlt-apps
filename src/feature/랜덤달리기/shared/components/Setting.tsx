import { Box, Form, FormField, TextInput } from 'grommet'

import { RUNNING_STATUS } from '../meta'

const MAX_MEMBER = 12
type SettingProps = {
  status: RUNNING_STATUS | undefined;
  count: number;
  onChange: (count: number) => void;
}
function Setting({ status, count, onChange }: SettingProps) {
  return (
    <Box>
      <Form
        value={{ count: count || '' }}
        onChange={({ count }) => {
          const value =
            Number(count || 0) > MAX_MEMBER ? MAX_MEMBER : Number(count)
          onChange(value)
        }}
      >
        <FormField
          name="count"
          htmlFor="count"
          label="인원수"
          info={`최대 인원수는 ${MAX_MEMBER}명 입니다.`}
          margin="small"
          validateOn="change"
          validate={(value: number) => {
            if (value > MAX_MEMBER) {
              return {
                message: 'string',
                status: 'error',
              }
            }
          }}
        >
          <TextInput
            id="count"
            name="count"
            placeholder="몇 명?"
            type="tel"
            min={1}
            max={12}
            disabled={status === RUNNING_STATUS.RUN}
          />
        </FormField>
      </Form>
    </Box>
  )
}

export default Setting
