export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //최댓값도 포함, 최솟값도 포함
}

export function getRandomList({ array = [], arrayLength, maxNumber }: { array?: number[]; arrayLength: number; maxNumber: number }) {
  if (array.length === arrayLength){
    return array
  }

  const number = Math.floor(Math.random() * maxNumber) + 1

  const newArray = array.indexOf(number) < 0 ? [...array, number] : array
  return getRandomList({ array: newArray, arrayLength, maxNumber })
}

export function toSafeNumber(value: string | number, defaultValue = 0): number {
  return isNaN(Number(value)) ? defaultValue : Number(value)
}

export function numberWithCommas(
  number?: string | number | null,
  suffix = '',
  prefix = ''
): string {
  if (!number) {
    return `${prefix}-${suffix}`
  }
  return `${prefix}${toSafeNumber(number)?.toLocaleString()}${suffix}`
}
