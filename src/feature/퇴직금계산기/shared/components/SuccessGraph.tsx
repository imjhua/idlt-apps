import styled from '@emotion/styled'
import { useMemo } from 'react'

// const BONUS = 100

const X_TICK = 12
const Y_TICK = 2

const SVG_WIDTH = X_TICK * 50
const SVG_HEIGHT = Y_TICK * 200

const TOP_PADDING = 60
const BOTTOM_PADDING = 50
const RIGHT_PADDING = 40
const LEFT_PADDING = 70

const X_WIDTH = SVG_WIDTH - (LEFT_PADDING + RIGHT_PADDING)
const Y_HEIGHT = SVG_HEIGHT - (TOP_PADDING + BOTTOM_PADDING)

const X_START = LEFT_PADDING
const Y_START = -BOTTOM_PADDING

const X_LABEL = -14
const Y_LABEL = 38

function XAsix({ year }: { year: number }) {
  const xAxisLength = X_TICK * year
  const xGap = X_WIDTH / (xAxisLength - 1)

  return (
    <>
      {/* XAsix */}
      <Line
        x1={X_START - 10}
        y1={Y_START}
        x2={SVG_WIDTH - RIGHT_PADDING + 10}
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
  const yAxisLength = Y_TICK
  const yGap = Y_HEIGHT / yAxisLength

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
              y={Y_START - (yGap * (index + 1)) - 2}
            >
              {(index + 1) * (retiermentPay / yAxisLength)} 만원
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

  return (
    <g>
      {new Array(yAxisLength).fill(0).map((_, index) => {
        return (
          <Line
            key={index}
            x1={X_START - 10}
            y1={Y_START - (yGap * (index + 1))}
            x2={SVG_WIDTH - RIGHT_PADDING}
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
  const xAxisLength = (X_TICK) + ((year - 1) * X_TICK)
  const xGap = X_WIDTH / (xAxisLength - 1)

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
              y2={(-SVG_HEIGHT + TOP_PADDING - 6)}
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
  const xAxisLength = X_TICK * year
  const xGap = X_WIDTH / (xAxisLength - 1)

  const yAxisLength = retiermentPay / 10
  const yGap = Y_HEIGHT / yAxisLength

  const dayIncome = retiermentPay / X_TICK
  const data = useMemo(() => {
    // x축 데이터
    return new Array(year * 12).fill(0).map((_, index) => {
      return {
        date: index,
        value: (index + 1) * dayIncome
      }
    })
  }, [dayIncome, year])

  return (
    <>
      {/* 점 */}
      <g>
        {data.map(({ date, value }) => {
          // 처음과 끝은 무조건 노출
          // if (index === 0 || dataLength - 1 === index) {
          //   return null
          // }
          return (
            <Circle
              key={date}
              cx={X_START + xGap * date}
              cy={Y_START - (((yGap * value) / 10) / year)}
              r="3"
            />
          )
        })}
      </g>
      {/* 선 */}
      <Path
        fill="none"
        strokeWidth="1"
        d={data.map(({ value }, date) => {
          if (date === 0) {
            return `M${X_START},${Y_START - (((yGap * value) / 10) / year)}`
          }
          return `L
            ${X_START + (xGap * date)},
            ${(Y_START) - (((yGap * value) / 10) / year)}
            `
        }).join(' ')}
      />
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
        /* x y width height */
        viewBox={`0 -${SVG_HEIGHT} ${SVG_WIDTH} ${SVG_HEIGHT}`}
        // viewBox={`0 0 ${SVG_WIDTH} -${SVG_HEIGHT}`}
      >
        <XAsix year={year} />
        <YAxis
          year={year}
          retiermentPay={retiermentPay} />
        <GridRow
          retiermentPay={retiermentPay} />
        <GridColumn year={year} />

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
  margin: ${TOP_PADDING}px ${RIGHT_PADDING}px ${BOTTOM_PADDING}px ${LEFT_PADDING}px;

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

const Path = styled.path`
  stroke: ${({ theme }) => theme.primary};
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: line-animation 3s forwards;
  @keyframes line-animation {
    0% {
      stroke-dashoffset: 2000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`

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
