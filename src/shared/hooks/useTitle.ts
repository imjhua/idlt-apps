import { useEffect, useRef } from 'react'

const useTitle = (title: string) => {
  const documentDefined = typeof document !== 'undefined'
  const originalTitle = useRef(documentDefined ? document.title : null)

  useEffect(() => {
    if (!documentDefined) {
      return
    }

    const current = originalTitle.current
    if (document.title !== title) {
      document.title = title
    }

    return () => {
      document.title = current || ''
    }
  }, [title, documentDefined])
}

export default useTitle
