import { useEffect, useRef } from 'react'

import { BRAND_NAME } from '@/meta'

import { TITLE } from '../meta'

const useTitle = () => {
  const title = TITLE[decodeURI(location.pathname)]

  const documentDefined = typeof document !== 'undefined'
  const originalTitle = useRef(documentDefined ? document.title : null)

  useEffect(() => {
    if (!documentDefined) {
      return
    }

    const current = originalTitle.current
    if (document.title !== title) {
      document.title = `${title} | ${BRAND_NAME}`
    }

    return () => {
      document.title = current || ''
    }
  }, [title, documentDefined])
}

export default useTitle
