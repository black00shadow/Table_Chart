import React, { memo, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
import PieEcharts from '../pie/pie-first'
import LineChart from '../line-chart'
import PolarBarChart from '../pie/pie-second'
import * as echarts from 'echarts'

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

const ChartContainer = styled.div`
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  // padding: 20px;
  height: 450px;
`

// 定义图表数据类型
type BarChartDataType = {
  name: string
  data: number[]
  color: string
}[]

type LineChartDataType = {
  name: string
  data: number[]
  color: string
  smooth?: boolean
  symbolSize?: number
}[]

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType) => {
  // 柱状图数据
  let barData = [
    { name: 'Collector Name 1', data: [25], color: '#A193FF' },
    { name: 'Collector Name 2', data: [29], color: '#A193FF' },
    { name: 'Collector Name 3', data: [30], color: '#A193FF' },
    { name: 'Collector Name 4', data: [35], color: '#A193FF' },
    { name: 'Collector Name 5', data: [32], color: '#A193FF' },
    { name: 'Collector Name 6', data: [25], color: '#A193FF' },
    { name: 'Collector Name 7', data: [31], color: '#A193FF' },
    { name: 'Collector Name 8', data: [36], color: '#A193FF' }
  ]

  // 折线图数据
  let lineData = [
    {
      name: 'Collector Name 1',
      data: [1, 2, 7],
      color: '#A193FF',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 2',
      data: [3, 3, 3],
      color: '#FEA8A1',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 3',
      data: [5, 1, 5],
      color: '#62CFE5',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 4',
      data: [8, 4, 2],
      color: '#FFBE70',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 5',
      data: [6, 8, 1],
      color: '#66C2A5',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 6',
      data: [2, 6, 4],
      color: '#8B5CF6',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 7',
      data: [4, 5, 6],
      color: '#EC4899',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 8',
      data: [7, 7, 8],
      color: '#06B6D4',
      smooth: true,
      symbolSize: 10
    }
  ]

  // 折线图X轴数据
  let xAxisData = ['2017', '2018', '2019']

  switch (timeRange) {
    case 'today':
      barData = [
        { name: 'Collector Name 1', data: [18], color: '#A193FF' },
        { name: 'Collector Name 2', data: [22], color: '#A193FF' },
        { name: 'Collector Name 3', data: [24], color: '#A193FF' },
        { name: 'Collector Name 4', data: [28], color: '#A193FF' },
        { name: 'Collector Name 5', data: [26], color: '#A193FF' },
        { name: 'Collector Name 6', data: [19], color: '#A193FF' },
        { name: 'Collector Name 7', data: [23], color: '#A193FF' },
        { name: 'Collector Name 8', data: [27], color: '#A193FF' }
      ]

      lineData = [
        {
          name: 'Morning',
          data: [2, 4, 6],
          color: '#A193FF',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Noon',
          data: [4, 2, 5],
          color: '#FEA8A1',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Afternoon',
          data: [3, 5, 4],
          color: '#62CFE5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 4',
          data: [6, 3, 1],
          color: '#FFBE70',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 5',
          data: [5, 6, 2],
          color: '#66C2A5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 6',
          data: [1, 5, 3],
          color: '#8B5CF6',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 7',
          data: [3, 4, 5],
          color: '#EC4899',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 8',
          data: [5, 6, 7],
          color: '#06B6D4',
          smooth: true,
          symbolSize: 10
        }
      ]

      xAxisData = ['Morning', 'Noon', 'Afternoon']
      break

    case 'currentWeek':
      barData = [
        { name: 'Collector Name 1', data: [22], color: '#A193FF' },
        { name: 'Collector Name 2', data: [26], color: '#A193FF' },
        { name: 'Collector Name 3', data: [28], color: '#A193FF' },
        { name: 'Collector Name 4', data: [32], color: '#A193FF' },
        { name: 'Collector Name 5', data: [30], color: '#A193FF' },
        { name: 'Collector Name 6', data: [23], color: '#A193FF' },
        { name: 'Collector Name 7', data: [27], color: '#A193FF' },
        { name: 'Collector Name 8', data: [31], color: '#A193FF' }
      ]

      lineData = [
        {
          name: 'Mon',
          data: [3, 5, 7],
          color: '#A193FF',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Tue',
          data: [5, 3, 6],
          color: '#FEA8A1',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Wed',
          data: [4, 6, 5],
          color: '#62CFE5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Thu',
          data: [7, 4, 2],
          color: '#FFBE70',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Fri',
          data: [6, 7, 3],
          color: '#66C2A5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 6',
          data: [2, 6, 4],
          color: '#8B5CF6',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 7',
          data: [4, 5, 6],
          color: '#EC4899',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 8',
          data: [6, 7, 8],
          color: '#06B6D4',
          smooth: true,
          symbolSize: 10
        }
      ]

      xAxisData = ['Mon', 'Wed', 'Fri']
      break

    case 'currentMonth':
      barData = [
        { name: 'Collector Name 1', data: [28], color: '#A193FF' },
        { name: 'Collector Name 2', data: [32], color: '#A193FF' },
        { name: 'Collector Name 3', data: [34], color: '#A193FF' },
        { name: 'Collector Name 4', data: [38], color: '#A193FF' },
        { name: 'Collector Name 5', data: [36], color: '#A193FF' },
        { name: 'Collector Name 6', data: [29], color: '#A193FF' },
        { name: 'Collector Name 7', data: [33], color: '#A193FF' },
        { name: 'Collector Name 8', data: [37], color: '#A193FF' }
      ]

      lineData = [
        {
          name: 'Week 1',
          data: [4, 6, 8],
          color: '#A193FF',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Week 2',
          data: [6, 4, 7],
          color: '#FEA8A1',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Week 3',
          data: [5, 7, 6],
          color: '#62CFE5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Week 4',
          data: [8, 5, 3],
          color: '#FFBE70',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 5',
          data: [7, 8, 4],
          color: '#66C2A5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 6',
          data: [3, 7, 5],
          color: '#8B5CF6',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 7',
          data: [5, 6, 7],
          color: '#EC4899',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 8',
          data: [7, 8, 9],
          color: '#06B6D4',
          smooth: true,
          symbolSize: 10
        }
      ]

      xAxisData = ['Week 1', 'Week 2', 'Week 4']
      break

    case 'currentYear':
      barData = [
        { name: 'Collector Name 1', data: [35], color: '#A193FF' },
        { name: 'Collector Name 2', data: [39], color: '#A193FF' },
        { name: 'Collector Name 3', data: [40], color: '#A193FF' },
        { name: 'Collector Name 4', data: [45], color: '#A193FF' },
        { name: 'Collector Name 5', data: [42], color: '#A193FF' },
        { name: 'Collector Name 6', data: [36], color: '#A193FF' },
        { name: 'Collector Name 7', data: [41], color: '#A193FF' },
        { name: 'Collector Name 8', data: [44], color: '#A193FF' }
      ]

      lineData = [
        {
          name: 'Q1',
          data: [5, 7, 9],
          color: '#A193FF',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Q2',
          data: [7, 5, 8],
          color: '#FEA8A1',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Q3',
          data: [6, 8, 7],
          color: '#62CFE5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Q4',
          data: [9, 6, 4],
          color: '#FFBE70',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 5',
          data: [8, 9, 5],
          color: '#66C2A5',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 6',
          data: [4, 8, 6],
          color: '#8B5CF6',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 7',
          data: [6, 7, 8],
          color: '#EC4899',
          smooth: true,
          symbolSize: 10
        },
        {
          name: 'Collector Name 8',
          data: [8, 9, 10],
          color: '#06B6D4',
          smooth: true,
          symbolSize: 10
        }
      ]

      xAxisData = ['Q1', 'Q2', 'Q4']
      break

    default:
      // 默认数据保持不变
      break
  }

  return { barData, lineData, xAxisData }
}

