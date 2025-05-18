/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TableView from './index'
import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell as RechartsCell } from 'recharts'
import { within, userEvent, expect } from '@storybook/test'

const meta: Meta<typeof TableView> = {
  title: 'Dashboard/Table15',
  component: TableView,
  parameters: {
    order: 15
  }
} as Meta<typeof TableView>

export default meta
type Story = StoryObj<typeof TableView>

const sectionData = [
  {
    title: 'Result Reports',
    data: [
      { name: 'Rapid (Negative)', data: [10, 45, 230, 400] },
      { name: 'Saliva (Negative)', data: [10, 45, 230, 400] },
      { name: 'Breath (Negative)', data: [10, 40, 200, 300] },
      { name: 'Sent to Lab', data: [15, 60, 240, 500] },
      { name: 'Total', data: [45, 190, 900, 1600] }
    ]
  },
  {
    title: 'Attendance Cert.',
    data: [
      { name: 'Male', data: [10, 35, 180, 800] },
      { name: 'Female', data: [5, 25, 150, 500] },
      { name: 'Other', data: [0, 1, 4, 50] },
      { name: 'Total', data: [15, 61, 334, 1350] }
    ]
  }
]

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')

    return (
      <Container>
        <Header>
          <Title>📝 Patient Communication </Title>
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
          <>
            {sectionData.map((section, i) => (
              <React.Fragment key={i}>
                <SectionTitle>{section.title}</SectionTitle>
                <TableSection data={section.data} />
              </React.Fragment>
            ))}
          </>
        )}

        {activeView === 'chart' && (
          <ChartGrid>
            {['Today', 'Week', 'Month', 'Year'].map((period, index) => {
              // 根据时间周期转换数据
              const chartData = sectionData[0].data.map(item => ({
                name: item.name,
                value: item.data[index]  // 使用对应时间周期的数据
              }))

              return (
                <ChartBox key={period}>
                  <ChartTitle>{period}</ChartTitle>
                  <BarChart width={500} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="value"
                      name={period}
                      fill="#8884d8"
                      isAnimationActive={false}
                    >
                      {chartData.map((entry, idx) => (
                        <RechartsCell 
                          key={`cell-${idx}`} 
                          fill={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'][idx % 5]} 
                        />
                      ))}
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

    // 等待图表视图加载（增加等待时间）
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

// 样式组件定义
const Container = styled.div`
  padding: 20px;
  background: #f6f9fc;
  min-height: 100vh;
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
`

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 24px 0 8px;
`

const TableSection = ({ data }: { data: { name: string; data: number[] }[] }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
    <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {data.map((row, index) => (
        <Button key={index}>{row.name}</Button>
      ))}
    </div>
    <div style={{ width: '85%', paddingLeft: '8px' }}>
      <Row style={{ marginBottom: '8px' }}>
        {['Today', 'Week', 'Month', 'Year'].map((title) => (
          <Button 
            key={title} 
            style={{ 
              width: '80px',
              marginRight: '8px'
            }}
          >
            {title}
          </Button>
        ))}
      </Row>
      {data.map((row, index) => (
        <Row key={index} style={{ marginBottom: '8px' }}>
          {row.data.map((col: number, colIndex: number) => (
            <Cell
              key={`col-${index}-${colIndex}`}
              value={col.toString()}
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
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  background: white;
`

const Button = styled.div`
  background-color: rgb(30, 144, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  min-width: 80px;
`