import styled from '@emotion/styled'
import {
  MouseEvent, ReactNode, useEffect, useRef, useState
} from 'react'

import BoxShadow from './BoxShadow'

function BottomSheet({ title, open = false, onClose, children }: { title?: string; open?: boolean; onClose: () => void; children: ReactNode }) {
  const dimmedRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (dimmedRef.current){
      dimmedRef.current.addEventListener('wheel', (e) => {
        e.preventDefault()
      })
    }
  }, [dimmedRef])

  const [visible, setVisible] = useState(open)
  useEffect(() => {
    setVisible(open)
  }, [open])

  const onClickCloseButton = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    onClose()
    setVisible((state) => !state)
  }

  return (
    <>
      {visible && (
        <BottomSheetBlock role="dialog">
          <Dimmed
            ref={dimmedRef}
            onClick={onClickCloseButton} />
          <BoxShadowBlock>
            <BoxShadow>
              {title && (<Header><Title>{title}</Title></Header>)}
              {/* <IcClose onClick={onClickCloseButton} /> */}
              <Content>
                {children}
              </Content>
            </BoxShadow>
          </BoxShadowBlock>
        </BottomSheetBlock>)}
    </>
  )
}
export default BottomSheet

const BottomSheetBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 12;
  color: ${({ theme }) => theme.color};  
`

const Dimmed = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
`

const BoxShadowBlock = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 20px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`

const Content = styled.div`
  padding: 8px 0 0;
  max-height: 300px;
  overflow-y: scroll;
`
