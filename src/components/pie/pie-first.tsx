import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as echarts from 'echarts'

const ChartContainer = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || '300px'};
  // padding: 16px;
`

interface PieData {
  name: string
  data: number[]
  color?: string
}

interface PieProps {
  data: PieData[]
  height?: string
  colors?: string[]
  radius?: [string, string]
  centerText?: string
  showPercentage?: boolean
  legendPosition?: 'top' | 'bottom' | 'left' | 'right'
}

const PieChart: React.FC<PieProps> = ({
  data,
  height = '300px',
  colors = ['#A193FF', '#FEA8A1', '#62CFE5', '#FFBE70', '#66C2A5'],
  radius = ['38%', '70%'],
  centerText,
  showPercentage = false,
  legendPosition = 'right'
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts>()
  let sum = 0
  useEffect(() => {
    if (!chartRef.current) return

    chartInstance.current = echarts.init(chartRef.current)

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: showPercentage ? '{b}: {d}%' : '{b}: {c}'
      },
      legend: {
        orient:
          legendPosition === 'left' || legendPosition === 'right'
            ? 'vertical'
            : 'horizontal',
        [legendPosition]:
          legendPosition === 'left' || legendPosition === 'right'
            ? '10%'
            : 'auto',
        top:
          legendPosition === 'top'
            ? '5%'
            : legendPosition === 'bottom'
            ? 'auto'
            : 'middle'
      },
      series: [
        {
          type: 'pie',
          radius: radius,
          center: ['50%', '50%'],
          data: data.map((item, index) => {
            sum += item.data[0]
            return {
              name: item.name,
              value: item.data[0],
              itemStyle: {
                color: item.color || colors[index % colors.length]
              }
            }
          }),
          label: {
            show: true,
            formatter: showPercentage ? '{d}%' : '{b}: {c}'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      graphic: centerText
        ? [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: sum.toString(),
                fontSize: 16,
                fontWeight: 'bold',
                align: 'center',
                fill: '#333'
              }
            }
          ]
        : undefined
    }

    chartInstance.current.setOption(option)

    return () => {
      chartInstance.current?.dispose()
    }
  }, [data, colors, radius, centerText, showPercentage, legendPosition])

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

export default PieChart
