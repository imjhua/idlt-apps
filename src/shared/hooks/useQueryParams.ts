import { useLocation } from 'react-router-dom'

export default function useQueryParams(key: string, defaultValue: string): string
export default function useQueryParams(key: string, defaultValue?: string): string | undefined
export default function useQueryParams(key: string, defaultValue?: string) {
  const { search } = useLocation()
  return new URLSearchParams(search).get(key) || defaultValue
}