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
import DailySummary from '@/components/first/chart'
import YearView from '@/components/year-view'
// 重构
import { DynamicMenu, MenuConfig } from '@/components/menu'
import FirstTableView from '@/components/first/index'
import SecondTableView from '@/components/second/index'
import FourTableView from '@/components/four/index'
import FiveTableView from '@/components/five/index'
import SixTableView from '@/components/six/index'
import SevenTableView from '@/components/seven/index'
import EightTableView from '@/components/eight/index'
import TwelveTableView from '@/components/twelve/index'
import TirteenTableView from '@/components/thirteen/index'
import FourteenTableView from '@/components/fourteen/index'
import FiveteenTableView from '@/components/fiveteen/index'
import ThreeChartView from '@/components/three/chart'
import FourChartView from '@/components/four/chart'
import FiveChartView from '@/components/five/chart'
import SixChartView from '@/components/six/chart'
import SevenChartView from '@/components/seven/chart'
import EightChartView from '@/components/eight/chart'
import NineChartView from '@/components/nine/chart'
import TwelveChartView from '@/components/twelve/chart'
import TirteenChartView from '@/components/thirteen/chart'
import FourteenChartView from '@/components/fourteen/chart'
import FiveteenChartView from '@/components/fiveteen/chart'
import RechartView from '@/components/first/rechart'
const { RangePicker } = DatePicker
const Container = styled.div`
  min-height: 1080px;
  // padding: 20px;
  display: flex;
  // gap: 20px;
`
const MenuContainer = styled.div`
  width: 15%;
  padding-top: 61px;
`
const MainContent = styled.div`
  // flex: 1;
  width: 85%;
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
  justify-content: space-between;
  gap: 8px;
  border: 1px solid blue;
  width: 37%;
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

const Sticky = styled.div`
  width: 28px;
  height: 43px;
  background-image: url(${require('@/assets/img/sticky.png')});
  cursor: pointer;
`
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

const Discover: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<'table' | 'chart'>('table')
  const [timeRange, setTimeRange] = useState<TimeRangeType>('today')
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)
  const [selectedMenu, setSelectedMenu] = useState('1')
  const menuConfig: MenuConfig[] = [
    {
      key: '1',
      title: 'Daily Summary',
      subTitle: 'Daily Summary',
      timeRange: 'today',
      component: (
        <FirstTableView
          timeRange={timeRange}
          tableData={[]}
          onChangeTable={(data) => {
            // 处理表格数据变化
            console.log('table data changed:', data)
          }}
        />
      ),
      chartComponent: <DailySummary timeRange={timeRange} />
    },
    {
      key: '2',
      title: 'Tests Processed',
      subTitle: 'Tests',
      timeRange: 'today',
      component: (
        <FirstTableView
          timeRange={timeRange}
          tableData={[]}
          onChangeTable={(data) => {
            console.log('table data changed:', data)
          }}
        />
      ),
      chartComponent: <DailySummary timeRange={timeRange} />
    }
    // {
    //   key: '3',
    //   title: 'Patient Time',
    //   subTitle: 'Test Time',
    //   timeRange: 'today',
    //   component: <SecondTableView />,
    //   chartComponent: <ThreeChartView timeRange={timeRange} />
    // },
    // {
    //   key: '4',
    //   title: 'Test Time',
    //   subTitle: 'Test Time',
    //   timeRange: 'today',
    //   component: <SecondTableView />,
    //   chartComponent: <ThreeChartView timeRange={timeRange} />
    // },
    // {
    //   key: '5',
    //   title: 'Test Categories',
    //   subTitle: 'Results',
    //   timeRange: 'today',
    //   component: <FourTableView />,
    //   chartComponent: <FiveChartView timeRange={timeRange} />
    // },
    // {
    //   key: '6',
    //   title: 'Rapid Urine Drug Screen Results',
    //   subTitle: 'Results',
    //   timeRange: 'today',
    //   component: <FiveTableView />,
    //   chartComponent: <SixChartView timeRange={timeRange} />
    // },
    // {
    //   key: '7',
    //   title: 'Urine Drug Test Results (Laboratory Test)',
    //   subTitle: 'Results',
    //   timeRange: 'today',
    //   component: <SixTableView />,
    //   chartComponent: <SevenChartView timeRange={timeRange} />
    // },
    // {
    //   key: '8',
    //   title: 'Breath Alcohol Test Results',
    //   subTitle: 'Results',
    //   timeRange: 'today',
    //   component: <SevenTableView />,
    //   chartComponent: <EightChartView timeRange={timeRange} />
    // },
    // {
    //   key: '9',
    //   title: 'Drug Classes - Negative Results',
    //   subTitle: 'Results EGATIVE',
    //   timeRange: 'today',
    //   component: <EightTableView />,
    //   chartComponent: <NineChartView timeRange={timeRange} />
    // },
    // {
    //   key: '10',
    //   title: 'Drug Classes - Non Negative Results',
    //   subTitle: 'Results NON NEGATIVE',
    //   timeRange: 'today',
    //   component: <EightTableView />,
    //   chartComponent: <NineChartView timeRange={timeRange} />
    // },
    // {
    //   key: '11',
    //   title: 'Drug Classes - Invalid Results',
    //   subTitle: 'Results INVALID',
    //   timeRange: 'today',
    //   component: <EightTableView />,
    //   chartComponent: <NineChartView timeRange={timeRange} />
    // },
    // {
    //   key: '12',
    //   title: 'Collector Performance',
    //   subTitle: 'Processed Tests',
    //   timeRange: 'today',
    //   component: <TwelveTableView />,
    //   chartComponent: <TwelveChartView timeRange={timeRange} />
    // },
    // {
    //   key: '13',
    //   title: 'Collector Rankings',
    //   subTitle: 'Rankings',
    //   timeRange: 'today',
    //   component: <TirteenTableView />,
    //   chartComponent: <TirteenChartView timeRange={timeRange} />
    // },
    // {
    //   key: '14',
    //   title: 'Patient',
    //   subTitle: 'Appointments',
    //   timeRange: 'today',
    //   component: <FourteenTableView />,
    //   chartComponent: <FourteenChartView timeRange={timeRange} />
    // },
    // {
    //   key: '15',
    //   title: 'Patient Communication A',
    //   subTitle: 'Reports',
    //   timeRange: 'today',
    //   component: <FiveteenTableView />,
    //   chartComponent: <FiveteenChartView timeRange={timeRange} />
    // }
  ]
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
      <MenuContainer>
        <DynamicMenu
          config={menuConfig}
          selectedKey={selectedMenu}
          onSelect={setSelectedMenu}
        />
      </MenuContainer>
      <MainContent>
        <Header>
          <PageTitle>
            {menuConfig.find((m) => m.key === selectedMenu)?.title}
          </PageTitle>
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
            <SubMenu>
              {menuConfig.find((m) => m.key === selectedMenu)?.subTitle}
            </SubMenu>
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

        {displayMode === 'table' ? (
          <>
            <FirstTableView
              timeRange={timeRange}
              tableData={[]}
              onChangeTable={(data) => {
                console.log('table data changed:', data)
              }}
            />
            {/* <SecondTableView />
            <SecondTableView /> */}
            {/* <div>
              {menuConfig.find((m) => m.key === selectedMenu)?.component}
            </div> */}
          </>
        ) : (
          <>
            <div>
              <RechartView />
              {/* {menuConfig.find((m) => m.key === selectedMenu)?.chartComponent} */}
              {/* <DailySummary /> */}
            </div>
          </>
        )}
      </MainContent>
    </Container>
  )
}

export default Discover
