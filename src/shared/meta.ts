import { MENUS } from '@/menu'

type titleType = { [path in string]: string }
export const TITLE = MENUS.reduce<titleType>((data, item) => {
  const { path, title } = item
  if (!Object.prototype.hasOwnProperty.call(data, path)){
    data[path] = title
  }
  return data
}, {})