import { Box, Button, Form, FormField, TextInput } from 'grommet'
import { useState } from 'react'

import { notify } from '@/shared/components/Toast'

function Setting() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [value, setValue] = useState<{
    word: string;
    meaning: string;
  }>({ word: '', meaning: '' })

  return (
    <Box>
      <Form
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
        onSubmit={({ value }) => {
          const { word, meaning } = value
          if (word && meaning) {
            setIsLoading(true)
            notify('단어가 추가되었습니다.')
            setTimeout(() => {
              setIsLoading(false)
              setValue({ word: '', meaning: '' })
            }, 2000)
          }
        }}
        messages={{ required: '필수입력입니다.' }}
      >
        <FormField
          name="word" htmlFor="word" label="단어"
          margin="small" required>
          <TextInput
            id="word" name="word" placeholder="입력"
            type="text" disabled={isLoading} />
        </FormField>
        <FormField
          name="meaning" htmlFor="meaning" label="뜻"
          margin="small" required>
          <TextInput
            id="meaning" name="meaning" placeholder="입력"
            type="text" disabled={isLoading} />
        </FormField>

        <Box
          direction="row" margin="large" gap="medium"
          justify="center">
          <Button type="submit" primary label="저장" />
          <Button type="reset" label="초기화" />
        </Box>
      </Form>
    </Box>
  )
}

export default Setting
