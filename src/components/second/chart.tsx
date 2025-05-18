import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
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

const ChartContainer = styled.div`
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 260px;
`
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

export interface SecondViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
}

export interface Props {
  timeRange: TimeRangeType
  chartData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[]
}
// 左侧第一个图表：横向柱状图
const TestTypesChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // 根据timeRange动态设置yAxis数据
    let yAxisData = ['Tests']

    switch (timeRange) {
      case 'today':
        yAxisData = ["Today's Tests"]
        break
      case 'currentWeek':
        yAxisData = ["This Week's Tests"]
        break
      case 'currentMonth':
        yAxisData = ["This Month's Tests"]
        break
      case 'currentYear':
        yAxisData = ["This Year's Tests"]
        break
      default:
        yAxisData = ['Tests']
    }
    const dataName: string[] = []
    const series: any[] = []
    chartData.forEach((item, idx) => {
      if (timeRange === item.time) {
        item.info.forEach((it, idx) => {
          dataName.push(it.name)
          series.push({
            name: it.name,
            type: 'bar',
            // stack: 'total',
            data: it.data,
            // itemStyle: {
            //   color: '#A193FF'
            // },
            label: {
              show: true,
              position: 'right',
              formatter: '{c}'
            }
          })
        })
      }
    })
    const chart = echarts.init(chartRef.current)
    const option = {
      grid: {
        left: '3%',
        right: '34%', // 增加右侧空间以容纳图例
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        itemWidth: 10,
        itemHeight: 10,
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
        // max: 25,
        splitLine: { show: false, lineStyle: { type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: yAxisData,
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
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

// 左侧第二个图表：堆叠横向柱状图
const ObservedChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!chartRef.current) return
    let data1 = [20]
    let data2 = [20]
    let yAxis = 'today'
    if (timeRange === 'today') {
      data1 = [10]
      data2 = [30]
      yAxis = 'today'
    } else if (timeRange === 'currentWeek') {
      data1 = [3]
      data2 = [9]
      yAxis = 'currentWeek'
    } else if (timeRange === 'currentMonth') {
      data1 = [6]
      data2 = [8]
      yAxis = 'currentMonth'
    } else if (timeRange === 'currentYear') {
      data1 = [7]
      data2 = [6]
      yAxis = 'currentYear'
    }
    const dataName: string[] = []
    const series: any[] = []
    chartData.forEach((item, idx) => {
      if (timeRange === item.time) {
        item.info.forEach((it, idx) => {
          dataName.push(it.name)
          series.push({
            name: it.name,
            type: 'bar',
            stack: 'total',
            data: it.data,
            barWidth: '30%'
            // itemStyle: { color: '#A193FF' }
          })
        })
      }
    })
    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '34%', // 增加右侧空间以容纳图例
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 12
        },
        data: dataName
      },
      // legend: {
      //   data: ['Observed', 'Witnessed']
      // },
      // grid: {
      //   left: '3%',
      //   right: '4%',
      //   bottom: '3%',
      //   containLabel: true
      // },
      xAxis: {
        type: 'value',
        splitLine: { show: false }
      },
      yAxis: {
        type: 'category',
        data: [yAxis]
      },
      series: series
    }
    chart.setOption(option)

    return () => chart.dispose()
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

// 左侧第三个图表：饼图
const TypeDistributionChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    let data1 = [20]
    let data2 = [10]
    let data3 = [40]
    if (timeRange === 'today') {
      data1 = [10]
      data2 = [30]
      data3 = [60]
    } else if (timeRange === 'currentWeek') {
      data1 = [3]
      data2 = [9]
      data3 = [18]
    } else if (timeRange === 'currentMonth') {
      data1 = [6]
      data2 = [8]
      data3 = [14]
    } else if (timeRange === 'currentYear') {
      data1 = [7]
      data2 = [6]
      data3 = [13]
    }
    const dataName: string[] = []
    const series: any[] = []
    chartData.forEach((item, idx) => {
      if (timeRange === item.time) {
        item.info.forEach((it, idx) => {
          dataName.push(it.name)
          series.push({
            name: it.name,
            value: it.data
          })
        })
      }
    })
    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: '10%',
        top: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['38%', '70%'],
          center: ['30%', '50%'],
          data: series,
          label: {
            show: false
          }
        }
      ]
    }
    chart.setOption(option)

    return () => chart.dispose()
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

