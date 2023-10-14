import { Box, Clock, Heading, List } from 'grommet'
import { Link } from 'react-router-dom'

function HomePage(){
  return (
    <>
      <Box pad="large" gap="large">
        <Heading>
          <span>IDLT Apps</span>
          <Clock type="digital" />
        </Heading>
        <List
          primaryKey="item"
          data={[
            { item: <Link to="/랜덤달리기">랜덤달리기</Link> },
            // { item: <Link to="/명상">명상</Link> },
          ]}
        />
      </Box>
    </>
  )
}

export default HomePage
