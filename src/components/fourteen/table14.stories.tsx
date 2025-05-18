/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TableView from './index'
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

const meta: Meta<typeof TableView> = {
  title: 'Dashboard/Table14',
  component: TableView,
  parameters: {
    order: 14
  }
}

export default meta
type Story = StoryObj<typeof TableView>

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')

    const sectionData = [
      {
        title: 'Sex',
        data: [
          { name: 'Male', data: [18, 45, 230, 3800] },
          { name: 'Female', data: [10, 40, 200, 3400] },
          { name: 'Other', data: [0, 1, 10, 200] },
          { name: 'Total', data: [28, 86, 440, 7400] }
        ]
      },
      {
        title: 'Medication',
        data: [
          { name: 'Male', data: [10, 35, 180, 2000] },
          { name: 'Female', data: [5, 25, 150, 1500] },
          { name: 'Other', data: [0, 1, 4, 100] },
          { name: 'Total', data: [15, 61, 334, 3600] }
        ]
      },
      {
        title: 'Attendance',
        data: [
          { name: 'Presented', data: [20, 62, 417, 7040] },
          { name: 'No Shows', data: [1, 2, 7, 40] },
          { name: 'Rescheduled', data: [2, 7, 14, 100] },
          { name: 'Cancelled', data: [2, 3, 5, 50] },
          { name: 'Total', data: [25, 74, 443, 7230] }
        ]
      }
    ]

    // 准备图表数据
    const getChartData = (data: { name: string; data: number[] }[], timeIndex: number) => {
      return data
        .filter(item => item.name !== 'Total') // 排除总计行
        .map(item => ({
          name: item.name,
          value: item.data[timeIndex]
        }))
    }

    return (
      <Container>
        <Header>
          <Title>👤 Patient</Title>
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
          <div>
            {sectionData.map((section, i) => (
              <React.Fragment key={i}>
                <SectionTitle>{section.title}</SectionTitle>
                <TableSection data={section.data} />
              </React.Fragment>
            ))}
          </div>
        )}

        {activeView === 'chart' && (
          <ChartContainer>
            {sectionData.map((section, sectionIndex) => (
              <ChartSection key={sectionIndex}>
                <SectionTitle>{section.title}</SectionTitle>
                <ChartGrid>
                  {['Today', 'Week', 'Month', 'Year'].map((period, timeIndex) => {
                    const chartData = getChartData(section.data, timeIndex)
                    const colors: Record<string, string[]> = {
                      'Sex': ['#4e79a7', '#f28e2c', '#e15759'],
                      'Medication': ['#76b7b2', '#59a14f', '#edc949'],
                      'Attendance': ['#af7aa1', '#ff9da7', '#9c755f', '#bab0ab']
                    }

                    return (
                      <ChartBox key={period}>
                        <ChartTitle>{period}</ChartTitle>
                        <BarChart width={400} height={250} data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar 
                            dataKey="value"
                            name={section.title}
                            fill={theme.primary}
                            isAnimationActive={false}
                          >
                            {chartData.map((entry, idx) => (
                              <RechartsCell 
                                key={`cell-${idx}`} 
                                fill={colors[section.title][idx]}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ChartBox>
                    )
                  })}
                </ChartGrid>
              </ChartSection>
            ))}
          </ChartContainer>
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

    // 1. 测试视图切换到图表视图
    const chartViewBtn = await canvas.findByTestId('chart-view-btn')
    await userEvent.click(chartViewBtn)
    await new Promise(resolve => setTimeout(resolve, 500))

    // 2. 测试位置选择
    const locationSelect = await canvas.findByTestId('location-select')
    await userEvent.selectOptions(locationSelect, 'Sydney')
    await new Promise(resolve => setTimeout(resolve, 300))
    expect(locationSelect).toHaveValue('Sydney')

    // 3. 切换回数据视图
    const dataViewBtn = await canvas.findByTestId('data-view-btn')
    await userEvent.click(dataViewBtn)
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

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 24px 0 8px;
  color: ${theme.text};
`

const TableSection = ({ data }: { data: { name: string; data: number[] }[] }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {data.map((row, index) => (
        <BlueButton key={index}>{row.name}</BlueButton>
      ))}
    </div>
    <div style={{ width: '85%', paddingLeft: '8px' }}>
      <Row style={{ marginBottom: '8px' }}>
        {['Today', 'Week', 'Month', 'Year'].map((title) => (
          <BlueButton 
            key={title} 
            style={{ 
              width: '80px',
              marginRight: '8px'
            }}
          >
            {title}
          </BlueButton>
        ))}
      </Row>
      {data.map((row, index) => (
        <Row key={index} style={{ marginBottom: '8px' }}>
          {row.data.map((col: number, colIndex: number) => (
            <Cell
              key={`col-${index}-${colIndex}`}
              value={col}
              readOnly
              style={{ 
                width: '80px',
                marginRight: '8px'
              }}
            />
          ))}
        </Row>
      ))}
    </div>
  </div>
)

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Cell = styled.input`
  padding: 8px;
  border: 1px solid ${theme.border};
  border-radius: 4px;
  text-align: center;
  background: ${theme.white};
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

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ChartSection = styled.div`
  background: ${theme.white};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 20px;
`

const ChartBox = styled.div`
  background: ${theme.white};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.border};
`

const ChartTitle = styled.h3`
  margin: 0 0 16px;
  color: ${theme.text};
  text-align: center;
  font-size: 16px;
`