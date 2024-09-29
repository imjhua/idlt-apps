
import Day9월28일 from './assets/9월28일.json'
import Day9월29일 from './assets/9월29일.json'

type SentenceType = {
    key: string;
    sentence: string | null;
    value: string | null;
    pattern: string | null;
    mean: string | null;
    test: string | null;
    ex: string | null;
}
type SentencesType = SentenceType[]

export const SENTENCES: { [key in string]: SentencesType } = {
  Day9월28일,
  Day9월29일,
}