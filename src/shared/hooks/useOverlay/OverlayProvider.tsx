import {
  createContext, PropsWithChildren, ReactNode, useCallback, useMemo, useState,
} from 'react'

import Portal from '@/shared/components/Portal'

export const OverlayContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null)

export function OverlayProvider({ children }: PropsWithChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(new Map())

  const mount = useCallback((id: string, element: ReactNode) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById)
      cloned.set(id, element)
      return cloned
    })
  }, [])

  const unmount = useCallback((id: string) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById)
      cloned.delete(id)
      return cloned
    })
  }, [])

  const context = useMemo(() => ({ mount, unmount }), [mount, unmount])

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlayById.entries()].map(([id, element]) => (
        <Portal key={id}>{element}</Portal>
      ))}
    </OverlayContext.Provider>
  )
}
