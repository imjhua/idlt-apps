import { Header, Text } from 'grommet'
import { useLocation } from 'react-router-dom'

import Logo from './Logo'
import Profile from './Profile'

function Gnb(){
  const location = useLocation()

  const pathname = decodeURI(location.pathname)
  const [_, title] = pathname.split('/')

  return (
    <Header>
      <div>
        <Logo />
        <Text margin="xsmall">{(title) && title}</Text>
      </div>
      <Profile email="idlt@email.com"></Profile>
    </Header>
  )
}

export default Gnb
