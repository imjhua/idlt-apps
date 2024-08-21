import { Theme } from '@radix-ui/themes'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ThemeProvider from './context/ThemeProvider'
import { routes } from './routes'
import ErrorBoundary from './shared/components/ErrorBoundary'
import Toast from './shared/components/Toast'
import { OverlayProvider } from './shared/hooks/useOverlay'
import GlobalStyle from './styles/GlobalStyle'

const router = createBrowserRouter(routes)

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Suspense fallback={null}>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />

        <ThemeProvider>
          <Theme>
            {/* {import.meta.env['VITE_APP_TYPE'] === 'LOCAL' && <VConsoleScript />} */}
            <GlobalStyle />
            {/* <Splash /> */}
            <RouterProvider router={router} />
            <Toast />
          </Theme>
        </ThemeProvider>

        <OverlayProvider>
        </OverlayProvider>
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>
  // </React.StrictMode>
)

