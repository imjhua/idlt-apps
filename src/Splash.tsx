import { Box, Text } from 'grommet'

function Splash() {
  return (
    <Box
      align="center"
      pad="large"
      style={{
        position: 'absolute',
        bottom: 700,
      }}
    >
      <Text weight="bolder" style={{ fontSize: 100 }}>
        프리다이빙 용어집
      </Text>
    </Box>
  )
}

export default Splash
