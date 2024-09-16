
import { Box, Heading, List } from 'grommet'
import { Link } from 'react-router-dom'

const STEP = 50
const PATTERN_LENGHT = 400
const LIST = new Array(PATTERN_LENGHT / STEP).fill(0).map((_, index) => {
  const start = (index) * STEP + 1
  const end = (index + 1) * STEP
  return {
    path: `pattern?start=${start}&end=${end}`,
    title: `${start} ~ ${end}문장`
  }
})

function HomePage(){
  return (
    <>
      <Box pad="large" gap="large">
        <Heading level={2}>영어회화 이지패턴 300문장</Heading>
        <List
          data={
            LIST.map(({ path, title }, index) => {
              return { item: <Link key={index} to={path}>{title}</Link> }
            })}
        />
      </Box>
    </>
  )
}

export default HomePage

