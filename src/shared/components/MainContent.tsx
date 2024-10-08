
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
        <Outlet />
        <ThemeSwitch />
      </Suspense>
    </ErrorBoundary>
  )
}

export default MainContent

