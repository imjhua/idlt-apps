import { Box, Text } from 'grommet'

import useQueryParams from '@/shared/hooks/useQueryParams'

import { SENTENCES } from '../../shared/meta'

function Page() {
  const title = useQueryParams('title') as string

  return (
    <>
      <Text size="medium">{title}</Text>

      <Box gap="large" pad="large">
        {SENTENCES[title]
          .filter(({ value }) => value)
          .map(({ sentence, value, pattern, mean, test, ex }, index) => {
            return (
              <Box key={index}>
                <ul>
                  <li>{sentence}</li>
                  <li>{value}</li>
                  <li>{pattern}</li>
                  <li>{mean}</li>
                  <li>{test}</li>
                  <li>{ex}</li>
                </ul>
              </Box>
            )
          })}
      </Box>
    </>
  )
}

export default Page
