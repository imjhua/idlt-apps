
import { Box, Grid } from 'grommet'

import Gnb from './Gnb'
import MainContent from './MainContent'

export const GNB_HEIGHT = 48
export const BOX_PADDING = 6 * 2
export const CONTENT_PADDING = 6
export const SUB_NAV_HEIGHT = 26
export const SUB_NAV_PADDING = 10

export const TOP_PADDING = GNB_HEIGHT + (BOX_PADDING / 2) + CONTENT_PADDING + SUB_NAV_HEIGHT + SUB_NAV_PADDING

function Layout(){
  return (
    <Grid
      fill
      rows={['xxsmall', 'full']}
      columns={['full']}
      areas={[
        ['header'],
        ['main'],
      ]}
    >
      <Box
        background="header"
        gridArea="header"
        justify="center"
        border="bottom"
        style={{
          height: GNB_HEIGHT,
          zIndex: 10,
          paddingTop: 'env(safe-area-inset-top)',
          position: 'fixed', top: 0, right: 0, left: 0,
        }}
      >
        <Gnb addYOffset={4} />
      </Box>
      <Box gridArea="main">
        <MainContent />
      </Box>
    </Grid>
  )
}

export default Layout