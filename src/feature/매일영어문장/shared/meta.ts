
import Day0927 from './assets/0927.json'
import Day0928 from './assets/0928.json'
import Day0929 from './assets/0929.json'
import Day0930 from './assets/0930.json'
import Day1001 from './assets/1001.json'
import Day1002 from './assets/1002.json'
import Day1003 from './assets/1003.json'
import Day1004 from './assets/1004.json'
import etc from './assets/etc.json'

// key	SentenceOfTheDay	EnglishSentence	Pattern	PatternMeaning	Example	ExampleMeaning

type SentenceType = {
    key: string;
    SentenceOfTheDay: string | null;
    EnglishSentence: string | null;
    Pattern: string | null;
    PatternMeaning: string | null;
    Example: string | null;
    ExampleMeaning: string | null;
}
export type SentencesType = SentenceType[]

export const SENTENCES: { [key in string]: Required<SentenceType>[] } = {
  이것저것: etc.filter(({ EnglishSentence }) => EnglishSentence),
  Day9월27일: Day0927.filter(({ EnglishSentence }) => EnglishSentence),
  Day9월28일: Day0928.filter(({ EnglishSentence }) => EnglishSentence),
  Day9월29일: Day0929.filter(({ EnglishSentence }) => EnglishSentence),
  Day9월30일: Day0930.filter(({ EnglishSentence }) => EnglishSentence),
  Day10월01일: Day1001.filter(({ EnglishSentence }) => EnglishSentence),
  Day10월02일: Day1002.filter(({ EnglishSentence }) => EnglishSentence),
  Day10월03일: Day1003.filter(({ EnglishSentence }) => EnglishSentence),
  Day10월04일: Day1004.filter(({ EnglishSentence }) => EnglishSentence),
}