import LIST from './assets/프리다이빙용어목록.json'

export const 프리다이빙용어목록 = LIST.filter(({ 용어, 용어풀이, 뜻 }) => 용어 && 용어풀이 && 뜻) as {
  용어: string;
  용어풀이: string;
  뜻: string;
  태그: string | null;
}[]