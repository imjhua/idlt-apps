// import styled from '@emotion/styled'
// import { useMemo } from 'react'

// const BONUS = 100

// const SVG_WIDTH = 620
// const SVG_HEIGHT = 530
// const X_TOP_PADDING = 40
// const X_BOTTOM_PADDING = 20
// const Y_LEFT_PADDING = 40
// const Y_RIGHT_PADDING = 40
// const X_LABEL = 20
// const Y_LABEL = 6
// const X_END_ASIX = 14
// // 면이 좀 이상
// const X_START = Y_LEFT_PADDING + 30
// const Y_START = SVG_HEIGHT - X_BOTTOM_PADDING - X_LABEL

// function XAsix({ year }: { year: number }) {
//   const xGap = (SVG_WIDTH - X_START - Y_RIGHT_PADDING) / (year * 12)
//   const xAxisLenght = year * 12

//   return (
//     <>
//       {/* XAsix */}
//       <Line
//         x1={Y_LEFT_PADDING}
//         y1={Y_START}
//         x2={SVG_WIDTH - Y_RIGHT_PADDING}
//         y2={Y_START}
//         strokeDasharray="0"
//       />
//       {/* XAsix 텍스트 */}
//       <g>
//         {new Array(xAxisLenght).fill(0).map((_, index) => {
//           const label = index === 0 ? '시작' : `${(index + 1) / 12}년`
//           // 처음과 끝은 무조건 노출
//           if (index === 0 || (index + 1) % 12 === 0) {
//             return (
//               <Text
//                 key={index}
//                 x={(X_START + index * xGap) - (index === 0 ? 10 : 6)}
//                 y={Y_START + X_END_ASIX}
//               >
//                 {label}
//               </Text>
//             )
//           }
//           return null
//         })}
//       </g>
//     </>
//   )
// }
// function YAxis({ year, retiermentPay }: { year: number; retiermentPay: number }) {
//   const dayIncome = retiermentPay / year / 12
//   const data = useMemo(() => {
//     // x축 데이터
//     return new Array(retiermentPay / 10).fill(0).map((_, index) => {
//       return {
//         date: index,
//         score: (index) * dayIncome // + (Math.floor(index / 12) * BONUS)
//       }
//     })
//   }, [dayIncome, retiermentPay])

//   // console.log(data)

//   const yGap = (SVG_HEIGHT - X_TOP_PADDING - X_BOTTOM_PADDING - X_LABEL) / (data.length - 1)

//   if (!retiermentPay){
//     return null
//   }
//   return (
//     <>
//       {/* YAxis 텍스트 */}
//       <g>
//         {data
//           .map(({ score }, index) => {

//             return (
//               <Text
//                 key={index}
//                 x={X_START - 37}
//                 y={Y_START - (((yGap / dayIncome) * score)) - Y_LABEL}
//               >
//                 {((retiermentPay / year) / 10) * (index + 1)} 만원
//               </Text>
//             )
//           })}
//       </g>
//     </>
//   )
// }
// function GridRow({ year }: { year: number }) {
//   return (
//     <g>
//       {new Array(year).fill(0).map((_, index) => {
//         const yGap = (SVG_HEIGHT - X_TOP_PADDING - X_LABEL) / (year)

//         return (
//           <Line
//             key={index}
//             x1={X_START - 10}
//             y1={(index * yGap) + (X_TOP_PADDING)}
//             x2={SVG_WIDTH - Y_RIGHT_PADDING}
//             y2={(index * yGap) + (X_TOP_PADDING)}
//             strokeDasharray="0"
//             grid
//           />
//         )
//       })}
//     </g>
//   )
// }

// function GridColumn({ year }: { year: number }) {
//   const xAxisLenght = year * 12
//   const xGap = (SVG_WIDTH - X_START - Y_RIGHT_PADDING) / (year * 12)

