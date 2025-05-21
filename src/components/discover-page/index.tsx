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
import TableView from './table_view'
import { getData } from '@/api/getData'

import titleIcon from '@/assets/img/4.png'
import stickyImage from '@/assets/img/sticky.png'
import tableIcon from '@/assets/img/table.png'
import chartIcon from '@/assets/img/chart.png'
import { TableType } from '@/mock/modules/mockData'
import { TableData } from './table'
import chart from './chart'

export const getImageSize = (imageSrc:string) => {
      const img = new Image();
      img.src = imageSrc
      const width = img.width;
      const height = img.height;
      return {width, height};
}

const { width: stickyImageWidth, height: stickyImageHeight} = getImageSize(stickyImage);

const { width: tableIconWidth, height: tableIconHeight} = getImageSize(tableIcon);

const { width: chartIconWidth, height: chartIconHeight} = getImageSize(chartIcon);

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

const TableMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  border: 1px solid blue;
  width: 38%;
  height: 100%;
  // padding: 10px;
`

const ChartMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  border: 1px solid blue;
  width: 38%;
  height: 100%;
  // padding: 10px;
`

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TimeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  border: 1px solid blue;
  border-top: none;
  width: 38%;
  height: 100%;
  // padding: 10px;
`
const SubMenu = styled.div`
  color: #333333;
  padding-left: 10px;
`
const TimeButton = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  color: #0A1766;
  font-size: 16px;
  margin-right: 32px;
  cursor: pointer;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  outline: none;
  box-shadow: none;
  padding: 0;
  &:last-child {
    margin-right: 0;
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
  flex-direction: column;
  gap: 2px;
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;

  .ant-picker {
    width: 100%;
  }

  .date-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .date-label {
    min-width: 40px;
  }
`
// const TitleIcon = styled.div`
// width: ${titleIconWidth}px;
// height: ${titleIconHeight}px;
// background-image: url(${titleIcon});
// background-size: contain;
// background-repeat: no-repeat;
// background-position: center;
// cursor: pointer;
// margin-right: 10px;
// `
const TitleIcon = ({iconUrl}:any) => {

  const { width, height } = getImageSize(iconUrl);
  const IconTpl = styled.div`
    width: ${width}px;
    height: ${height}px;
    background-image: url(${iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-right: 10px;
  `;
  return <IconTpl/>
} 
const Sticky = ({iconUrl}:any) => {
  const { width, height } = getImageSize(iconUrl);

  const IconTpl = styled.div`
    width: ${width / 2}px;
    height: ${height / 2}px;
    background-image: url(${iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  `
  return <IconTpl/>
}
const TableIcon = ({iconUrl}:any) => {

  const { width, height } = getImageSize(iconUrl);
  const IconTpl = styled.div`
    width: ${width}px;
    height: ${height}px;
    background-image: url(${iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  `;

  return <IconTpl/>
} 

const ChartIcon = ({iconUrl}:any) => {

  const { width, height } = getImageSize(iconUrl);
  const IconTpl = styled.div`
    width: ${width}px;
    height: ${height}px;
    background-image: url(${iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  `;

  return <IconTpl/>
} 
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

export interface ChartContent {
  content: string;
  dataName: string[];
  series: any[];
}

export interface DiscoverData{
  iconUrl: string;
  tableTitle: string;
  subTitle: string;
  collectors: string[];
  reqType: TableType;
  resType: string;
  contentData: ChartContent[];
  yearlyData: number[][][];
}

