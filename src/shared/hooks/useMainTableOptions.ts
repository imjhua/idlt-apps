import qs from 'qs'
import { useSearchParams } from 'react-router-dom'

type DefaultOptions<Filter> = {
  keyword?: string;
  date?: {
    startDate: string;
    endDate: string;
  };
  filter?: Filter;
}

export default function useMainTableOptions<Filter = Record<string, string>>(defaultOptions?: DefaultOptions<Filter>){
  const [searchParams] = useSearchParams()
  const {
    page, pageSize, keyword, startDate, endDate, ...filter
  } = qs.parse(searchParams.toString())

  return {
    tableOptions: {
      pagination: {
        current: isNaN(Number(page)) ? 1 : Number(page),
        pageSize: isNaN(Number(pageSize)) ? 10 : Number(pageSize),
      },
      keyword: typeof keyword === 'string' ? keyword : defaultOptions?.keyword,
      ...(defaultOptions?.date && { date: defaultOptions.date }),
      ...(startDate && endDate && { date: { startDate, endDate } }),
      date: (typeof startDate === 'string' && typeof endDate === 'string') ? { startDate, endDate } : defaultOptions?.date,
      filter: {
        ...defaultOptions?.filter,
        ...filter as Filter
      }
    }
  }
}
