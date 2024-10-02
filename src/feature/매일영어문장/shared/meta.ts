
import Day0927 from './assets/0927.json'
import Day0928 from './assets/0928.json'
import Day0929 from './assets/0929.json'
import Day0930 from './assets/0930.json'
import Day1001 from './assets/1001.json'
import Day1002 from './assets/1002.json'

type SentenceType = {
    key: string;
    sentence: string | null;
    value: string | null;
    pattern: string | null;
    mean: string | null;
    test: string | null;
    ex: string | null;
}
export type SentencesType = SentenceType[]

export const SENTENCES: { [key in string]: SentencesType } = {
  Day9월27일: Day0927.filter(({ value }) => value),
  Day9월28일: Day0928.filter(({ value }) => value),
  Day9월29일: Day0929.filter(({ value }) => value),
  Day9월30일: Day0930.filter(({ value }) => value),
  Day10월01일: Day1001.filter(({ value }) => value),
  Day10월02일: Day1002.filter(({ value }) => value),
}