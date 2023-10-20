import styled from '@emotion/styled'
import { useMemo } from 'react'

// const BONUS = 100

// YGap 10개로 제한해두기
const SVG_WIDTH = 600
const SVG_HEIGHT = 400

const X_TOP_PADDING = 60
const X_BOTTOM_PADDING = 50
const Y_RIGHT_PADDING = 40
const Y_LEFT_PADDING = 70

const X_WIDTH = SVG_WIDTH - Y_LEFT_PADDING - Y_RIGHT_PADDING
const Y_HEIGHT = SVG_HEIGHT - X_BOTTOM_PADDING - X_TOP_PADDING

const X_START = Y_LEFT_PADDING
const Y_START = -X_BOTTOM_PADDING

const X_LABEL = -14
const Y_LABEL = 38

function XAsix({ year }: { year: number }) {
  const xAxisLength = year * 12
  const xGap = X_WIDTH / (xAxisLength - 1)

  // console.log(X_WIDTH)
  // console.log(xGap)
  // console.log(xGap * xAxisLength)

  return (
    <>
      {/* XAsix */}
      <Line
        x1={X_START}
        y1={Y_START}
        x2={SVG_WIDTH - Y_RIGHT_PADDING + 10}
        y2={Y_START}
        strokeDasharray="0"
      />
      {/* XAsix 텍스트 */}
      <g>
        {new Array(xAxisLength).fill(0).map((_, index) => {

          const label = index === 0 ? '시작' : `${(index + 1) / 12}년`
          // 처음과 끝은 무조건 노출
          if (index === 0 || (index + 1) % 12 === 0) {
            return (
              <Text
                key={index}
                x={(X_START + ((index) * xGap)) - (index === 0 ? 8 : 6)}
                y={Y_START - X_LABEL}
              >
                {label}
              </Text>
            )
          }
          return null
        })}
      </g>
    </>
  )
}

function YAxis({ retiermentPay }: { year: number; retiermentPay: number }) {
  const yAxisLength = retiermentPay / 10
  const yGap = Y_HEIGHT / yAxisLength

  // console.log(Y_HEIGHT)
  // console.log(yGap)
  // console.log(yGap * yAxisLength)

  return (
    <>
      {/* YAxis 텍스트 */}
      <g>
        <Text
          x={X_START - Y_LABEL}
          y={Y_START}
        >
          0 만원
        </Text>
        {new Array(yAxisLength).fill(0).map((_, index) => {
          return (
            <Text
              key={index}
              x={X_START - Y_LABEL}
              y={Y_START - (yGap * (index + 1)) - 4}
            >
              {(index + 1) * 10} 만원
            </Text>
          )
        })}
      </g>
    </>
  )
}

function GridRow({ retiermentPay }: { retiermentPay: number }) {
  const yAxisLength = retiermentPay / 10
  const yGap = Y_HEIGHT / yAxisLength

  // console.log(Y_HEIGHT)
  // console.log(yGap)
  // console.log(yGap * yAxisLength)

  return (
    <g>
      {new Array(yAxisLength).fill(0).map((_, index) => {
        return (
          <Line
            key={index}
            x1={X_START - 10}
            y1={Y_START - (yGap * (index + 1))}
            x2={SVG_WIDTH - Y_RIGHT_PADDING}
            y2={Y_START - (yGap * (index + 1))}
            strokeDasharray="0"
            grid
          />
        )
      })}
    </g>
  )
}

function GridColumn({ year }: { year: number }) {
  const xAxisLength = 11 + ((year - 1) * 12)
  const xGap = X_WIDTH / (xAxisLength - 1)

  // console.log(X_WIDTH)
  // console.log(xGap)
  // console.log(xGap * xAxisLength)

  return (
    <g>
      {new Array(xAxisLength).fill(0).map((_, index) => {
        // 처음과 끝은 무조건 노출
        if (index === 0 || (index + 1) % 12 === 0) {
          return (
            <Line
              key={index}
              x1={(X_START + index * xGap)}
              y1={Y_START}
              x2={(X_START + index * xGap)}
              y2={(-SVG_HEIGHT + X_TOP_PADDING - 6)}
              strokeDasharray="2"
            />
          )
        }
        return null
      })}
    </g>
  )
}

