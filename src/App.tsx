import styled from '@emotion/styled/macro'
import { Suspense } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import ErrorBoundary from './shared/components/ErrorBoundary'
import Layout from './shared/components/Layout'
import Loading from './shared/components/Loading'

function App(){
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <ScrollRestoration />
        <AppBloack>
          <Layout />
        </AppBloack>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

export const AppBloack = styled.div`
  /* background-color: blanchedalmond; */
  
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  /* min-height: 100vh; */
  /* min-height: -webkit-fill-available; */
  
  /* min-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom)); */
`
