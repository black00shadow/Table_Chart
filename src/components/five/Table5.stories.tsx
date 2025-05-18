import React, { useState } from 'react'
import TableV5 from './index'
import tableDataJson from './table.json'
import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell as RechartsCell } from 'recharts'
import { within, userEvent, expect } from '@storybook/test'

// 定义主题颜色
const theme = {
  primary: 'rgb(30, 144, 255)',
  primaryLight: 'rgba(30, 144, 255, 0.1)',
  white: '#ffffff',
  border: '#e0e0e0',
  background: '#f6f9fc',
  text: '#333333'
}

const meta: Meta<typeof TableV5> = {
  title: 'Dashboard/Table05',
  component: TableV5,
  parameters: {
    order: 5
  }
}

export default meta
type Story = StoryObj<typeof TableV5>

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')
    const tableData = tableDataJson.tableData as any

    return (
      <Container>
        <Header>
          <Title>🏥 Test Categories</Title>
          <Controls>
            <ViewToggleContainer>
              <ViewToggleButton 
                active={activeView === 'data'} 
                onClick={() => setActiveView('data')}
                data-testid="data-view-btn"
              >
                Data View
              </ViewToggleButton>
              <ViewToggleButton 
                active={activeView === 'chart'} 
                onClick={() => setActiveView('chart')}
                data-testid="chart-view-btn"
              >
                Chart View
              </ViewToggleButton>
            </ViewToggleContainer>
            <div>
              <label style={{ marginRight: '12px', color: 'white' }}>Location</label>
              <select 
                style={{ padding: '6px 10px', borderRadius: '4px' }}
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                data-testid="location-select"
              >
                <option value="All">All</option>
                <option value="Sydney">Sydney</option>
                <option value="Melbourne">Melbourne</option>
              </select>
            </div>
          </Controls>
        </Header>

        {activeView === 'data' && (
          <div style={{ width: '40%' }}>
            <Row style={{}}>
              <div style={{ width: '40%' }}></div>
              <Row
                style={{
                  gap: '8px',
                  width: '60%',
                  justifyContent: 'space-evenly'
                }}
              >
                {['Today', 'Week', 'Month', 'Year'].map((title) => (
                  <Button style={{ width: '15%' }} key={title}>
                    {title}
                  </Button>
                ))}
              </Row>
            </Row>
            {tableData.map((row: any, index: number) => (
              <Row key={index} style={{ margin: '8px auto', gap: '8px' }}>
                <Button style={{ width: '40%' }}>{row.name}</Button>
                <Row style={{ gap: '8px', width: '60%' }}>
                  {row.data.map((col: any, index: number) => (
                    <Cell
                      style={{ width: '20%' }}
                      key={'col' + index}
                      value={col}
                    />
                  ))}
                </Row>
              </Row>
            ))}
          </div>
        )}

        {activeView === 'chart' && (
          <ChartGrid>
            {['Today', 'Week', 'Month', 'Year'].map((period, index) => {
              // 根据时间周期转换数据
              const chartData = tableData.map((item: { name: string; data: number[] }) => ({
                name: item.name,
                value: item.data[index]
              }))

              return (
                <ChartBox key={period}>
                  <ChartTitle>{period}</ChartTitle>
                  <BarChart width={500} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="value"
                      name={period}
                      fill="#8884d8"
                      isAnimationActive={false}
                    >
                      {chartData.map((entry: { name: string; value: number }, idx: number) => {
                        // 使用特殊的颜色系统区分不同服务类型
                        const serviceType = entry.name.toLowerCase()
                        let color = '#8884d8'
                        let opacity = 1

                        if (serviceType.includes('rail')) {
                          color = '#4A90E2'
                          opacity = entry.name.includes('Express') ? 1 : 0.7
                        } else if (serviceType.includes('emergency')) {
                          color = '#FF6B6B'
                        } else if (serviceType.includes('clinic')) {
                          color = '#50C878'
                        } else if (serviceType.includes('specialist')) {
                          color = '#FFB347'
                        } else if (serviceType.includes('pathology')) {
                          color = '#9B59B6'
                        }

                        return (
                          <RechartsCell 
                            key={`cell-${idx}`} 
                            fill={color}
                            fillOpacity={opacity}
                          />
                        )
                      })}
                    </Bar>
                  </BarChart>
                </ChartBox>
              )
            })}
          </ChartGrid>
        )}
      </Container>
    )
  }
}

// 交互测试
export const InteractionTest: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 1. 测试视图切换
    const chartViewBtn = await canvas.findByTestId('chart-view-btn')
    await userEvent.click(chartViewBtn)

    // 等待图表视图加载
    await new Promise(resolve => setTimeout(resolve, 500))

    // 2. 测试位置选择
    const locationSelect = await canvas.findByTestId('location-select')
    await userEvent.selectOptions(locationSelect, 'Sydney')
    
    // 等待位置选择生效
    await new Promise(resolve => setTimeout(resolve, 300))
    expect(locationSelect).toHaveValue('Sydney')

    // 3. 切换回数据视图
    const dataViewBtn = await canvas.findByTestId('data-view-btn')
    await userEvent.click(dataViewBtn)
    
    // 等待数据视图加载
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}

// 样式组件
const Container = styled.div`
  padding: 20px;
  background: ${theme.background};
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.primary};
  color: ${theme.white};
  padding: 12px 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

const ViewToggleContainer = styled.div`
  display: flex;
  gap: 8px;
`

const ViewToggleButton = styled.button<{ active: boolean }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: ${props => props.active ? theme.white : 'transparent'};
  color: ${props => props.active ? theme.primary : theme.white};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.active ? theme.white : theme.primaryLight};
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  padding: 8px;
  background: ${theme.primary};
  color: ${theme.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${theme.primary}dd;
  }
`

const Cell = styled.input`
  padding: 8px;
  border: 1px solid ${theme.border};
  border-radius: 4px;
  text-align: center;
`

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 20px;
`

const ChartBox = styled.div`
  background: ${theme.white};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ChartTitle = styled.h3`
  margin: 0 0 16px;
  color: ${theme.text};
  text-align: center;
`
