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
import SecondeEcharts from '@/components/second/chart'
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
import SecondView from '@/components/second/main'
import ThreeView from '@/components/three/main'
import FourView from '@/components/four/main'
import FirstView from '@/components/first/rechart'
import FiveView from '@/components/five/main'
import SixView from '@/components/six/main'
import SevenView from '@/components/seven/main'
import EightView from '@/components/eight/main'
import NineView from '@/components/nine/main'
import TenView from '@/components/ten/main'
import ElevenView from '@/components/eleven/main'
import TwelveView from '@/components/twelve/main'
import ThirteenView from '@/components/thirteen/main'
import FourteenView from '@/components/fourteen/main'
import FiveteenView from '@/components/fiveteen/main'
import { getData } from '@/api/getData'
const { RangePicker } = DatePicker
const Container = styled.div`
  // min-height: 1080px;
  // padding: 20px;
  // display: flex;
  // gap: 20px;
`

type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

const Discover: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<'table' | 'chart'>('table')
  const [timeRange, setTimeRange] = useState<TimeRangeType>('today')
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)
  const [selectedMenu, setSelectedMenu] = useState('1')
  // const menuConfig: MenuConfig[] = [
  //   {
  //     key: '1',
  //     title: 'Daily Summary',
  //     subTitle: 'Daily Summary',
  //     timeRange: 'today',
  //     component: <FirstTableView />,
  //     chartComponent: <DailySummary timeRange={timeRange} />
  //   },
  //   {
  //     key: '2',
  //     title: 'Tests Processed',
  //     subTitle: 'Tests',
  //     timeRange: 'today',
  //     component: <FirstTableView />,
  //     chartComponent: <SecondeEcharts timeRange={timeRange} />
  //   },
  //   {
  //     key: '3',
  //     title: 'Patient Time',
  //     subTitle: 'Test Time',
  //     timeRange: 'today',
  //     component: <SecondTableView />,
  //     chartComponent: <ThreeChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '4',
  //     title: 'Test Time',
  //     subTitle: 'Test Time',
  //     timeRange: 'today',
  //     component: <SecondTableView />,
  //     chartComponent: <ThreeChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '5',
  //     title: 'Test Categories',
  //     subTitle: 'Results',
  //     timeRange: 'today',
  //     component: <FourTableView />,
  //     chartComponent: <FiveChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '6',
  //     title: 'Rapid Urine Drug Screen Results',
  //     subTitle: 'Results',
  //     timeRange: 'today',
  //     component: <FiveTableView />,
  //     chartComponent: <SixChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '7',
  //     title: 'Urine Drug Test Results (Laboratory Test)',
  //     subTitle: 'Results',
  //     timeRange: 'today',
  //     component: <SixTableView />,
  //     chartComponent: <SevenChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '8',
  //     title: 'Breath Alcohol Test Results',
  //     subTitle: 'Results',
  //     timeRange: 'today',
  //     component: <SevenTableView />,
  //     chartComponent: <EightChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '9',
  //     title: 'Drug Classes - Negative Results',
  //     subTitle: 'Results EGATIVE',
  //     timeRange: 'today',
  //     component: <EightTableView />,
  //     chartComponent: <NineChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '10',
  //     title: 'Drug Classes - Non Negative Results',
  //     subTitle: 'Results NON NEGATIVE',
  //     timeRange: 'today',
  //     component: <EightTableView />,
  //     chartComponent: <NineChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '11',
  //     title: 'Drug Classes - Invalid Results',
  //     subTitle: 'Results INVALID',
  //     timeRange: 'today',
  //     component: <EightTableView />,
  //     chartComponent: <NineChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '12',
  //     title: 'Collector Performance',
  //     subTitle: 'Processed Tests',
  //     timeRange: 'today',
  //     component: <TwelveTableView />,
  //     chartComponent: <TwelveChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '13',
  //     title: 'Collector Rankings',
  //     subTitle: 'Rankings',
  //     timeRange: 'today',
  //     component: <TirteenTableView />,
  //     chartComponent: <TirteenChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '14',
  //     title: 'Patient',
  //     subTitle: 'Appointments',
  //     timeRange: 'today',
  //     component: <FourteenTableView />,
  //     chartComponent: <FourteenChartView timeRange={timeRange} />
  //   },
  //   {
  //     key: '15',
  //     title: 'Patient Communication A',
  //     subTitle: 'Reports',
  //     timeRange: 'today',
  //     component: <FiveteenTableView />,
  //     chartComponent: <FiveteenChartView timeRange={timeRange} />
  //   }
  // ]

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
      <FirstView />
      {/* <SecondView /> */}
      {/* <ThreeView />
      <FourView />
      <FiveView />
      <SixView />
      <SevenView />
      <EightView /> */}
      {/* <NineView />
      <TenView />
      <ElevenView />
      <TwelveView /> */}
      {/* <ThirteenView />
      <FourteenView />
      <FiveteenView /> */}
    </Container>
  )
}

export default Discover
