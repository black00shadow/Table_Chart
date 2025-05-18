/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TableView from './index'
import tableDataJson from './table.json'
import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
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

// 定义数据类型
interface TestData {
  name: string;
  data: number[];
}

type TestDataArray = number[][];

const meta: Meta<typeof TableView> = {
  title: 'Dashboard/Table12',
  component: TableView,
  parameters: {
    order: 12
  }
}

export default meta
type Story = StoryObj<typeof TableView>

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

const DatasetToggleContainer = styled.div`
  display: flex;
  gap: 8px;
`

const DatasetToggleButton = styled(ViewToggleButton)`
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const BlueButton = styled.div`
  background: ${theme.primary};
  color: ${theme.white};
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  min-width: 80px;
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

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')
    const [selectedDataset, setSelectedDataset] = useState('mid2') // 'mid2' or 'mid3'
    
    // 准备数据
    const getChartData = (timeIndex: number) => {
      const rawData = selectedDataset === 'mid2' 
        ? tableDataJson.initialDataFirstMid2 
        : tableDataJson.initialDataFirstMid3

      return rawData.map((row, idx) => ({
        name: `Test ${idx + 1}`,
        value: row[timeIndex]
      }))
    }

    return (
      <Container>
        <Header>
          <Title>📊 Collector performance</Title>
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
            {activeView === 'chart' && (
              <DatasetToggleContainer>
                <DatasetToggleButton 
                  active={selectedDataset === 'mid2'} 
                  onClick={() => setSelectedDataset('mid2')}
                  data-testid="mid2-btn"
                >
                  Dataset 1
                </DatasetToggleButton>
                <DatasetToggleButton 
                  active={selectedDataset === 'mid3'} 
                  onClick={() => setSelectedDataset('mid3')}
                  data-testid="mid3-btn"
                >
                  Dataset 2
                </DatasetToggleButton>
              </DatasetToggleContainer>
            )}
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
            {(selectedDataset === 'mid2' ? tableDataJson.initialDataFirstMid2 : tableDataJson.initialDataFirstMid3)
              .map((row: number[], index: number) => (
                <Row key={index} style={{ margin: '8px auto', gap: '8px' }}>
                  <BlueButton style={{ width: '40%' }}>Test {index + 1}</BlueButton>
                  <Row style={{ gap: '8px', width: '60%' }}>
                    {row.map((col: number, colIndex: number) => (
                      <Cell
                        style={{ width: '20%' }}
                        key={`col-${index}-${colIndex}`}
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
                        // 使用渐变色系统
                        const colors = selectedDataset === 'mid2'
                          ? [
                              '#FF6B6B', '#FF8787', '#FFA5A5', '#FFB6C1',
                              '#4ECDC4', '#86E3DE', '#B4EBE7', '#E0F7F6'
                            ]
                          : [
                              '#45B7D1', '#7CCCE0', '#A6DDEB',
                              '#96CEB4', '#ABD5C6', '#C1E3D6'
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

    // 2. 测试数据集切换
    const mid3Btn = await canvas.findByTestId('mid3-btn')
    await userEvent.click(mid3Btn)
    
    // 等待数据集切换生效
    await new Promise(resolve => setTimeout(resolve, 300))

    // 3. 测试位置选择
    const locationSelect = await canvas.findByTestId('location-select')
    await userEvent.selectOptions(locationSelect, 'Sydney')
    
    // 等待位置选择生效
    await new Promise(resolve => setTimeout(resolve, 300))
    expect(locationSelect).toHaveValue('Sydney')

    // 4. 切换回数据视图
    const dataViewBtn = await canvas.findByTestId('data-view-btn')
    await userEvent.click(dataViewBtn)
    
    // 等待数据视图加载
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}