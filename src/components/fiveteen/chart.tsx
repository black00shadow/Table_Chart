import React, { memo, useRef, useEffect, useState } from 'react'
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
  flex-direction: column;
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
const data = [
  {
    name: '',
    data: [21],
    color: '#A193FF'
  },
  {
    name: '',
    data: [11],
    color: '#FEA8A1'
  },
  {
    name: '',
    data: [15],
    color: '#62CFE5'
  },
  {
    name: '',
    data: [10],
    color: '#FFBE70'
  }
]
const xAxisData = ['']

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
    data: [12, 10, 7],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['2017', '2018', '2019']

const ChartContainer = styled.div`
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 260px;
`

// 定义图表数据类型
type ChartDataType = {
  name: string
  data: number[]
  color: string
}[]

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType) => {
  // 左侧图表数据 - 用于TestTypesChart
  let testTypesData = [
    {
      name: 'Urine Drug Screen',
      data: [24],
      color: '#A193FF'
    },
    {
      name: 'Oral Fluid Drug Screen',
      data: [24],
      color: '#FEA8A1'
    },
    {
      name: 'Urine Drug Test',
      data: [10],
      color: '#62CFE5'
    },
    {
      name: 'Breath Alcohol Screen',
      data: [25],
      color: '#FFBE70'
    }
  ]

  // 左侧图表数据 - 用于TestTypesChart2
  let testTypes2Data = [
    {
      name: 'Urine Drug Screen',
      data: [20],
      color: '#A193FF'
    },
    {
      name: 'Oral Fluid Drug Screen',
      data: [18],
      color: '#FEA8A1'
    },
    {
      name: 'Urine Drug Test',
      data: [15],
      color: '#62CFE5'
    },
    {
      name: 'Breath Alcohol Screen',
      data: [22],
      color: '#FFBE70'
    }
  ]

  // 中间区域图表数据
  let midChartData = [...threChartMidData]
  let midChartXAxisData = [...xAxisThreChartMidData]

  switch (timeRange) {
    case 'today':
      testTypesData = [
        {
          name: 'Urine Drug Screen',
          data: [18],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [16],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [8],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [20],
          color: '#FFBE70'
        }
      ]

      testTypes2Data = [
        {
          name: 'Urine Drug Screen',
          data: [15],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [12],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [10],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [17],
          color: '#FFBE70'
        }
      ]

      midChartData = [
        {
          name: 'series1',
          data: [8, 7, 3],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [10, 6, 2],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [12, 8, 4],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Morning', 'Noon', 'Evening']
      break

    case 'currentWeek':
      testTypesData = [
        {
          name: 'Urine Drug Screen',
          data: [22],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [20],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [12],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [24],
          color: '#FFBE70'
        }
      ]

      testTypes2Data = [
        {
          name: 'Urine Drug Screen',
          data: [19],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [16],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [14],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [21],
          color: '#FFBE70'
        }
      ]

      midChartData = [
        {
          name: 'series1',
          data: [12, 10, 6],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [14, 9, 5],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [16, 11, 7],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Mon', 'Wed', 'Fri']
      break

    case 'currentMonth':
      testTypesData = [
        {
          name: 'Urine Drug Screen',
          data: [28],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [26],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [16],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [30],
          color: '#FFBE70'
        }
      ]

      testTypes2Data = [
        {
          name: 'Urine Drug Screen',
          data: [25],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [22],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [19],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [27],
          color: '#FFBE70'
        }
      ]

      midChartData = [
        {
          name: 'series1',
          data: [16, 14, 10],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [18, 13, 9],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [20, 15, 11],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Week 1', 'Week 2', 'Week 4']
      break

    case 'currentYear':
      testTypesData = [
        {
          name: 'Urine Drug Screen',
          data: [32],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [30],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [20],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [35],
          color: '#FFBE70'
        }
      ]

      testTypes2Data = [
        {
          name: 'Urine Drug Screen',
          data: [29],
          color: '#A193FF'
        },
        {
          name: 'Oral Fluid Drug Screen',
          data: [26],
          color: '#FEA8A1'
        },
        {
          name: 'Urine Drug Test',
          data: [23],
          color: '#62CFE5'
        },
        {
          name: 'Breath Alcohol Screen',
          data: [32],
          color: '#FFBE70'
        }
      ]

      midChartData = [
        {
          name: 'series1',
          data: [20, 18, 14],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [22, 17, 13],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [24, 19, 15],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Q1', 'Q2', 'Q4']
      break

    default:
      // 默认数据保持不变
      break
  }

  return {
    testTypesData,
    testTypes2Data,
    midChartData,
    midChartXAxisData
  }
}

// 修改TestTypesChart组件，接收timeRange参数
const TestTypesChart: React.FC<{ timeRange: TimeRangeType }> = ({
  timeRange
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 根据timeRange生成图表数据
    const { testTypesData } = generateChartData(timeRange)

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
        data: testTypesData.map((item) => item.name)
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      xAxis: {
        type: 'value',
        max: 35,
        splitLine: { show: false, lineStyle: { type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [''],
        axisLine: { show: true },
        axisTick: { show: false },
        inverse: true
      },
      series: testTypesData.map((item) => ({
        name: item.name,
        type: 'bar',
        data: item.data,
        itemStyle: {
          color: item.color
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}'
        }
      }))
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

// 修改TestTypesChart2组件，接收timeRange参数
const TestTypesChart2: React.FC<{ timeRange: TimeRangeType }> = ({
  timeRange
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 根据timeRange生成图表数据
    const { testTypes2Data } = generateChartData(timeRange)

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
        data: testTypes2Data.map((item) => item.name)
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      xAxis: {
        type: 'value',
        max: 35,
        splitLine: { show: false, lineStyle: { type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [''],
        axisLine: { show: true },
        axisTick: { show: false },
        inverse: true
      },
      series: testTypes2Data.map((item) => ({
        name: item.name,
        type: 'bar',
        data: item.data,
        itemStyle: {
          color: item.color
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}'
        }
      }))
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
  tableCenterData: {
    name: string
    data: number[]
  }[][]
}
const Table: React.FC<Props> = ({ timeRange, tableData, tableCenterData }) => {
  // // 使用useState管理图表数据
  // const [midChartData, setMidChartData] = useState(threChartMidData)
  // const [midChartXAxisData, setMidChartXAxisData] = useState(
  //   xAxisThreChartMidData
  // )

  // useEffect(() => {
  //   // 根据timeRange更新图表数据
  //   const {
  //     midChartData: newMidChartData,
  //     midChartXAxisData: newMidChartXAxisData
  //   } = generateChartData(timeRange)

  //   setMidChartData(newMidChartData)
  //   setMidChartXAxisData(newMidChartXAxisData)
  //   console.log('timeRange', timeRange)
  // }, [timeRange])

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'Result Reports',
      dataName: [],
      series: []
    },
    {
      content: 'Attendance Cert.',
      dataName: [],
      series: []
    }
  ]

  const _tableCenterData: {
    name: string
    data: number[]
  }[][] = []
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

  tableCenterData.forEach((item, index) => {
    _tableCenterData[index] = item
  })

  const xAxisData = [
    [
      'Rapid (Negative)',
      'Saliva (Negative)',
      'Breath (Negative)',
      'Breath (Negative)'
    ],
    ['Male', 'Female', 'Other']
  ]

  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          {_tableData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    <Arrow content={item.content} backgroundColor="#176CC9" />
                    {tableData[idx].map((it) => {
                      if (it.time === timeRange) {
                        return it.info.map((i) => {
                          return (
                            <>
                              <Arrow content={i.name} key={i.name} />
                            </>
                          )
                        })
                      } else {
                        return <></>
                      }
                    })}
                  </LeftContent1>
                  <RightContent>
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={20}
                      height="200px"
                    />
                  </RightContent>
                </MainCcontent>
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {_tableCenterData.map((item, idx) => {
          return (
            <>
              <BarEcharts
                direction="vertical"
                data={item}
                xAxisData={xAxisData[idx]}
                isStack={false}
                barWidth={20}
                height="300px"
                legend={true}
              />
            </>
          )
        })}
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Table)
