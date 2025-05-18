import React, { memo, useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
import PieEcharts from '../pie/pie-first'
import LineChart from '../line-chart'
import PolarBarChart from '../pie/pie-second'
const ContentRable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 11px 0;s
  margin-bottom: 20px;
  width: 100%;
  // heiht: 600px;
  height: 100%;
`
const LeftContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
  width: 38%;
  height: 100%;
`
const MiddleContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 62%;
  // flex: 1;
  // padding-top: 32px;
`
const TableWrapper = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 0 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  padding: 10px 0 0 10px;
  flex-direction: column;
`

const LeftContent1 = styled.div`
  width: 25%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  flex-wrap: wrap;
`

const RightContent = styled.div`
  // height: 100%;
  // padding: 16px;
  // width: 65%;
  flex: 1;
`
const data = [
  { name: 'Collector Name 1', data: [25], color: '#A193FF' },
  { name: 'Collector Name 2', data: [29], color: '#A193FF' },
  { name: 'Collector Name 3', data: [30], color: '#A193FF' },
  { name: 'Collector Name 4', data: [35], color: '#A193FF' },
  { name: 'Collector Name 5', data: [32], color: '#A193FF' },
  { name: 'Collector Name 6', data: [25], color: '#A193FF' },
  { name: 'Collector Name 7', data: [31], color: '#A193FF' },
  { name: 'Collector Name 8', data: [36], color: '#A193FF' }
]

const polarData = [
  { name: 'Minimum', value: 15, color: '#A193FF' },
  { name: 'Average', value: 20, color: '#FEA8A1' },
  { name: 'Maximum', value: 38, color: '#62CFE5' }
]

const threChartMidData = [
  {
    name: 'series1',
    data: [11, 10, 5],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15, 10, 5],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [2, 10, 7],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['2017', '2018', '2019']

// 定义图表数据类型
type ChartDataType = {
  name: string
  data: number[]
  color: string
}[]

type PolarDataType = {
  name: string
  value: number
  color: string
}[]

type LineDataType = {
  name: string
  data: number[]
  color: string
  smooth?: boolean
}[]

// 将pieData中的中文替换为英文
const pieData = [
  { name: 'Category 1', value: 40, color: '#8B5CF6' },
  { name: 'Category 2', value: 30, color: '#EC4899' },
  { name: 'Category 3', value: 30, color: '#06B6D4' }
]

const lineData = [
  {
    name: 'series1',
    data: [10, 20, 30],
    color: '#8B5CF6'
  },
  {
    name: 'series2',
    data: [15, 25, 35],
    color: '#EC4899'
  },
  {
    name: 'series3',
    data: [15, 25, 35],
    color: '#62CFE5'
  }
]

const lineXAxisData = ['2017', '2018', '2019']
// 将PolarData中的中文替换为英文
const PolarData = [
  { name: 'Category 1', value: 40, color: '#8B5CF6' },
  { name: 'Category 2', value: 30, color: '#EC4899' },
  { name: 'Category 3', value: 30, color: '#06B6D4' }
]

const lowerLineData = [
  {
    name: '2017',
    data: [1200, 2300],
    color: '#A193FF',
    smooth: true
  },
  {
    name: '2018',
    data: [1400, 100],
    color: '#FEA8A1',
    smooth: true
  },
  {
    name: '2019',
    data: [1700, 2900],
    color: '#62CFE5',
    smooth: true
  }
]

const lowerLineXAxisData = ['Maximum', 'Minimum', 'Average']
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

interface Props {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
}

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType) => {
  // 柱状图数据
  let barData = [...data]
  // 极坐标图数据
  let polarChartData = [...polarData]
  // 折线图数据
  let lineChartData = [...lowerLineData]
  // 折线图X轴数据
  let lineXAxis = [...lowerLineXAxisData]

  switch (timeRange) {
    case 'today':
      barData = [
        { name: 'Collector Name 1', data: [18], color: '#A193FF' },
        { name: 'Collector Name 2', data: [22], color: '#A193FF' },
        { name: 'Collector Name 3', data: [25], color: '#A193FF' },
        { name: 'Collector Name 4', data: [28], color: '#A193FF' },
        { name: 'Collector Name 5', data: [24], color: '#A193FF' },
        { name: 'Collector Name 6', data: [19], color: '#A193FF' },
        { name: 'Collector Name 7', data: [26], color: '#A193FF' },
        { name: 'Collector Name 8', data: [30], color: '#A193FF' }
      ]

      polarChartData = [
        { name: 'Minimum', value: 12, color: '#A193FF' },
        { name: 'Average', value: 18, color: '#FEA8A1' },
        { name: 'Maximum', value: 30, color: '#62CFE5' }
      ]

      lineChartData = [
        {
          name: 'Morning',
          data: [800, 1500],
          color: '#A193FF',
          smooth: true
        },
        {
          name: 'Noon',
          data: [1200, 900],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: 'Afternoon',
          data: [1400, 2100],
          color: '#62CFE5',
          smooth: true
        }
      ]

      lineXAxis = ['Maximum', 'Minimum', 'Average']
      break

    case 'currentWeek':
      barData = [
        { name: 'Collector Name 1', data: [22], color: '#A193FF' },
        { name: 'Collector Name 2', data: [26], color: '#A193FF' },
        { name: 'Collector Name 3', data: [28], color: '#A193FF' },
        { name: 'Collector Name 4', data: [32], color: '#A193FF' },
        { name: 'Collector Name 5', data: [29], color: '#A193FF' },
        { name: 'Collector Name 6', data: [23], color: '#A193FF' },
        { name: 'Collector Name 7', data: [27], color: '#A193FF' },
        { name: 'Collector Name 8', data: [33], color: '#A193FF' }
      ]

      polarChartData = [
        { name: 'Minimum', value: 18, color: '#A193FF' },
        { name: 'Average', value: 25, color: '#FEA8A1' },
        { name: 'Maximum', value: 33, color: '#62CFE5' }
      ]

      lineChartData = [
        {
          name: 'Mon',
          data: [1000, 1800],
          color: '#A193FF',
          smooth: true
        },
        {
          name: 'Wed',
          data: [1300, 1100],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: 'Fri',
          data: [1600, 2400],
          color: '#62CFE5',
          smooth: true
        }
      ]

      lineXAxis = ['Maximum', 'Minimum', 'Average']
      break

    case 'currentMonth':
      barData = [
        { name: 'Collector Name 1', data: [28], color: '#A193FF' },
        { name: 'Collector Name 2', data: [32], color: '#A193FF' },
        { name: 'Collector Name 3', data: [33], color: '#A193FF' },
        { name: 'Collector Name 4', data: [38], color: '#A193FF' },
        { name: 'Collector Name 5', data: [35], color: '#A193FF' },
        { name: 'Collector Name 6', data: [29], color: '#A193FF' },
        { name: 'Collector Name 7', data: [34], color: '#A193FF' },
        { name: 'Collector Name 8', data: [39], color: '#A193FF' }
      ]

      polarChartData = [
        { name: 'Minimum', value: 22, color: '#A193FF' },
        { name: 'Average', value: 30, color: '#FEA8A1' },
        { name: 'Maximum', value: 39, color: '#62CFE5' }
      ]

      lineChartData = [
        {
          name: 'Week 1',
          data: [1400, 2200],
          color: '#A193FF',
          smooth: true
        },
        {
          name: 'Week 2',
          data: [1600, 1400],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: 'Week 4',
          data: [1900, 2700],
          color: '#62CFE5',
          smooth: true
        }
      ]

      lineXAxis = ['Maximum', 'Minimum', 'Average']
      break

    case 'currentYear':
      barData = [
        { name: 'Collector Name 1', data: [35], color: '#A193FF' },
        { name: 'Collector Name 2', data: [38], color: '#A193FF' },
        { name: 'Collector Name 3', data: [40], color: '#A193FF' },
        { name: 'Collector Name 4', data: [45], color: '#A193FF' },
        { name: 'Collector Name 5', data: [42], color: '#A193FF' },
        { name: 'Collector Name 6', data: [36], color: '#A193FF' },
        { name: 'Collector Name 7', data: [41], color: '#A193FF' },
        { name: 'Collector Name 8', data: [46], color: '#A193FF' }
      ]

      polarChartData = [
        { name: 'Minimum', value: 28, color: '#A193FF' },
        { name: 'Average', value: 40, color: '#FEA8A1' },
        { name: 'Maximum', value: 46, color: '#62CFE5' }
      ]

      lineChartData = [
        {
          name: 'Q1',
          data: [2000, 2800, 2500],
          color: '#A193FF',
          smooth: true
        },
        {
          name: 'Q2',
          data: [2200, 1800, 2000],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: 'Q4',
          data: [2500, 3200, 2800],
          color: '#62CFE5',
          smooth: true
        }
      ]

      lineXAxis = ['Maximum', 'Minimum', 'Average']
      break

    default:
      // 默认数据保持不变
      break
  }

  return { barData, polarChartData, lineChartData, lineXAxis }
}

const Table: React.FC<Props> = ({ timeRange, tableData }) => {
  // 使用useState管理图表数据
  const [barData, setBarData] = useState(data)
  const [polarChartData, setPolarChartData] = useState(polarData)
  const [lineChartData, setLineChartData] = useState(lowerLineData)
  const [lineXAxis, setLineXAxis] = useState(lowerLineXAxisData)

  useEffect(() => {
    // 根据timeRange更新图表数据
    const { barData, polarChartData, lineChartData, lineXAxis } =
      generateChartData(timeRange)
    setBarData(barData)
    setPolarChartData(polarChartData)
    setLineChartData(lineChartData)
    setLineXAxis(lineXAxis)
    console.log('timeRange', timeRange)
  }, [timeRange])

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'Negative',
      dataName: [],
      series: []
    },
    {
      content: 'Synthetic',
      dataName: [],
      series: []
    }
  ]

  tableData.forEach((item, index) => {
    item.forEach((it, id) => {
      if (timeRange === it.time) {
        it.info.forEach((i, idx) => {
          _tableData[index].dataName.push(i.name)
          _tableData[index].series.push({
            name: i.name,
            data: i.data
          })
        })
      }
    })
  })

  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            <RightContent>
              <PolarBarChart
                data={_tableData[0].series}
                height="350px"
                startAngle={90}
                endAngle={-270}
                radius={['30%', '80%']}
                showLabel={true}
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Collectors" backgroundColor="#176CC9" />
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={_tableData[1].series}
                xAxisData={_tableData[1].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <LineChart
          data={lineChartData}
          xAxisData={lineXAxis}
          height="300px"
          showSymbol={true}
          yAxisMax={3000}
          yAxisMin={0}
          yAxisInterval={600}
          smooth={true}
          legend={{
            show: true,
            right: 30,
            bottom: 0
          }}
        />
        <LineChart
          data={lineChartData}
          xAxisData={lineXAxis}
          height="500px"
          showSymbol={true}
          yAxisMax={6800}
          yAxisMin={0}
          yAxisInterval={1700}
          smooth={true}
          legend={{
            show: true,
            right: 30,
            bottom: 0
          }}
        />
        {/* <LineChart
          data={lineData}
          xAxisData={lineXAxisData}
          height="400px"
          showSymbol={true}
        />
        <LineChart
          data={lineData}
          xAxisData={lineXAxisData}
          height="400px"
          showSymbol={true}
        /> */}
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Table)
