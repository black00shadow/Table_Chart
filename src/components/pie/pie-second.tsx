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

interface PolarData {
  name: string
  data: number[]
  color?: string
}

interface PolarBarProps {
  data: PolarData[]
  height?: string
  colors?: string[]
  startAngle?: number
  endAngle?: number
  radius?: [string, string]
  showLabel?: boolean
}

const PolarBarChart: React.FC<PolarBarProps> = ({
  data,
  height = '300px',
  colors = ['#A193FF', '#FEA8A1', '#62CFE5', '#FFBE70', '#66C2A5'],
  startAngle = 90,
  endAngle = -270,
  radius = ['30%', '75%'],
  showLabel = true
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts>()

  useEffect(() => {
    if (!chartRef.current) return

    chartInstance.current = echarts.init(chartRef.current)

    const option: echarts.EChartsOption = {
      angleAxis: {
        // type: 'value',
        startAngle: startAngle,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#E5E7EB'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 12,
          color: '#333'
        }
      },
      radiusAxis: {
        type: 'category',
        data: data.map((item) => item.name),
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#E5E7EB'
          }
        }
      },
      polar: {
        radius: radius
      },
      tooltip: {
        show: true,
        formatter: '{b}: {c}'
      },
      series: [
        {
          type: 'bar',
          data: data.map((item, index) => ({
            value: item.data[0],
            itemStyle: {
              color: item.color || colors[index % colors.length]
            }
          })),
          coordinateSystem: 'polar',
          // roundCap: true,
          label: {
            show: showLabel,
            position: 'middle',
            formatter: '{c}',
            fontSize: 12,
            color: '#333'
          }
        }
      ]
    }

    chartInstance.current.setOption(option)

    return () => {
      chartInstance.current?.dispose()
    }
  }, [data, colors, startAngle, endAngle, radius, showLabel])

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

export default PolarBarChart
