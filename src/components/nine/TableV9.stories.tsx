/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell as RechartsCell } from 'recharts'
import { within, userEvent, expect } from '@storybook/test'

const meta: Meta<any> = {
  title: 'Dashboard/Table09',
  parameters: {
    order: 9,
    chromatic: { disableSnapshot: true },
    playtest: {
      enabled: true,
      autoplay: true
    }
  }
}

export default meta
type Story = StoryObj<any>

interface TableData {
  category: string
  samples: {
    name: string
    today: number
    week: number
    month: number
    year: number
  }[]
}

const mockData: TableData[] = [
  {
    category: 'Negative',
    samples: [
      {
        name: 'Sample 1',
        today: 10,
        week: 45,
        month: 120,
        year: 2790
      },
      {
        name: 'Sample 2',
        today: 25,
        week: 45,
        month: 230,
        year: 3800
      }
    ]
  },
  {
    category: 'Non Negative',
    samples: [
      {
        name: 'Sample 1',
        today: 10,
        week: 45,
        month: 120,
        year: 2790
      },
      {
        name: 'Sample 2',
        today: 25,
        week: 45,
        month: 230,
        year: 3800
      }
    ]
  },
  {
    category: 'Refusal',
    samples: [
      {
        name: 'Sample 1',
        today: 10,
        week: 45,
        month: 120,
        year: 2790
      },
      {
        name: 'Sample 2',
        today: 25,
        week: 45,
        month: 230,
        year: 3800
      }
    ]
  }
]

export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')

    // 转换数据为图表格式
    const getChartData = (period: 'today' | 'week' | 'month' | 'year') => {
      const result: any[] = []
      mockData.forEach(category => {
        category.samples.forEach(sample => {
          result.push({
            name: `${category.category} - ${sample.name}`,
            value: sample[period]
          })
        })
      })
      return result
    }

    return (
      <Container>
        <Header>
          <Title>📊 Breath Alcohol Test Results</Title>
          <Controls>
            <ViewToggleContainer>
              <ViewToggleButton 
                active={activeView === 'data'} 
                onClick={() => setActiveView('data')}
                data-testid="data-view-btn"
                data-active={activeView === 'data'}
              >
                Data View
              </ViewToggleButton>
              <ViewToggleButton 
                active={activeView === 'chart'} 
                onClick={() => setActiveView('chart')}
                data-testid="chart-view-btn"
                data-active={activeView === 'chart'}
              >
                Chart View
              </ViewToggleButton>
            </ViewToggleContainer>
          </Controls>
        </Header>

        {activeView === 'data' && (
          <TableContainer data-testid="table-container">
            <HeaderRow>
              <Cell style={{ width: '200px' }}>Results</Cell>
              <Cell>Today</Cell>
              <Cell>Current Week</Cell>
              <Cell>Current Month</Cell>
              <Cell>Current Year</Cell>
            </HeaderRow>
            
            {mockData.map((category, categoryIndex) => (
              <CategorySection key={categoryIndex}>
                <CategoryRow>
                  <Cell style={{ width: '200px', background: '#1e90ff', color: 'white' }}>
                    {category.category}
                  </Cell>
                </CategoryRow>
                
                {category.samples.map((sample, sampleIndex) => (
                  <DataRow key={sampleIndex}>
                    <Cell style={{ width: '200px', background: '#e6f3ff' }}>{sample.name}</Cell>
                    <Cell>{sample.today}</Cell>
                    <Cell>{sample.week}</Cell>
                    <Cell>{sample.month}</Cell>
                    <Cell>{sample.year}</Cell>
                  </DataRow>
                ))}
                
                <TotalRow>
                  <Cell style={{ width: '200px', background: '#e6f3ff' }}>Total</Cell>
                  <Cell>
                    {category.samples.reduce((sum, sample) => sum + sample.today, 0)}
                  </Cell>
                  <Cell>
                    {category.samples.reduce((sum, sample) => sum + sample.week, 0)}
                  </Cell>
                  <Cell>
                    {category.samples.reduce((sum, sample) => sum + sample.month, 0)}
                  </Cell>
                  <Cell>
                    {category.samples.reduce((sum, sample) => sum + sample.year, 0)}
                  </Cell>
                </TotalRow>
              </CategorySection>
            ))}
          </TableContainer>
        )}

        {activeView === 'chart' && (
          <ChartGrid data-testid="chart-grid">
            {['today', 'week', 'month', 'year'].map((period) => (
              <ChartBox key={period}>
                <ChartTitle>
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </ChartTitle>
                <BarChart width={500} height={300} data={getChartData(period as any)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    name={`${period.charAt(0).toUpperCase() + period.slice(1)} Count`}
                  >
                    {getChartData(period as any).map((entry, index) => (
                      <RechartsCell
                        key={`cell-${index}`}
                        fill={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'][index % 5]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartBox>
            ))}
          </ChartGrid>
        )}
      </Container>
    )
  }
}

export const InteractionTest: Story = {
  ...Primary,
  parameters: {
    chromatic: { disableSnapshot: false },
    playtest: {
      enabled: true,
      autoplay: true
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 1. 测试初始状态是数据视图
    const dataViewBtn = await canvas.findByTestId('data-view-btn')
    expect(dataViewBtn).toHaveAttribute('data-active', 'true')

    // 2. 测试切换到图表视图
    const chartViewBtn = await canvas.findByTestId('chart-view-btn')
    await userEvent.click(chartViewBtn)
    // 等待1秒
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 验证图表视图是否显示
    const chartContainer = await canvas.findByTestId('chart-grid')
    expect(chartContainer).toBeInTheDocument()
    expect(chartViewBtn).toHaveAttribute('data-active', 'true')

    // 3. 测试切换回数据视图
    await userEvent.click(dataViewBtn)
    // 等待1秒
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 验证数据视图是否显示
    const tableContainer = await canvas.findByTestId('table-container')
    expect(tableContainer).toBeInTheDocument()
    expect(dataViewBtn).toHaveAttribute('data-active', 'true')
  }
}

const Container = styled.div`
  padding: 20px;
  background: #f6f9fc;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e90ff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`

const Title = styled.h2`
  color: white;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ViewToggleContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`

const ViewToggleButton = styled.button<{ active: boolean }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#1e90ff' : 'white'};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  }
`

const TableContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  padding: 20px;
`

const ChartBox = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ChartTitle = styled.h3`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

const CategorySection = styled.div`
  margin-bottom: 1px;
`

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  
  &:last-child {
    border-bottom: none;
  }
`

const HeaderRow = styled(Row)`
  background: #f8f9fa;
  font-weight: bold;
`

const CategoryRow = styled(Row)`
  font-weight: bold;
`

const DataRow = styled(Row)`
  &:hover {
    background: #f8f9fa;
  }
`

const TotalRow = styled(Row)`
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`

const Cell = styled.div`
  padding: 12px 16px;
  flex: 1;
  display: flex;
  align-items: center;
  border-right: 1px solid #ddd;
  
  &:last-child {
    border-right: none;
  }
`
