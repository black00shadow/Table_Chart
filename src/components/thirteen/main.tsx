import React, { useState, useRef, useEffect } from 'react'
import { Select, Radio, DatePicker, Button, Space } from 'antd'
import styled from 'styled-components'
import * as echarts from 'echarts'
import Icon, {
  TableOutlined,
  BarChartOutlined,
  PrinterOutlined,
  BellOutlined
} from '@ant-design/icons'
import YearView from '../year-view'
import ChartView from './chart'
import TableView from './index'
import { getData } from '@/api/getData'

const { RangePicker } = DatePicker
const Container = styled.div`
  padding: 10px 20px;
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
  width: 60%;
`

const Options = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex: 1;
  justify-content: space-between;
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
  justify-content: space-around;
  gap: 8px;
  border: 1px solid blue;
  width: 38%;
  height: 100%;
  // padding: 10px;
`
const SubMenu = styled.div`
  color: #333333;
  padding-left: 10px;
`
const TimeButton = styled(Button)<{ $isActive?: boolean }>`
  &.ant-btn {
    ${(props) =>
      props.$isActive &&
      `
      background-color: #1890ff;
      color: white;
      white-space: normal;
      hyphens: auto;
      width: 80px;
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
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  // border: 1px solid blue;
  // padding: 10px;
`

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  // border: 1px solid blue;
  height: 100%;
  // padding: 10px;

  .ant-picker {
    width: 240px;
  }
`
const TitleIcon = styled.div`
  width: 79px;
  height: 51px;
  background-image: url(${require('@/assets/img/2.png')});
  cursor: pointer;
  margin-right: 10px;
`
const Sticky = styled.div`
  width: 28px;
  height: 43px;
  background-image: url(${require('@/assets/img/sticky.png')});
  cursor: pointer;
`
const TableIcon = styled.div`
  width: 28px;
  height: 38px;
  background-image: url(${require('@/assets/img/table.png')});
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`
const ChartIcon = styled.div`
  width: 28px;
  height: 39px;
  background-image: url(${require('@/assets/img/chart.png')});
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`
const IconBox = styled.div<{ $isActive?: boolean }>`
  width: 34px;
  background-color: ${(props) => (props.$isActive ? '#275681' : 'transparent')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
`
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

const Discover: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<'table' | 'chart'>('table')
  const [timeRange, setTimeRange] = useState<TimeRangeType>('today')
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)
  const [tableData, setTableData] = useState<
    {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  >([])

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

  useEffect(() => {
    loadData()
  }, [])
  const onChangeTable = (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  ) => {
    setTableData(data)
  }
  const loadData = async () => {
    const res = await getData({
      type: 'thirteen'
    })
    setTableData(res.data.PatientTime)
  }

  return (
    <Container>
      <MainContent>
        <Header>
          <TitleIcon />
          <PageTitle>Collector Rankings</PageTitle>
          <Options>
            <Space>
              {/* <Button
                type={displayMode === 'table' ? 'primary' : 'default'}
                icon={<TableOutlined />}
                onClick={() => setDisplayMode('table')}
              /> */}
              <IconBox
                $isActive={displayMode === 'table'}
                onClick={() => setDisplayMode('table')}
              >
                <TableIcon />
              </IconBox>
              {/* <Button
                type={displayMode === 'chart' ? 'primary' : 'default'}
                icon={<BarChartOutlined />}
                onClick={() => setDisplayMode('chart')}
              /> */}
              <IconBox
                $isActive={displayMode === 'chart'}
                onClick={() => setDisplayMode('chart')}
              >
                <ChartIcon />
              </IconBox>
              <p>Location</p>
              <Select defaultValue="All" style={{ width: 120 }}>
                <Select.Option value="All">All</Select.Option>
              </Select>
            </Space>
            <Space>
              <Button
                icon={<PrinterOutlined />}
                onClick={() => {
                  alert('Support printing！')
                }}
              />
              {/* <Button
                icon={<BellOutlined />}
                onClick={() => {
                  alert('📌 Sticky (fixed at the top)')
                }}
              >
                
              </Button> */}
              <Sticky
                onClick={() => {
                  alert('📌 Sticky (fixed at the top)')
                }}
              />
            </Space>
          </Options>
        </Header>

        <OptionsContainer>
          <TimeButtons>
            <div
              style={{
                fontWeight: 'bold',
                color: '#333333',
                fontSize: 16,
                marginRight: '20px'
              }}
            >
              Rankings
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TimeButton
                $isActive={timeRange === 'today'}
                onClick={() => setTimeRange('today')}
                style={{ width: '80px', whiteSpace: 'break-spaces' }}
              >
                Today
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentWeek'}
                onClick={() => setTimeRange('currentWeek')}
                style={{ width: '80px', whiteSpace: 'break-spaces' }}
              >
                Current Week
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentMonth'}
                onClick={() => setTimeRange('currentMonth')}
                style={{ width: '80px', whiteSpace: 'break-spaces' }}
              >
                Current Month
              </TimeButton>
              <TimeButton
                $isActive={timeRange === 'currentYear'}
                onClick={() => setTimeRange('currentYear')}
                style={{ width: '80px', whiteSpace: 'break-spaces' }}
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

        {displayMode === 'table' ? (
          <TableView
            timeRange={timeRange}
            tableData={tableData}
            onChangeTable={onChangeTable}
          />
        ) : (
          <ChartView timeRange={timeRange} tableData={tableData} />
        )}
      </MainContent>
    </Container>
  )
}

export default Discover
