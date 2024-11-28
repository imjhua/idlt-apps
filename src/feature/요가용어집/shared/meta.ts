import LIST from './assets/요가용어목록.json'

export const 요가용어목록 = (LIST.filter(({ 용어, 용어풀이, 뜻, 태그 }) => 용어 && 용어풀이 && 뜻 && 태그) as {
  용어: string;
  용어풀이: string;
  뜻: string;
  태그: string;
  아사나: string;
  index: number;
}[])
.sort(function (a, b) {
  return a.태그 < b.태그 ? -1 : a.태그 > b.태그 ? 1 : 0
})
.map((data, index) => ({ ...data, index }))