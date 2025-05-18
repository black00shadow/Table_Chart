/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TableView from './index'
import tableDataJson from './table.json'
import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell as RechartsCell } from 'recharts'
import { within, userEvent, expect } from '@storybook/test'

// 定义数据类型
interface TestData {
  name: string;
  data: number[];
}

type TestDataArray = number[][];

// 定义主题颜色
const theme = {
  primary: 'rgb(30, 144, 255)',
  primaryLight: 'rgba(30, 144, 255, 0.1)',
  white: '#ffffff',
  border: '#e0e0e0',
  background: '#f6f9fc',
  text: '#333333'
}

const meta: Meta<typeof TableView> = {
  title: 'Dashboard/Table13',
  component: TableView,
  parameters: {
    order: 13
  }
}

export default meta
type Story = StoryObj<typeof TableView>

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')
    const rawData = tableDataJson.initialDataFirstMid2 as number[][]

    // 准备图表数据
    const getChartData = (timeIndex: number) => {
      return rawData.map((row, idx) => ({
        name: `Test ${idx + 1}`,
        value: row[timeIndex]
      }))
    }

    return (
      <Container>
        <Header>
          <Title>📊 Collector Rankings</Title>
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
              <label style={{ marginRight: '12px', color: theme.white }}>Location</label>
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
                  <BlueButton style={{ width: '15%' }} key={title}>
                    {title}
                  </BlueButton>
                ))}
              </Row>
            </Row>
            {rawData.map((row: number[], index: number) => (
              <Row key={index} style={{ margin: '8px auto', gap: '8px' }}>
                <BlueButton style={{ width: '40%' }}>Test {index + 1}</BlueButton>
                <Row style={{ gap: '8px', width: '60%' }}>
                  {row.map((col: number, colIndex: number) => (
                    <Cell
                      style={{ width: '20%' }}
                      key={`col-${index}-${colIndex}`}
                      value={col}
                      readOnly
                    />
                  ))}
                </Row>
              </Row>
            ))}
          </div>
        )}

        {activeView === 'chart' && (
          <ChartGrid>
            {['Today', 'Week', 'Month', 'Year'].map((period, timeIndex) => {
              const chartData = getChartData(timeIndex)

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
                      fill={theme.primary}
                      isAnimationActive={false}
                    >
                      {chartData.map((entry, idx) => {
                        // 使用蓝色渐变系统
                        const colors = [
                          '#1e90ff', // 深蓝
                          '#47a3ff', // 中蓝
                          '#70b6ff', // 浅蓝
                          '#99c9ff', // 更浅的蓝
                          '#c2dcff', // 最浅的蓝
                          '#e5f1ff', // 极浅的蓝
                          '#f0f7ff', // 近白的蓝
                          '#f8fbff'  // 最近白的蓝
                        ]

                        return (
                          <RechartsCell 
                            key={`cell-${idx}`} 
                            fill={colors[idx % colors.length]}
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

const BlueButton = styled.button`
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
  background: ${theme.white};
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