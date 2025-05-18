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
    data: [18, 10, 7],
    color: '#62CFE5'
  }
]

const threChartMidData3 = [
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
    data: [18, 10, 7],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['2017', '2018', '2019']

const xAxisThreChartMidData3 = ['2017', '2018', '2019']

const ChartContainer = styled.div`
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 260px;
`
// 左侧第一个图表：横向柱状图
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
        top: '10%',
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

  // 中间图表数据
  let midChartData = [...threChartMidData]
  let midChartData3 = [...threChartMidData3]
  let midChartXAxisData = [...xAxisThreChartMidData]
  let midChartXAxisData3 = [...xAxisThreChartMidData3]

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

      midChartData3 = [
        {
          name: 'series1',
          data: [7, 6, 2],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [9, 5, 1],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [11, 7, 3],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Morning', 'Noon', 'Evening']
      midChartXAxisData3 = ['Morning', 'Noon', 'Evening']
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

      midChartData3 = [
        {
          name: 'series1',
          data: [13, 9, 5],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [15, 8, 4],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [17, 10, 6],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Mon', 'Wed', 'Fri']
      midChartXAxisData3 = ['Mon', 'Wed', 'Fri']
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

      midChartData3 = [
        {
          name: 'series1',
          data: [17, 13, 9],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [19, 12, 8],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [21, 14, 10],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Week 1', 'Week 2', 'Week 4']
      midChartXAxisData3 = ['Week 1', 'Week 2', 'Week 4']
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

      midChartData3 = [
        {
          name: 'series1',
          data: [21, 17, 13],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [23, 16, 12],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [25, 18, 14],
          color: '#62CFE5'
        }
      ]

      midChartXAxisData = ['Q1', 'Q2', 'Q4']
      midChartXAxisData3 = ['Q1', 'Q2', 'Q4']
      break

    default:
      // 默认数据保持不变
      break
  }

  return {
    testTypesData,
    midChartData,
    midChartData3,
    midChartXAxisData,
    midChartXAxisData3
  }
}

const Table: React.FC<Props> = ({ timeRange, tableData, tableCenterData }) => {
  // // 使用useState管理图表数据
  // const [midChartData, setMidChartData] = useState(threChartMidData)
  // const [midChartData3, setMidChartData3] = useState(threChartMidData3)
  // const [midChartXAxisData, setMidChartXAxisData] = useState(
  //   xAxisThreChartMidData
  // )
  // const [midChartXAxisData3, setMidChartXAxisData3] = useState(
  //   xAxisThreChartMidData3
  // )

  // useEffect(() => {
  //   // 根据timeRange更新图表数据
  //   const {
  //     midChartData: newMidChartData,
  //     midChartData3: newMidChartData3,
  //     midChartXAxisData: newMidChartXAxisData,
  //     midChartXAxisData3: newMidChartXAxisData3
  //   } = generateChartData(timeRange)

  //   setMidChartData(newMidChartData)
  //   setMidChartData3(newMidChartData3)
  //   setMidChartXAxisData(newMidChartXAxisData)
  //   setMidChartXAxisData3(newMidChartXAxisData3)
  //   console.log('timeRange', timeRange)
  // }, [timeRange])

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'Sex',
      dataName: [],
      series: []
    },
    {
      content: 'Medication',
      dataName: [],
      series: []
    },
    {
      content: 'Attendance',
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
    ['Male', 'Female', 'Other'],
    ['Male', 'Female', 'Other'],
    ['Presenteo', 'No Shows', 'Rescheduled', 'Cancelled']
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
                      barWidth={30}
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
