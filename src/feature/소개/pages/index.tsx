
import styled from '@emotion/styled/macro'

import { SUB_NAV_HEIGHT, SUB_NAV_PADDING, TOP_PADDING } from '@/shared/components/Layout'

import { ParallaxSection1, ParallaxSection2, ParallaxSection3 } from '../shared/components/Parallax'
import SubNav from '../shared/components/SubNav'

function Page(){
  return (
    <>
      <SubNav />
      <FullSectionBlock>
        <FullSection id="메뉴1">
          {/* <Hero /> */}
          <ParallaxSection1 />
          .
        </FullSection>
        <FullSection id="메뉴2">
          <ParallaxSection2 />
          .
        </FullSection>
        <FullSection id="메뉴3">
          <ParallaxSection3 />
          .
        </FullSection>
      </FullSectionBlock>
    </>
  )
}

export default Page

const FullSectionBlock = styled.div`
  scroll-behavior: smooth;
  overflow: scroll;
  height: calc(100vh - ${TOP_PADDING}px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
`

const FullSection = styled.div`
  /* background-color: red; */
  padding-top:${SUB_NAV_HEIGHT + SUB_NAV_PADDING}px;
  box-sizing: border-box;
  height: 100%;
`
