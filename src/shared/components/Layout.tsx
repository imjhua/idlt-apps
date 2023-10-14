
import { Box, Grid } from 'grommet'

import Gnb from './Gnb'
import MainContent from './MainContent'

export const GNB_HEIGHT = 44
export const BOX_PADDING = 6 * 2
export const CONTENT_PADDING = 6

function Layout(){
  return (
    <Grid
      rows={['xxsmall', 'flex']}
      columns={['auto']}
      areas={[
        ['header'],
        ['main'],
      ]}
      fill
    >
      <Box
        border={{ color: 'border', style: 'dashed' }}
        gridArea="header"
        justify="center"
        background="header"
        style={{
          zIndex: 1,
          paddingTop: 'env(safe-area-inset-top)',
          position: 'fixed', top: 0, right: 0, left: 0,
        }}
      >
        <Gnb addYOffset={GNB_HEIGHT} />
      </Box>
      <Box
        gridArea="main"
        pad="small"
      >
        <MainContent />
      </Box>
    </Grid>
  )
}

export default Layout