
// import { Box, Grid } from 'grommet'

// import { Box, Grid } from '@radix-ui/themes'

import Gnb from './Gnb'
import MainContent from './MainContent'

/* TODO: 삭제 */
export const GNB_HEIGHT = 62
export const BOX_PADDING = 6 * 2
export const CONTENT_PADDING = 6
export const SUB_NAV_HEIGHT = 26
export const SUB_NAV_PADDING = 10

export const TOP_PADDING = GNB_HEIGHT + (BOX_PADDING / 2) + CONTENT_PADDING + SUB_NAV_HEIGHT + SUB_NAV_PADDING

function Layout(){
  return (
    <>
      <Gnb addYOffset={4} />
      <MainContent />
    </>
  )

  // return (
  //   <Grid
  //     fill
  //     rows={[`${GNB_HEIGHT}px`, 'full']}
  //     columns={['full']}
  //     areas={[
  //       ['header'],
  //       ['main'],
  //     ]}
  //   >
  //     <Box
  //       background="header"
  //       gridArea="header"
  //       justify="center"
  //     >
  //       <Gnb addYOffset={4} />
  //     </Box>
  //     <Box gridArea="main">
  //       <MainContent />
  //     </Box>
  //   </Grid>
  // )
}

export default Layout