// 右侧第一个图表：堆叠横向柱状图
const MonthlyStatsChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    let data1 = [2400, 2300, 3000, 2200]
    let data2 = [3000, 2900, 2800, 3000]
    let data3 = [1200, 1100, 1000, 3000]
    let data4 = [1400, 1600, 1070, 3080]

    // 根据timeRange动态设置yAxis数据
    let yAxisData = ['JAN', 'FEB', 'MAR']

    switch (timeRange) {
      case 'today':
        data1 = data2
        data2 = data3
        data3 = data4
        data4 = data1
        yAxisData = ['Morning', 'Noon', 'Afternoon']
        break
      case 'currentWeek':
        data1 = data3
        data2 = data1
        data3 = data2
        data4 = data3
        yAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        break
      case 'currentMonth':
        data1 = data4
        data2 = data3
        data3 = data4
        data4 = data1
        yAxisData = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        break
      case 'currentYear':
        data1 = data3
        data2 = data1
        data3 = data2
        data4 = data3
        yAxisData = ['Q1', 'Q2', 'Q3', 'Q4']
        break
    }

    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      // legend: {
      //   data: ['Negative', 'Non Negative', 'Invalid', 'Sent to Lab', 'Refusal']
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        splitLine: { show: false }
      },
      yAxis: {
        type: 'category',
        data: yAxisData
      },
      series: [
        {
          name: 'Negative',
          type: 'bar',
          stack: 'total',
          data: data1,
          itemStyle: { color: '#A193FF' }
        },
        {
          name: 'Non Negative',
          type: 'bar',
          stack: 'total',
          data: data2,
          itemStyle: { color: '#FEA8A1' }
        },
        {
          name: 'Invalid',
          type: 'bar',
          stack: 'total',
          data: data3,
          itemStyle: { color: '#62CFE5' }
        },
        {
          name: 'Sent to Lab',
          type: 'bar',
          stack: 'total',
          data: data4,
          itemStyle: { color: '#FFBE70' }
        }
      ]
    }
    chart.setOption(option)

    return () => chart.dispose()
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

// 右侧第二个图表：横向柱状图
const ObservedMonthlyChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    let data1 = [20, 30, 40]
    let data2 = [10, 20, 30]

    // 根据timeRange动态设置yAxis数据
    let yAxisData = ['JAN', 'FEB', 'MAR']

    switch (timeRange) {
      case 'today':
        data1 = [10, 30, 40]
        data2 = [30, 10, 20]
        yAxisData = ['Morning', 'Noon', 'Afternoon']
        break
      case 'currentWeek':
        data1 = [3, 9, 18, 12, 15]
        data2 = [9, 3, 6, 8, 10]
        yAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        break
      case 'currentMonth':
        data1 = [6, 8, 14, 10]
        data2 = [8, 6, 7, 9]
        yAxisData = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        break
      case 'currentYear':
        data1 = [7, 6, 13, 9]
        data2 = [6, 7, 6, 8]
        yAxisData = ['Q1', 'Q2', 'Q3', 'Q4']
        break
    }

    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        splitLine: { show: false }
      },
      yAxis: {
        type: 'category',
        data: yAxisData
      },
      series: [
        {
          type: 'bar',
          data: data1,
          itemStyle: { color: '#A193FF' }
        },
        {
          type: 'bar',
          data: data2,
          itemStyle: { color: '#FEA8A1' }
        }
      ]
    }
    chart.setOption(option)

    return () => chart.dispose()
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

// 右侧第三个图表：横向柱状图
const RenewalChart: React.FC<Props> = ({ timeRange, chartData }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    let data1 = [20, 30, 40]
    let data2 = [10, 20, 30]
    let data3 = [1, 20, 3]

    // 根据timeRange动态设置yAxis数据
    let yAxisData = ['JAN', 'FEB', 'MAR']

    switch (timeRange) {
      case 'today':
        data1 = [10, 30, 40]
        data2 = [30, 10, 20]
        data3 = [1, 20, 3]
        yAxisData = ['Morning', 'Noon', 'Afternoon']
        break
      case 'currentWeek':
        data1 = [3, 9, 18, 12, 15]
        data2 = [9, 3, 6, 8, 10]
        data3 = [1, 20, 3, 5, 7]
        yAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        break
      case 'currentMonth':
        data1 = [6, 8, 14, 10]
        data2 = [8, 6, 7, 9]
        data3 = [1, 20, 3, 15]
        yAxisData = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        break
      case 'currentYear':
        data1 = [7, 6, 13, 9]
        data2 = [6, 7, 6, 8]
        data3 = [1, 20, 3, 12]
        yAxisData = ['Q1', 'Q2', 'Q3', 'Q4']
        break
    }

    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        splitLine: { show: false }
      },
      yAxis: {
        type: 'category',
        data: yAxisData
      },
      series: [
        {
          type: 'bar',
          data: data1,
          itemStyle: { color: '#A193FF' }
        },
        {
          type: 'bar',
          data: data2,
          itemStyle: { color: '#FEA8A1' }
        },
        {
          type: 'bar',
          data: data3,
          itemStyle: { color: '#62CFE5' }
        }
      ]
    }
    chart.setOption(option)

    return () => chart.dispose()
  }, [timeRange])

  return <ChartContainer ref={chartRef} />
}

const SecondView: React.FC<SecondViewProps> = ({ timeRange, tableData }) => {
  useEffect(() => {
    console.log('timeRange', timeRange) // 这里根据timeRange生成对应的x轴数据
    // const xAxisData = generateXAxisData(timeRange)
    // 更新图表逻辑...
  }, [timeRange])
  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          <TestTypesChart timeRange={timeRange} chartData={tableData[0]} />
          <ObservedChart timeRange={timeRange} chartData={tableData[1]} />
          <TypeDistributionChart
            timeRange={timeRange}
            chartData={tableData[2]}
          />
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <MonthlyStatsChart timeRange={timeRange} chartData={tableData[3]} />
        <ObservedMonthlyChart timeRange={timeRange} chartData={tableData[4]} />
        <RenewalChart timeRange={timeRange} chartData={tableData[5]} />
      </MiddleContent>
    </ContentRable>
  )
}

export default SecondView
