import { Box, Text } from 'grommet'

import theme from './styles/theme'

function Splash() {
  return (
    <Box
      style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: `${theme.background}`,
      zIndex: 99
    }}>
      <Box
        align="center"
        pad="large"
        style={{
        position: 'absolute',
        bottom: 170,
        // bottom: 700,
        right: 0,
        left: 0,
      }}
    >
        <Text
          weight="bolder" style={{
        fontSize: 30,
        // fontSize: 100
        }}>
          프리다이빙 용어집
        </Text>
      </Box>
    </Box>
  )
}

export default Splash
