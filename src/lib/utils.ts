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

async function writeText(text: string): Promise<boolean> {
  if (!clipboardSupported()) {
    return copyToClipboard(text)
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return copyToClipboard(text)
  }
}

function clipboardSupported() {
  return navigator.clipboard != null
}

function copyToClipboard(text: string): boolean {
  if (!clipboardCopySupported()) {
    return false
  }

  copy(text)
  return true
}

function clipboardCopySupported() {
  return document.queryCommandSupported?.('copy') ?? false
}

function isIOS() {
  return navigator.userAgent.match(/ipad|iphone/i) != null
}

function copy(text: string) {
  const focusingContainer = document.body

  const textArea = document.createElement('textArea') as HTMLTextAreaElement
  textArea.value = text
  textArea.contentEditable = 'true'
  textArea.readOnly = false
  textArea.style.userSelect = 'text'
  textArea.style.webkitUserSelect = 'text'
  focusingContainer.insertBefore(textArea, focusingContainer.firstChild)
  if (isIOS()) {
    const range = document.createRange()
    range.selectNodeContents(textArea)
    const selection = window.getSelection()

    if (selection !== null) {
      selection.removeAllRanges()
      selection.addRange(range)
    }

    textArea.setSelectionRange(0, 999999)
  } else {
    textArea.select()
  }
  document.execCommand('copy')
  focusingContainer.removeChild(textArea)
}

export const clipboard = { writeText, }
