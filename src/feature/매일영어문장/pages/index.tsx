import { Box, Heading, List } from 'grommet'
import { Link } from 'react-router-dom'

import { SENTENCES } from '../shared/meta'

function HomePage() {
  return (
    <>
      <Box pad="large" gap="large">
        <Heading level={2}>매일영어문장</Heading>
        <List
          data={Object.keys(SENTENCES).map((title, index) => {
            return {
              item: (
                <Link
                  key={index}
                  to={{
                    pathname: 'pattern',
                    search: `?day=${title}`,
                  }}
                >
                  {title}
                </Link>
              ),
            }
          })}
        />
      </Box>
    </>
  )
}

export default HomePage
