import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
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
  height: 600px;
`
// const data = [
//   {
//     name: 'Rail (Cat 1)',
//     data: [21],
//     color: '#A193FF'
//   },
//   {
//     name: 'Rail (Cat 2)',
//     data: [11],
//     color: '#FEA8A1'
//   },
//   {
//     name: 'Rail (Cat 3)',
//     data: [15],
//     color: '#62CFE5'
//   },
//   {
//     name: 'Court Medical',
//     data: [10],
//     color: '#FFBE70'
//   }
// ]
const data = [
  {
    name: 'Rail (Cat 1)',
    data: [24],
    color: '#A193FF'
  },
  {
    name: 'Rail (Cat 2)',
    data: [10],
    color: '#FEA8A1'
  },
  {
    name: 'Rail (Cat 3)',
    data: [25],
    color: '#62CFE5'
  },
  {
    name: 'Court Medical',
    data: [24],
    color: '#FFBE70'
  },
  {
    name: 'Driving Medical',
    data: [10],
    color: '#7B9CFF'
  },
  {
    name: 'Diving Medical',
    data: [25],
    color: '#8FD9A8'
  },
  {
    name: 'Incident Medical',
    data: [24],
    color: '#B39DFF'
  },
  {
    name: 'MRO',
    data: [10],
    color: '#62CFE5'
  },
  {
    name: 'MRO (12 mths)',
    data: [25],
    color: '#62B9FF'
  },
  {
    name: 'In House (Pre Em)',
    data: [24],
    color: '#FFD670'
  },
  {
    name: 'Lab (Pre Em)',
    data: [10],
    color: '#8FD9A8'
  },
  {
    name: 'Other',
    data: [25],
    color: '#7B9CFF'
  }
]
const xAxisData = ['']

const threChartMidData = [
  {
    name: 'series1',
    data: [11],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [20],
    color: '#62CFE5'
  },
  {
    name: 'series1',
    data: [11],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [20],
    color: '#62CFE5'
  },
  {
    name: 'series1',
    data: [11],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [20],
    color: '#62CFE5'
  },
  {
    name: 'series1',
    data: [11],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [20],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['', '', '', '', '', '', '', '', '', '', '', '']
// 左侧第一个图表：横向柱状图
const TestTypesChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

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
        itemGap: 20,
        textStyle: {
          fontSize: 12
        },
        data: [
          'Urine Drug Screen',
          'Oral Fluid Drug Screen',
          'Urine Drug Test',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen',
          'Breath Alcohol Screen'
        ]
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      xAxis: {
        type: 'value',
        max: 25,
        splitLine: { show: false, lineStyle: { type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [''],
        axisLine: { show: true },
        axisTick: { show: false },
        inverse: true
      },
      series: [
        {
          name: 'Urine Drug Screen',
          type: 'bar',
          // stack: 'total',
          data: [24],
          itemStyle: {
            color: '#A193FF'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Oral Fluid Drug Screen',
          type: 'bar',
          // stack: 'total',
          data: [24],
          itemStyle: {
            color: '#FEA8A1'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Urine Drug Test',
          type: 'bar',
          // stack: 'total',
          data: [10],
          itemStyle: {
            color: '#62CFE5'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        },
        {
          name: 'Breath Alcohol Screen',
          type: 'bar',
          // stack: 'total',
          data: [25],
          itemStyle: {
            color: '#FFBE70'
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        }
      ]
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
  }, [])

  return <ChartContainer ref={chartRef} />
}
// 定义图表数据类型
type ChartDataType = {
  name: string
  data: number[]
  color: string
}[]

// 定义图表配置类型
type ChartOptionsType = {
  leftChartData: ChartDataType
  rightChartData: ChartDataType
  rightChartXAxisData: string[]
}

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType): ChartOptionsType => {
  // 左侧图表数据
  let leftChartData = [...data]
  // 右侧图表数据
  let rightChartData = [...data]
  // 右侧图表X轴数据
  let rightChartXAxisData = [...xAxisData]

  switch (timeRange) {
    case 'today':
      leftChartData = [
        { name: 'Rail (Cat 1)', data: [18], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [8], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [20], color: '#62CFE5' },
        { name: 'Court Medical', data: [15], color: '#FFBE70' },
        { name: 'Driving Medical', data: [7], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [22], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [19], color: '#B39DFF' },
        { name: 'MRO', data: [6], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [21], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [17], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [9], color: '#8FD9A8' },
        { name: 'Other', data: [23], color: '#7B9CFF' }
      ]

      rightChartData = [
        { name: 'Rail (Cat 1)', data: [15], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [7], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [18], color: '#62CFE5' },
        { name: 'Court Medical', data: [12], color: '#FFBE70' },
        { name: 'Driving Medical', data: [5], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [20], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [16], color: '#B39DFF' },
        { name: 'MRO', data: [4], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [19], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [14], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [8], color: '#8FD9A8' },
        { name: 'Other', data: [21], color: '#7B9CFF' }
      ]

      rightChartXAxisData = ['']
      break

    case 'currentWeek':
      leftChartData = [
        { name: 'Rail (Cat 1)', data: [22], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [12], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [28], color: '#62CFE5' },
        { name: 'Court Medical', data: [19], color: '#FFBE70' },
        { name: 'Driving Medical', data: [11], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [26], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [23], color: '#B39DFF' },
        { name: 'MRO', data: [10], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [25], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [21], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [13], color: '#8FD9A8' },
        { name: 'Other', data: [27], color: '#7B9CFF' }
      ]

      rightChartData = [
        { name: 'Rail (Cat 1)', data: [21], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [11], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [26], color: '#62CFE5' },
        { name: 'Court Medical', data: [18], color: '#FFBE70' },
        { name: 'Driving Medical', data: [10], color: '#7B9CFF' },
        {
          name: 'Diving Medical',
          data: [25],
          color: '#8FD9A8'
        },
        {
          name: 'Incident Medical',
          data: [22],
          color: '#B39DFF'
        },
        { name: 'MRO', data: [9], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [24], color: '#62B9FF' },
        {
          name: 'In House (Pre Em)',
          data: [19],
          color: '#FFD670'
        },
        { name: 'Lab (Pre Em)', data: [12], color: '#8FD9A8' },
        { name: 'Other', data: [26], color: '#7B9CFF' }
      ]

      rightChartXAxisData = ['']
      break

    case 'currentMonth':
      leftChartData = [
        { name: 'Rail (Cat 1)', data: [25], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [15], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [32], color: '#62CFE5' },
        { name: 'Court Medical', data: [22], color: '#FFBE70' },
        { name: 'Driving Medical', data: [14], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [30], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [27], color: '#B39DFF' },
        { name: 'MRO', data: [13], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [29], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [24], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [16], color: '#8FD9A8' },
        { name: 'Other', data: [31], color: '#7B9CFF' }
      ]

      rightChartData = [
        { name: 'Rail (Cat 1)', data: [27], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [14], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [31], color: '#62CFE5' },
        { name: 'Court Medical', data: [21], color: '#FFBE70' },
        { name: 'Driving Medical', data: [13], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [29], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [26], color: '#B39DFF' },
        { name: 'MRO', data: [12], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [28], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [23], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [15], color: '#8FD9A8' },
        { name: 'Other', data: [30], color: '#7B9CFF' }
      ]

      rightChartXAxisData = ['']
      break

    case 'currentYear':
      leftChartData = [
        { name: 'Rail (Cat 1)', data: [30], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [20], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [38], color: '#62CFE5' },
        { name: 'Court Medical', data: [28], color: '#FFBE70' },
        { name: 'Driving Medical', data: [18], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [36], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [33], color: '#B39DFF' },
        { name: 'MRO', data: [17], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [35], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [29], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [19], color: '#8FD9A8' },
        { name: 'Other', data: [37], color: '#7B9CFF' }
      ]

      rightChartData = [
        { name: 'Rail (Cat 1)', data: [34], color: '#A193FF' },
        { name: 'Rail (Cat 2)', data: [24], color: '#FEA8A1' },
        { name: 'Rail (Cat 3)', data: [42], color: '#62CFE5' },
        { name: 'Court Medical', data: [32], color: '#FFBE70' },
        { name: 'Driving Medical', data: [22], color: '#7B9CFF' },
        { name: 'Diving Medical', data: [40], color: '#8FD9A8' },
        { name: 'Incident Medical', data: [37], color: '#B39DFF' },
        { name: 'MRO', data: [21], color: '#62CFE5' },
        { name: 'MRO (12 mths)', data: [9], color: '#62B9FF' },
        { name: 'In House (Pre Em)', data: [33], color: '#FFD670' },
        { name: 'Lab (Pre Em)', data: [23], color: '#8FD9A8' },
        { name: 'Other', data: [41], color: '#7B9CFF' }
      ]

      rightChartXAxisData = ['']
      break

    default:
      // 默认数据保持不变
      break
  }

  return { leftChartData, rightChartData, rightChartXAxisData }
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
// 修改TestTypesChart2组件，接收timeRange参数
export const TestTypesChart2: React.FC<TestTypesChart2Props> = ({
  timeRange,
  chartData
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 根据timeRange生成图表数据
    const { leftChartData } = generateChartData(timeRange)
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

export interface Props {
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
  const [rightChartData, setRightChartData] = useState(data)
  const [rightChartXAxisData, setRightChartXAxisData] = useState(xAxisData)

  useEffect(() => {
    // 根据timeRange更新图表数据
    // const { rightChartData, rightChartXAxisData } = generateChartData(timeRange)
    // setRightChartData(rightChartData)
    // setRightChartXAxisData(rightChartXAxisData)
  }, [timeRange])

  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            {/* <LeftContent1>
            </LeftContent1> */}
            <RightContent>
              <TestTypesChart2 timeRange={timeRange} chartData={tableData[0]} />
              {/* <BarEcharts
                direction="horizontal"
                data={data}
                xAxisData={xAxisData}
                isStack={false}
                barWidth={30}
                height="450px"
              /> */}
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <BarEcharts
          direction="horizontal"
          data={rightChartData}
          xAxisData={rightChartXAxisData}
          isStack={false}
          barWidth={30}
          height="450px"
        />
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Table)
