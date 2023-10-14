import axios, {
  AxiosError, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig
} from 'axios'
export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

const onRequestConfigClient = (config: InternalAxiosRequestConfig) => {
  // FIXME: GW가 만들어지기 전 내비어드민에 접근할 수 있도록 인증을 위한 임시코드(토큰 갱신 대응 필요)
  if (config.url?.includes('/api') || config.url?.includes('/proxy/sandshew')){
    config.headers.Authorization = import.meta.env['VITE_X']
  }

  return config
}
const onRequestError = (error: AxiosError) => Promise.reject(error)

const onResponseSuccess = (config: AxiosResponse) => config.data as AxiosResponse
const onResponseerror = (error: AxiosError) => Promise.reject(error)

export const createClient = ({ baseURL, ...options }: CreateAxiosDefaults) => {
  const client = axios.create({
    baseURL,
    timeout: 100 * 1000, // 단위 ms
    ...options
  })

  client.interceptors.request.use(onRequestConfigClient, onRequestError)
  client.interceptors.response.use(onResponseSuccess, onResponseerror)

  return client
}

export const request = <T>(options: AxiosRequestConfig): Promise<T> => {
  const baseURL = import.meta.env['VITE_DEV'] === 'on' ? import.meta.env['VITE_APP_HOST'] : import.meta.env['VITE_GW_ENDPOINT'] as string
  const client = createClient({ baseURL })
  return client.request(options)
}

export function isError(payload: unknown): payload is AxiosError<{ message: string; code: string }>{
  return axios.isAxiosError(payload)
}