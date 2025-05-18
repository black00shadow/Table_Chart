import React, { useState, useRef, useEffect } from 'react'
import { Select, Radio, DatePicker, Button, Space } from 'antd'
import styled from 'styled-components'
import * as echarts from 'echarts'
import {
  TableOutlined,
  BarChartOutlined,
  PrinterOutlined,
  BellOutlined
} from '@ant-design/icons'
import YearView from '../year-view'
const { RangePicker } = DatePicker
const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 20px;
  background-color: #1890ff;
  padding: 16px;
  color: white;
`

const PageTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`

const Options = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 11px 0;
  // margin-bottom: 20px;
`

const TimeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid blue;
  width: 37%;
  height: 100%;
  padding: 10px;
`

const TimeButton = styled(Button)<{ $isActive?: boolean }>`
  &.ant-btn {
    ${(props) =>
      props.$isActive &&
      `
      background-color: #1890ff;
      color: white;
      &:hover, &:focus {
        background-color: #40a9ff;
        color: white;
      }
    `}
  }
`

const YearViewContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
  border: 1px solid blue;
  padding: 10px;
`

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid blue;
  height: 100%;
  padding: 10px;

  .ant-picker {
    width: 240px;
  }
`
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

const Discover: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<'table' | 'chart'>('table')
  const [timeRange, setTimeRange] = useState<TimeRangeType>('today')
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (displayMode === 'chart' && chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current)
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose()
        chartInstance.current = null
      }
    }
  }, [displayMode])

  return (
    <Container>
      <MainContent>
        <Header>
          <PageTitle>Rapid Urine Drug Screen Results</PageTitle>
          <Options>
            <Space>
              <Button
                type={displayMode === 'table' ? 'primary' : 'default'}
                icon={<TableOutlined />}
                onClick={() => setDisplayMode('table')}
              />
              <Button
                type={displayMode === 'chart' ? 'primary' : 'default'}
                icon={<BarChartOutlined />}
                onClick={() => setDisplayMode('chart')}
              />
              <Button icon={<PrinterOutlined />} />
              <Button icon={<BellOutlined />} />
              <Select defaultValue="All" style={{ width: 120 }}>
                <Select.Option value="All">All</Select.Option>
              </Select>
            </Space>
          </Options>
        </Header>

        <OptionsContainer>
          <TimeButtons>
            <div>Results</div>
            <div>
              <TimeButton
                $isActive={timeRange === 'today'}
                onClick={() => setTimeRange('today')}
              >
                Today
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentWeek'}
                onClick={() => setTimeRange('currentWeek')}
              >
                Current Week
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentMonth'}
                onClick={() => setTimeRange('currentMonth')}
              >
                Current Month
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentYear'}
                onClick={() => setTimeRange('currentYear')}
              >
                Current Year
              </TimeButton>
            </div>
          </TimeButtons>

          <YearViewContainer>
            <YearView
              onViewChange={(view) => console.log('View changed to:', view)}
              onYearChange={(year) => console.log('Year changed to:', year)}
            />
          </YearViewContainer>

          <DateRangeContainer>
            <span>From</span>
            <RangePicker
              placeholder={['From', 'To']}
              onChange={(dates) => {
                if (dates) {
                  setDateRange([
                    dates[0]?.format('YYYY-MM-DD') || '',
                    dates[1]?.format('YYYY-MM-DD') || ''
                  ])
                } else {
                  setDateRange(null)
                }
              }}
            />
          </DateRangeContainer>
        </OptionsContainer>
        {displayMode === 'table' ? <></> : <></>}
      </MainContent>
    </Container>
  )
}

export default Discover
