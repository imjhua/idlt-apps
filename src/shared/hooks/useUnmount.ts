import { useRef } from 'react'

import useMount from './useMount'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useUnmount(fn: () => any) {
  const fnRef = useRef(fn)

  fnRef.current = fn

  useMount(() => () => fnRef.current())
}
