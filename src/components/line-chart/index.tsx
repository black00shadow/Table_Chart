import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as echarts from 'echarts'

const ChartContainer = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || '300px'};
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  // padding: 16px;
`

interface LineData {
  name: string
  data: number[]
  color?: string
  smooth?: boolean
  symbolSize?: number
}

interface LineProps {
  data: LineData[]
  xAxisData: string[]
  height?: string
  showSymbol?: boolean
  colors?: string[]
  yAxisMax?: number
  yAxisMin?: number
  yAxisInterval?: number
  smooth?: boolean
  legend?: {
    show?: boolean
    bottom?: number | string
    right?: number | string
    orient?: 'horizontal' | 'vertical'
  }
  showGrid?: boolean
  labelShow?: boolean
}

const LineChart: React.FC<LineProps> = ({
  data,
  xAxisData,
  height = '300px',
  showSymbol = true,
  colors = ['#A193FF', '#FEA8A1', '#62CFE5', '#FFBE70', '#66C2A5'],
  yAxisMax,
  yAxisMin,
  yAxisInterval,
  smooth = false,
  legend,
  showGrid = false,
  labelShow = false
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts>()

  useEffect(() => {
    if (!chartRef.current) return

    chartInstance.current = echarts.init(chartRef.current)

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: legend?.show !== undefined ? legend.show : true,
        bottom: legend?.bottom,
        right: legend?.right,
        orient: legend?.orient,
        top: 'center',
        itemWidth: 10,
        itemHeight: 15
      },
      grid: {
        left: '3%',
        right: '25%',
        bottom: '10%',
        top: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLine: {
          lineStyle: {
            color: '#E5E7EB'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: showGrid,
          lineStyle: {
            type: 'dashed',
            color: '#E5E7EB'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: yAxisMax,
        min: yAxisMin,
        interval: yAxisInterval,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: showGrid,
          lineStyle: {
            type: 'dashed',
            color: '#E5E7EB'
          }
        }
      },
      series: data.map((item, index) => ({
        name: item.name,
        type: 'line',
        data: item.data,
        smooth: item.smooth !== undefined ? item.smooth : smooth,
        symbol: showSymbol ? 'circle' : 'none',
        symbolSize: item.symbolSize || 6,
        itemStyle: {
          color: item.color || colors[index % colors.length]
        },
        lineStyle: {
          width: 2
        },
        label: {
          show: labelShow,
          position: 'top',
          formatter: '{c}',
          fontSize: 12,
          color: '#333'
        }
      }))
    }

    chartInstance.current.setOption(option)

    return () => {
      chartInstance.current?.dispose()
    }
  }, [
    data,
    xAxisData,
    showSymbol,
    colors,
    yAxisMax,
    yAxisMin,
    yAxisInterval,
    smooth,
    legend,
    showGrid,
    labelShow
  ])

  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      chartInstance.current?.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <ChartContainer ref={chartRef} height={height} />
}

export default LineChart
