import { ComponentType } from 'react'
import { RouteObject } from 'react-router-dom'

import HomePage from '.'
import NotFound from './404'
import App from './App'

interface ComponentModule {
  default: ComponentType;
}

const pages = import.meta.glob<ComponentModule>('/src/feature/*/pages/**/[a-z[]*.tsx')

const pageRoutes = Object.keys(pages).map((route) => {
  const path = route
    .replace(/\/src\/feature(\/.+)\/pages|index|.tsx$/g, '$1')
    .replace(/\/pages/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  const component = pages[route]
  return {
    path,
    async lazy(){
      return { Component: (await component()).default }
    }
  }
})

export const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { element: <HomePage />, path: '/' },
      { element: <NotFound />, path: '*' },
      ...pageRoutes
    ]
  }
]