//   return (
//     <g>
//       {new Array(xAxisLenght).fill(0).map((_, index) => {
//         // 처음과 끝은 무조건 노출
//         if (index === 0 || (index + 1) % 12 === 0) {
//           return (
//             <Line
//               key={index}
//               x1={(X_START + index * xGap)}
//               y1={X_TOP_PADDING}
//               x2={(X_START + index * xGap)}
//               y2={(Y_START)}
//               strokeDasharray="2"
//             />
//           )
//         }
//         return null
//       })}
//     </g>
//   )
// }

// function Graph({ year, retiermentPay }: { year: number; retiermentPay: number }) {
//   const xGap = (SVG_WIDTH - X_START + Y_LEFT_PADDING + Y_RIGHT_PADDING - X_END_ASIX) / ((year) * 12)
//   // const xGap = (SVG_WIDTH - X_START - Y_RIGHT_PADDING) / (year * 12)

//   // const xGap = (SVG_WIDTH - X_START - Y_RIGHT_PADDING) / (year * 12)
//   const dayIncome = retiermentPay / (year) / 12
//   const data = useMemo(() => {
//     // x축 데이터
//     return new Array(retiermentPay / 10).fill(0).map((_, index) => {
//       return {
//         date: index,
//         score: (index) * dayIncome // + (Math.floor(index / 12) * BONUS)
//       }
//     })
//   }, [dayIncome, retiermentPay])

//   console.log(data)

//   const yGap = (SVG_HEIGHT - X_TOP_PADDING - X_BOTTOM_PADDING - X_LABEL) / (data.length - 1) //(((year - 1) * 12) + 11)

//   return (
//     <>
//       {/* 점 */}
//       {/* <g>
//         {data.map(({ score }, index) => {
//           // 처음과 끝은 무조건 노출
//           if (index === 0 || dataLength - 1 === index) {
//             return null
//           }
//           return (
//             <Circle
//               key={index}
//               cx={X_START + xGap * index}
//               cy={Y_START - (((yGap / dayIncome) * score))}
//               r="3"
//             />
//           )
//         })}
//       </g> */}
//       {/* 선 */}
//       <Path
//         fill="none"
//         strokeWidth="1"
//         d={data.map(({ score }, index) => {
//           if (index === 0) {
//             return `M${X_START},${Y_START}`
//           }
//           return `L${X_START + xGap * index},${(Y_START) - (((yGap / dayIncome) * score))}`
//           // return `L${X_START + xGap * index},${Y_START - (((yGap / dayIncome) * 162.5))}`
//         }).join(' ')}
//       />
//     </>
//   )
// }

// type ScoreDataType = {
//   year: number;
//   retiermentPay: number;
// }
// export default function SuccessGraph({ year, retiermentPay }: ScoreDataType) {
//   return (
//     <SVG
//       height={SVG_HEIGHT}
//       viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
//     >
//       <XAsix
//         year={year}
//       />

//       <YAxis
//         year={year}
//         retiermentPay={retiermentPay} />

//       <GridRow
//         year={year}
//       />
//       <GridColumn
//         year={year}
//       />

//       <Graph
//         year={year}
//         retiermentPay={retiermentPay} />
//     </SVG>
//   )
// }

// const SVG = styled.svg`
// `

// const Line = styled.line<{ grid?: boolean }>`
//   stroke: ${({ theme, grid }) => (grid ? theme.border : theme.divider)};
// `
// const Text = styled.text`
//   font-size: 9px;
//   fill: ${({ theme }) => theme.color};
// `

// const Path = styled.path`
//   stroke: ${({ theme }) => theme.primary};
//   stroke-dasharray: 2000;
//   stroke-dashoffset: 2000;
//   animation: line-animation 3s forwards;
//   @keyframes line-animation {
//     0% {
//       stroke-dashoffset: 2000;
//     }
//     100% {
//       stroke-dashoffset: 0;
//     }
//   }
// `

// const Circle = styled.circle`
//   fill: ${({ theme }) => theme.primary};
//   opacity: 0;
//   animation: dot-animation 1s forwards;

//   @keyframes dot-animation {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `
