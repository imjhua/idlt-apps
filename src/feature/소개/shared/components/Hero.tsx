import styled from '@emotion/styled/macro'
import { Box } from 'grommet'

import { SUB_NAV_HEIGHT, SUB_NAV_PADDING } from '@/shared/components/Layout'

type HeroProps = { }
function Hero({ }: HeroProps){
  return (
    <StickySection>
      <div>
        <div>
          <div>
            <Box pad="large">
              HI!
            </Box>
          </div>
        </div>
      </div>
    </StickySection>
  )
}

export default Hero

const StickySection = styled.div`
  /* background: linear-gradient(-30deg, #e5b6c7, #885db7); */
  height:${SUB_NAV_HEIGHT + SUB_NAV_PADDING + 40}px;

  > div {
    position: relative;
    height: 100%;
    > div {
      position: sticky;
      top: 0;
      > div {
        height: 160px;
      }
    }
  }
`

