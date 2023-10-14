import React, { ErrorInfo, ReactNode } from 'react'

import Error from './Error'

/*
TODO: 코드 개선 unhandledrejection / 인가 말고 인증에러발생시 로그인 페이지 유도
*/
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  info: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      info: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, info: error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error: ', error)
    console.log('errorInfo: ', errorInfo)
  }

  render() {
    const { hasError, info } = this.state
    const { children } = this.props
    if (hasError) {
      return <Error errorMessage={info?.message} />
    }
    return children
  }
}

export default ErrorBoundary