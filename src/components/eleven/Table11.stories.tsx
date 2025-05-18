/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TableV11 from './index'
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

// 定义数据类型
interface DrugTestItem {
  name: string;
  data: number[];
}

interface TimeGroup {
  time: string;
  info: DrugTestItem[];
}

// 使用类型别名替代空接口
type DrugTestData = TimeGroup[][]

const meta: Meta<typeof TableV11> = {
  title: 'Dashboard/Table11',
  component: TableV11,
  parameters: {
    order: 11
  }
}

export default meta
type Story = StoryObj<typeof TableV11>

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

const GroupToggleContainer = styled.div`
  display: flex;
  gap: 8px;
`

const GroupToggleButton = styled(ViewToggleButton)`
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

const GroupTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 24px 0 8px;
  color: ${theme.text};
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

const getBarColor = (index: number) => {
  // 创建蓝色渐变色系
  const baseColor = [30, 144, 255]; // rgb(30, 144, 255)
  const opacity = 1 - (index * 0.1); // 每个柱状图的透明度递减
  return `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`;
};

// 基础故事
export const Primary: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('data')
    const [selectedLocation, setSelectedLocation] = useState('All')
    const [selectedGroup, setSelectedGroup] = useState(0) // 0: All, 1-3: Group 1-3
    const rawData = tableDataJson.tableData as DrugTestData

    // 根据选择的组别过滤数据
    const getFilteredData = (): DrugTestItem[] => {
      if (selectedGroup === 0) {
        // 合并所有组的数据
        const allData: DrugTestItem[] = []
        rawData.forEach(group => {
          group[0].info.forEach((item: DrugTestItem) => {
            allData.push({
              name: item.name,
              data: item.data
            })
          })
        })
        return allData
      } else {
        // 返回选定组的数据
        const groupIndex = selectedGroup - 1
        return rawData[groupIndex][0].info.map((item: DrugTestItem) => ({
          name: item.name,
          data: item.data
        }))
      }
    }

    return (
      <Container>
        <Header>
          <Title>💊 Drug Classes - Invalid Results</Title>
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
              <GroupToggleContainer>
                <GroupToggleButton 
                  active={selectedGroup === 0} 
                  onClick={() => setSelectedGroup(0)}
                  data-testid="group-all-btn"
                >
                  All Tests
                </GroupToggleButton>
                <GroupToggleButton 
                  active={selectedGroup === 1} 
                  onClick={() => setSelectedGroup(1)}
                  data-testid="group-1-btn"
                >
                  Group 1
                </GroupToggleButton>
                <GroupToggleButton 
                  active={selectedGroup === 2} 
                  onClick={() => setSelectedGroup(2)}
                  data-testid="group-2-btn"
                >
                  Group 2
                </GroupToggleButton>
                <GroupToggleButton 
                  active={selectedGroup === 3} 
                  onClick={() => setSelectedGroup(3)}
                  data-testid="group-3-btn"
                >
                  Group 3
                </GroupToggleButton>
              </GroupToggleContainer>
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
            {selectedGroup === 0 ? (
              // 显示所有组的数据
              rawData.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  <GroupTitle>Group {groupIndex + 1}</GroupTitle>
                  {group[0].info.map((row: DrugTestItem, index: number) => (
                    <Row key={`${groupIndex}-${index}`} style={{ margin: '8px auto', gap: '8px' }}>
                      <BlueButton style={{ width: '40%' }}>{row.name}</BlueButton>
                      <Row style={{ gap: '8px', width: '60%' }}>
                        {row.data.map((col: number, colIndex: number) => (
                          <Cell
                            style={{ width: '20%' }}
                            key={`col-${groupIndex}-${index}-${colIndex}`}
                            value={col}
                            readOnly
                          />
                        ))}
                      </Row>
                    </Row>
                  ))}
                </React.Fragment>
              ))
            ) : (
              // 显示选定组的数据
              rawData[selectedGroup - 1][0].info.map((row: DrugTestItem, index: number) => (
                <Row key={index} style={{ margin: '8px auto', gap: '8px' }}>
                  <BlueButton style={{ width: '40%' }}>{row.name}</BlueButton>
                  <Row style={{ gap: '8px', width: '60%' }}>
                    {row.data.map((col: number, colIndex: number) => (
                      <Cell
                        style={{ width: '20%' }}
                        key={`col-${index}-${colIndex}`}
                        value={col}
                        readOnly
                      />
                    ))}
                  </Row>
                </Row>
              ))
            )}
          </div>
        )}

        {activeView === 'chart' && (
          <ChartGrid>
            {['Today', 'Week', 'Month', 'Year'].map((period, timeIndex) => {
              const chartData = getFilteredData().map((item: DrugTestItem) => ({
                name: item.name,
                value: item.data[timeIndex]
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
                      fill={theme.primary}
                      isAnimationActive={false}
                    >
                      {chartData.map((entry, idx) => (
                        <RechartsCell 
                          key={`cell-${idx}`} 
                          fill={getBarColor(idx)}
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

    // 1. 测试视图切换到图表视图
    const chartViewBtn = await canvas.findByTestId('chart-view-btn')
    await userEvent.click(chartViewBtn)
    await new Promise(resolve => setTimeout(resolve, 500))

    // 2. 测试组别切换
    const group1Btn = await canvas.findByTestId('group-1-btn')
    await userEvent.click(group1Btn)
    await new Promise(resolve => setTimeout(resolve, 300))

    // 3. 测试位置选择
    const locationSelect = await canvas.findByTestId('location-select')
    await userEvent.selectOptions(locationSelect, 'Sydney')
    await new Promise(resolve => setTimeout(resolve, 300))
    expect(locationSelect).toHaveValue('Sydney')

    // 4. 切换回数据视图
    const dataViewBtn = await canvas.findByTestId('data-view-btn')
    await userEvent.click(dataViewBtn)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}
