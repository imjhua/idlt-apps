
import Day0928 from './assets/0928.json'
import Day0929 from './assets/0929.json'
import Day0930 from './assets/0930.json'

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
  Day9월28일: Day0928.filter(({ value }) => value),
  Day9월29일: Day0929.filter(({ value }) => value),
  Day9월30일: Day0930.filter(({ value }) => value),
}