import { ReactNode, useEffect, useRef, useState, } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  containerSelector?: string;
  children: ReactNode;
}

function Portal({
  containerSelector = 'PORTAL_CONTAINER_ID',
  children,
}: PortalProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const existingContainer = document.getElementById(containerSelector)

    if (existingContainer) {
      containerRef.current = existingContainer
    } else {
      const container = document.createElement('div')
      container.id = containerSelector

      document.body.appendChild(container)

      containerRef.current = container
    }

    setMounted(true)
  }, [containerSelector])

  return mounted ? createPortal(children, containerRef.current!) : null
}

export default Portal
