import { css, Global } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { Suspense } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import ErrorBoundary from './shared/components/ErrorBoundary'
import Layout from './shared/components/Layout'
import Loading from './shared/components/Loading'
import useTheme from './shared/hooks/useTheme'
import theme from './styles/theme'

function App() {
  const themeProps = useTheme()

  return (
    <>

      <Global
        styles={css`
          :root { 
            background: ${themeProps.theme === 'light' ? 'var(--color-light-bg)' : 'var(--color-dark-bg)'}; 
          }
        `}
      />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <ScrollRestoration />
          <AppBlock>
            <Layout />
          </AppBlock>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App

export const AppBlock = styled.div`
  padding-top: env(safe-area-inset-top);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);

  background-color: ${theme.background};
  min-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));

`
