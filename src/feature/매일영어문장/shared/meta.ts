
import October from './assets/10-2.json'
import September from './assets/0927.json'
import August from './assets/0928.json'
import July from './assets/0929.json'
import June from './assets/0930.json'
import May from './assets/1001.json'
import April from './assets/1002.json'
import March from './assets/1003.json'
import February from './assets/1004.json'
import January from './assets/1005.json'
import November from './assets/2024/November.json'

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

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ]

export const SENTENCES: { [key in string]: Required<SentenceType>[] } = {
  November: November.filter(({ EnglishSentence }) => EnglishSentence),
  October: October.filter(({ EnglishSentence }) => EnglishSentence),
  September: September.filter(({ EnglishSentence }) => EnglishSentence),
  August: August.filter(({ EnglishSentence }) => EnglishSentence),
  July: July.filter(({ EnglishSentence }) => EnglishSentence),
  June: June.filter(({ EnglishSentence }) => EnglishSentence),
  May: May.filter(({ EnglishSentence }) => EnglishSentence),
  April: April.filter(({ EnglishSentence }) => EnglishSentence),
  March: March.filter(({ EnglishSentence }) => EnglishSentence),
  February: February.filter(({ EnglishSentence }) => EnglishSentence),
  January: January.filter(({ EnglishSentence }) => EnglishSentence),
}