import { Box, List, Text, } from 'grommet'
import { Checkmark, Sort } from 'grommet-icons'
import { Fragment, useState } from 'react'

import BottomSheet from '@/shared/components/BottomSheet'

function Sorting(){
  const [showSort, setShowSort] = useState<boolean>(false)
  const handleSortClick = () => {
    setShowSort(true)
  }
  const handleBottomSheetCloseClick = () => {
    setShowSort(false)
  }
  const handleSortApplyClick = (e: {
    item?: {
      id: number;
      text: string;
      active: boolean;
    } | undefined;
    index?: number | undefined;
  }) => {
    console.log(e.item)

    setShowSort(false)
  }
  return (
    <>
      <Sort onClick={handleSortClick} />
      <BottomSheet
        open={showSort}
        onClose={handleBottomSheetCloseClick}
      >
        <Box margin="medium">
          <List
            title="정렬목록"
            itemKey={(item) => (item.id)}
            primaryKey={({ text }) => (
              <Text key={text}>
                {text}
              </Text>
            )}
            secondaryKey={({ id, active }) => (
              <Fragment key={id}>
                {active && <Checkmark style={{ stroke: '#4397af' }} />}
              </Fragment>
            )}
            data={[{
              id: 512,
              text: '알파벳순',
              active: false
            }, {
              id: 513,
              text: '최근 추가한 순',
              active: true
            }, {
              id: 514,
              text: '즐겨찾기',
              active: false
            }]}
            // onClickItem={(event) => {
            //   setShow(true)
            //   setClicked(event.item)
            // }}
            onClickItem={handleSortApplyClick}
          />

          {/* <Button
            margin={{ top: 'medium' }}
            label="적용"
            onClick={handleSortApplyClick}
          /> */}
        </Box>
      </BottomSheet>
    </>
  )
}

export default Sorting
