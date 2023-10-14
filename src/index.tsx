import { Box, Clock, Heading, List } from 'grommet'
import { Link } from 'react-router-dom'

import { MENUS } from './menu'

function HomePage(){
  return (
    <>
      <Box pad="large" gap="large">
        <Heading>
          <span>IDLT Apps</span>
          <Clock type="digital" />
        </Heading>
        <List
          data={
            MENUS.map(({ path, title }, index) => {
              return { item: <Link key={index} to={path}>{title}</Link> }
            })}
        />
      </Box>
    </>
  )
}

export default HomePage
