
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

}

export default Layout