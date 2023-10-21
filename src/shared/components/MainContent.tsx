
import styled from '@emotion/styled/macro'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import useTitle from '../hooks/useTitle'
import ErrorBoundary from './ErrorBoundary'
import Loading from './Loading'
import ThemeSwitch from './Theme/ThemeSwitch'

function MainContent(){
  useTitle()

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <MainLayout>
          <Outlet />
        </MainLayout>
        <ThemeSwitch />
      </Suspense>
    </ErrorBoundary>
  )
}

export default MainContent

const MainLayout = styled.div`
  padding: 0 10px;
`