const Discover: React.FC<DiscoverData> = (data: DiscoverData) => {

  const [displayMode, setDisplayMode] = useState<'table' | 'chart'>('table')
  const [timeRange, setTimeRange] = useState<TimeRangeType>('today')
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)
  const [tableData, setTableData] = useState<TableData>([])
  const [contentNames, setcontentNames] = useState<string[]>([])
  const [selectedCollector, setSelectedCollector] = useState('');

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
    data.contentData.map((item) => {
      setcontentNames((prev) => [...prev, item.content])
    })

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
      type: data.reqType
    })
    setTableData(res.data[data.resType])
  }

  return (
    <Container>
      <MainContent>
        <Header>
          <TitleIcon iconUrl={data.iconUrl} />
          <PageTitle>{data.tableTitle}</PageTitle>
          <Options>
            <Space>
              <IconBox
                $isActive={displayMode === 'table'}
                onClick={() => setDisplayMode('table')}
              >
                <TableIcon iconUrl = {tableIcon} />
              </IconBox>
              <IconBox
                $isActive={displayMode === 'chart'}
                onClick={() => setDisplayMode('chart')}
              >
                <ChartIcon iconUrl = {chartIcon}/>
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
              <Sticky iconUrl = {stickyImage}
                onClick={() => {
                  alert('📌 Sticky (fixed at the top)')
                }}
              />
            </Space>
          </Options>
        </Header>

        <OptionsContainer>
          <TimeButtons style={{ width: '42%', boxShadow: 'none', background: 'none', alignItems: 'center', justifyContent: 'flex-start', padding: 0  }}>
            <div
              style={{
                fontWeight: 'bold',
                color: '#0A1766',
                fontSize: 18,
                marginLeft: 30,
                marginRight: 30,
                width: '35%'
              }}
            >
              {data.subTitle}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '5%' }}>
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

          <YearViewContainer style={{ width: displayMode === 'table' ? '' : '58%' }}>
            <YearView
              onViewChange={(view) => console.log('View changed to:', view)}
              onYearChange={(year) => console.log('Year changed to:', year)}
            />
          </YearViewContainer>

          <DateRangeContainer style={{ display: displayMode === 'table' ? '' : 'none', width: '10%'}}>
            <div className="date-row" style = {{marginTop: '10px', marginLeft: 10, marginRight: 10}}>
              <span className="date-label">From</span>
              <DatePicker
                onChange={(dates) => {
                  if (dates) {
                    // setDateRange([
                    //   dates[0]?.format('YYYY-MM-DD') || '',
                    //   dates[1]?.format('YYYY-MM-DD') || ''
                    // ])
                  } else {
                    // setDateRange(null)
                  }
                }}
              />
            </div>
            <div className="date-row" style = {{marginLeft: 10, marginRight: 10}}>
              <span className="date-label">To</span>
              <DatePicker
                onChange={(dates) => {
                  if (dates) {
                    // setDateRange([
                    //   dates[0]?.format('YYYY-MM-DD') || '',
                    //   dates[1]?.format('YYYY-MM-DD') || ''
                    // ])
                  } else {
                    // setDateRange(null)
                  }
                }}
              />
            </div>
          </DateRangeContainer>
        </OptionsContainer>
        {data.collectors.length !== 0 && (
          <>
          <div style={{borderRight:'1px solid blue'}}>
            <div style={{display: 'flex', backgroundColor: '#E6F7FA', border: '1px solid blue', width: '42%', float:'left'}}>
              <div style={{margin: 10, width: '20%'}}>Collectors</div>
              <div style={{width: '80%', alignContent: 'center'}}>
                <Select
                  value={selectedCollector}
                  style={{ width: '95%' }}
                  onChange={setSelectedCollector}
                >
                  {data.collectors.map((collector) => (
                    <Select.Option key={collector} value={collector}>
                      {collector}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
            <div style={{float: 'right', height: '100%', width: '10%', borderLeft:displayMode === 'table' ? '1px solid blue' : ''}}></div>
          </div>
          </>
        )}
        {displayMode === 'table' ? (
          <TableView
            timeRange={timeRange}
            collectors={data.collectors}
            contentNames={contentNames}
            tableData={tableData}
            yearlyData={data.yearlyData}
            onChangeTable={onChangeTable}/>
        ) : (
          <ChartView
            timeRange={timeRange}
            tableData={tableData}
            contentData={data.contentData}
            yearlyData = {data.yearlyData}
            reqType={data.reqType}
            />
        )}
      </MainContent>
    </Container>
  )
}

export default Discover
