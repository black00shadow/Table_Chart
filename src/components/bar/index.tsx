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

interface BarData {
  name: string
  data: number[]
  color?: string
}

interface BarProps {
  direction?: 'horizontal' | 'vertical'
  data: BarData[]
  xAxisData?: string[]
  height?: string
  barWidth?: number
  isStack?: boolean
  showLabel?: boolean
  colors?: string[]
  max?: number
  showGrid?: boolean
  legend?: boolean
}

const Bar: React.FC<BarProps> = ({
  direction = 'horizontal',
  data,
  xAxisData,
  height = '300px',
  barWidth = 20,
  isStack = false,
  showLabel = true,
  colors = ['#A193FF', '#FEA8A1', '#62CFE5', '#FFBE70', '#66C2A5'],
  max,
  showGrid = false,
  legend = false
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts>()

  useEffect(() => {
    if (!chartRef.current) return

    chartInstance.current = echarts.init(chartRef.current)

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        bottom: '1%',
        show: legend
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis:
        direction === 'horizontal'
          ? {
              type: 'value',
              max,
              splitLine: { show: showGrid, lineStyle: { type: 'dashed' } }
            }
          : {
              type: 'category',
              data: xAxisData,
              axisLine: { show: true },
              axisTick: { show: false }
            },
      yAxis:
        direction === 'horizontal'
          ? {
              type: 'category',
              // data: xAxisData,
              axisLine: { show: true },
              axisTick: { show: false },
              axisLabel: {
                fontSize: 12,
                color: '#333'
              }
            }
          : {
              type: 'value',
              max,
              splitLine: { show: showGrid, lineStyle: { type: 'dashed' } }
            },
      series: data.map((item, index) => ({
        name: item.name,
        type: 'bar',
        stack: isStack ? 'total' : undefined,
        barWidth: barWidth,
        data: item.data,
        label: {
          show: showLabel,
          position: direction === 'horizontal' ? 'right' : 'top',
          formatter: '{c}',
          fontSize: 12,
          color: '#333'
        },
        itemStyle: {
          color: item.color || colors[index % colors.length]
        }
      }))
    }

    chartInstance.current.setOption(option)

    return () => {
      chartInstance.current?.dispose()
    }
  }, [
    direction,
    data,
    xAxisData,
    barWidth,
    isStack,
    showLabel,
    colors,
    max,
    showGrid
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

export default Bar