export interface TestTypesChart2Props {
  timeRange: TimeRangeType
  chartData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[]
}

const TestTypesChart2: React.FC<TestTypesChart2Props> = ({
  timeRange,
  chartData
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 根据timeRange生成图表数据
    // const { leftChartData } = generateChartData(timeRange)
    const dataName: string[] = []
    const series: any[] = []
    chartData.forEach((item, idx) => {
      if (timeRange === item.time) {
        item.info.forEach((it, idx) => {
          dataName.push(it.name)
          series.push({
            name: it.name,
            type: 'bar',
            data: it.data,
            // itemStyle: {
            //   color: item.color
            // },
            label: {
              show: true,
              position: 'right',
              formatter: '{c}'
            },
            barWidth: 30
          })
        })
      }
    })
    const chart = echarts.init(chartRef.current)
    const option = {
      grid: {
        left: '30%',
        right: '3%', // 增加右侧空间以容纳图例
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: 10,
        top: 'center',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 25,
        textStyle: {
          fontSize: 12
        },
        data: dataName
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      xAxis: {
        type: 'value',
        // max: 40, // 根据数据动态调整
        splitLine: { show: false, lineStyle: { type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [''],
        axisLine: { show: true },
        axisTick: { show: false },
        inverse: true
      },
      series: series
    }
    chart.setOption(option)

    // 添加窗口大小变化的监听器
    const handleResize = () => {
      chart.resize()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      chart.dispose()
      window.removeEventListener('resize', handleResize)
    }
  }, [timeRange]) // 添加timeRange作为依赖项

  return <ChartContainer ref={chartRef} />
}

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
const Table: React.FC<Props> = ({ timeRange, tableData }) => {
  // 使用useState管理图表数据
  const [barData, setBarData] = useState<BarChartDataType>([
    { name: 'Collector Name 1', data: [25], color: '#A193FF' },
    { name: 'Collector Name 2', data: [29], color: '#A193FF' },
    { name: 'Collector Name 3', data: [30], color: '#A193FF' },
    { name: 'Collector Name 4', data: [35], color: '#A193FF' },
    { name: 'Collector Name 5', data: [32], color: '#A193FF' },
    { name: 'Collector Name 6', data: [25], color: '#A193FF' },
    { name: 'Collector Name 7', data: [31], color: '#A193FF' },
    { name: 'Collector Name 8', data: [36], color: '#A193FF' }
  ])

  const [lineData, setLineData] = useState<LineChartDataType>([
    {
      name: 'Collector Name 1',
      data: [1, 2, 7],
      color: '#A193FF',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 2',
      data: [3, 3, 3],
      color: '#FEA8A1',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 3',
      data: [5, 1, 5],
      color: '#62CFE5',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 4',
      data: [8, 4, 2],
      color: '#FFBE70',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 5',
      data: [6, 8, 1],
      color: '#66C2A5',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 6',
      data: [2, 6, 4],
      color: '#8B5CF6',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 7',
      data: [4, 5, 6],
      color: '#EC4899',
      smooth: true,
      symbolSize: 10
    },
    {
      name: 'Collector Name 8',
      data: [7, 7, 8],
      color: '#06B6D4',
      smooth: true,
      symbolSize: 10
    }
  ])

  const [xAxisData, setXAxisData] = useState<string[]>(['2017', '2018', '2019'])

  useEffect(() => {
    // 根据timeRange更新图表数据
    const {
      barData: newBarData,
      lineData: newLineData,
      xAxisData: newXAxisData
    } = generateChartData(timeRange)
    setBarData(newBarData)
    setLineData(newLineData)
    setXAxisData(newXAxisData)
    console.log('timeRange', timeRange)
  }, [timeRange])

  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            <RightContent>
              <TestTypesChart2 timeRange={timeRange} chartData={tableData[0]} />
              {/* <BarEcharts
                direction="horizontal"
                data={barData}
                xAxisData={barData.map((item) => item.name)}
                isStack={false}
                barWidth={40}
                height="350px"
                showLabel={true}
                max={50}
                showGrid={true}
              /> */}
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <LineChart
          data={lineData}
          xAxisData={xAxisData}
          height="600px"
          showSymbol={true}
          yAxisMax={10}
          yAxisMin={0}
          yAxisInterval={1}
          smooth={true}
          legend={{
            show: true,
            right: 30,
            orient: 'vertical'
          }}
          showGrid={true}
          labelShow={true}
        />
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Table)