function Graph({ year, retiermentPay }: { year: number; retiermentPay: number }) {
  const xAxisLength = year * 12
  const xGap = Number(((X_WIDTH) / (xAxisLength - 1)).toFixed(2)) - 0.4

  // console.log(X_WIDTH)
  // console.log(xGap)
  // console.log(xGap * xAxisLength)

  const yAxisLength = retiermentPay / 10
  const yGap = Number(((SVG_HEIGHT) / (yAxisLength)).toFixed(2))

  // console.log(Y_HEIGHT)
  // console.log(yGap)
  // console.log(yGap * yAxisLength)

  const dayIncome = Number(((retiermentPay / (year * 12 * 30))).toFixed(2))
  const data = useMemo(() => {
    // x축 데이터
    return new Array(year * 12).fill(0).map((_, index) => {
      return {
        date: index,
        score: (index) * dayIncome // + (Math.floor(index / 12) * BONUS)
      }
    })
  }, [dayIncome, year])
  console.log(dayIncome)

  console.log(xGap)
  console.log(yGap)

  console.log(Y_START - (yGap * dayIncome))

  return (
    <>
      {/* 점 */}
      <g>
        {data.map((_, index) => {
          // 처음과 끝은 무조건 노출
          // if (index === 0 || dataLength - 1 === index) {
          //   return null
          // }
          return (
            <Circle
              key={index}
              cx={X_START + (xGap * index)}
              cy={Y_START - (yGap * dayIncome)}
              // cx={X_START + ((38.2 / 2) * index) + 2}
              // cy={Y_START - ((5.8 / 2) * score) + 3}
              // cx={X_START + (44.3 * index) + 1}
              // cy={Y_START - (5.8 * score) + 3}
              r="3"
            />
          )
        })}
      </g>
      {/* 선 */}
      {/* <Path
        fill="none"
        strokeWidth="1"
        d={data.map(({ score }, index) => {
          if (index === 0) {
            return `M${X_START},${Y_START}`
          }
          return `L
            ${X_START + (xGap * index)},
            ${(Y_START) - (((yGap / dayIncome) * score)) - yGap}
            `
          // return `L
          //   ${X_START + (xGap * 11)},
          //   ${(Y_START) - (((yGap / dayIncome) * score))}
          //   `
          // ${-(score * index)}
        }).join(' ')}
      /> */}
    </>
  )
}

type ScoreDataType = {
  year: number;
  retiermentPay: number;
}
export default function SuccessGraph({ year, retiermentPay }: ScoreDataType) {
  if (!retiermentPay){
    return null
  }
  return (
    <SVGBlock>
      <SVG
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`0 -${SVG_HEIGHT} ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        <XAsix
          year={year}
        />
        <YAxis
          year={year}
          retiermentPay={retiermentPay} />
        <GridRow
          retiermentPay={retiermentPay} />
        <GridColumn
          year={year}
        />

        <Graph
          year={year}
          retiermentPay={retiermentPay} />
      </SVG>
      <SVGX column={11 + ((year - 1) * 12)}>
        {new Array(11 + ((year - 1) * 12)).fill(0).map((_, index) => {
          return <div key={index}>{index + 1}</div>
        })}
      </SVGX>
    </SVGBlock>
  )
}

const SVG = styled.svg`
`

const SVGBlock = styled.div`
  position: relative;
  border: 2px solid blue;
  width: ${SVG_WIDTH}px;
  height: ${SVG_HEIGHT}px;
`
const SVGX = styled.div<{ column: number }>`
  width: ${X_WIDTH}px;
  height: ${Y_HEIGHT}px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  border: 2px solid #ff00001a;
  box-sizing: border-box;
  margin: ${X_TOP_PADDING}px ${Y_RIGHT_PADDING}px ${X_BOTTOM_PADDING}px ${Y_LEFT_PADDING}px;

  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};


  > div{
    background-color: #f5f5dc8c;
    border: 1px solid #ddd
  }
`

const Line = styled.line<{ grid?: boolean }>`
  stroke: ${({ theme, grid }) => (grid ? theme.border : theme.divider)};
`
const Text = styled.text`
  font-size: 9px;
  fill: ${({ theme }) => theme.color};
`

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

const Circle = styled.circle`
  fill: ${({ theme }) => theme.primary};
  opacity: 0;
  animation: dot-animation 1s forwards;

  @keyframes dot-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
