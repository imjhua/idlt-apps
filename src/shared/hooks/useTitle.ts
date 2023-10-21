import { useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { BRAND_NAME } from '@/meta'

import { TITLE } from '../meta'

const useTitle = () => {
  const location = useLocation()

  const title = useMemo(() => {
    return TITLE[decodeURI(location.pathname)] || BRAND_NAME
  }, [location])

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
