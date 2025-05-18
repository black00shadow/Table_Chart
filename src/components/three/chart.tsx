import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
import Line from '../line'
const ContentRable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 11px 0;s
  margin-bottom: 20px;
  width: 100%;
  // heiht: 600px;
  height: 100%;
`
const LeftContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
  width: 38%;
  height: 100%;
`
const MiddleContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 62%;
  // flex: 1;
  // padding-top: 32px;
`
const TableWrapper = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 0 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  padding: 10px 0 0 10px;
`

const LeftContent1 = styled.div`
  width: 25%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  flex-wrap: wrap;
`

const RightContent = styled.div`
  // height: 100%;
  // padding: 16px;
  // width: 65%;
  flex: 1;
`
const data = [
  {
    name: 'Average',
    data: [21],
    color: '#A193FF'
  },
  {
    name: 'Shortest',
    data: [11],
    color: '#FEA8A1'
  },
  {
    name: 'Longest',
    data: [15],
    color: '#62CFE5'
  }
]

// const xAxisData = ['']

const threChartMidData = [
  {
    name: 'series1',
    data: [11, 10, 5],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15, 10, 5],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [2, 10, 7],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['2017', '2018', '2019']
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

export interface ThreeViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
}

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType) => {
  // 左侧图表数据
  let chartData = [...data]
  // 右侧图表数据
  let midChartData = [...threChartMidData]
  // X轴数据
  let xAxisMidData = [...xAxisThreChartMidData]

  switch (timeRange) {
    case 'today':
      chartData = [
        { name: 'Average', data: [18], color: '#A193FF' },
        { name: 'Shortest', data: [8], color: '#FEA8A1' },
        { name: 'Longest', data: [25], color: '#62CFE5' }
      ]
      midChartData = [
        { name: 'series1', data: [8, 12, 6], color: '#A193FF' },
        { name: 'series2', data: [10, 8, 4], color: '#FEA8A1' },
        { name: 'series3', data: [5, 7, 9], color: '#62CFE5' }
      ]
      xAxisMidData = ['Morning', 'Noon', 'Afternoon']
      break
    case 'currentWeek':
      chartData = [
        { name: 'Average', data: [22], color: '#A193FF' },
        { name: 'Shortest', data: [12], color: '#FEA8A1' },
        { name: 'Longest', data: [30], color: '#62CFE5' }
      ]
      midChartData = [
        { name: 'series1', data: [12, 15, 10, 8, 14], color: '#A193FF' },
        { name: 'series2', data: [8, 10, 12, 15, 9], color: '#FEA8A1' },
        { name: 'series3', data: [6, 8, 10, 7, 5], color: '#62CFE5' }
      ]
      xAxisMidData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      break
    case 'currentMonth':
      chartData = [
        { name: 'Average', data: [25], color: '#A193FF' },
        { name: 'Shortest', data: [15], color: '#FEA8A1' },
        { name: 'Longest', data: [35], color: '#62CFE5' }
      ]
      midChartData = [
        { name: 'series1', data: [15, 18, 20, 17], color: '#A193FF' },
        { name: 'series2', data: [12, 14, 16, 13], color: '#FEA8A1' },
        { name: 'series3', data: [8, 10, 12, 9], color: '#62CFE5' }
      ]
      xAxisMidData = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      break
    case 'currentYear':
      chartData = [
        { name: 'Average', data: [30], color: '#A193FF' },
        { name: 'Shortest', data: [20], color: '#FEA8A1' },
        { name: 'Longest', data: [40], color: '#62CFE5' }
      ]
      midChartData = [
        {
          name: 'series1',
          data: [20, 22, 30, 32],
          color: '#A193FF'
        },
        {
          name: 'series2',
          data: [15, 18, 20, 28],
          color: '#FEA8A1'
        },
        {
          name: 'series3',
          data: [10, 12, 20, 22],
          color: '#62CFE5'
        }
      ]
      xAxisMidData = ['Jan', 'Feb', 'Mar', 'Apr']
      break
  }

  return { chartData, midChartData, xAxisMidData }
}

const Table: React.FC<ThreeViewProps> = ({ timeRange, tableData }) => {
  const [chartTableData, setChartData] = useState(data)
  const [midChartData, setMidChartData] = useState(threChartMidData)
  const [xAxisMidData, setXAxisMidData] = useState(xAxisThreChartMidData)

  useEffect(() => {
    const { chartData, midChartData, xAxisMidData } =
      generateChartData(timeRange)
    setChartData(chartData)
    setMidChartData(midChartData)
    setXAxisMidData(xAxisMidData)
  }, [timeRange])

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'All Tests',
      dataName: [],
      series: []
    },
    {
      content: 'Rapid Urine Drug S.',
      dataName: [],
      series: []
    },
    {
      content: 'Saliva Drug Screen',
      dataName: [],
      series: []
    },
    {
      content: 'Urine Drug Test',
      dataName: [],
      series: []
    },
    {
      content: 'Breath Alcohol Test',
      dataName: [],
      series: []
    }
  ]

  tableData.forEach((item, index) => {
    item.forEach((it, id) => {
      if (timeRange === it.time) {
        it.info.forEach((i, idx) => {
          _tableData[index].dataName.push(i.name)
          _tableData[index].series.push({
            name: i.name,
            data: i.data
          })
        })
      }
    })
  })
  return (
    <ContentRable>
      <LeftContent>
        <TableWrapper>
          {_tableData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    <Arrow content={item.content} backgroundColor="#176CC9" />
                    {tableData[idx].map((it) => {
                      if (it.time === timeRange) {
                        return it.info.map((i) => {
                          return (
                            <>
                              <Arrow content={i.name} key={i.name} />
                            </>
                          )
                        })
                      } else {
                        return <></>
                      }
                    })}
                  </LeftContent1>
                  <RightContent>
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={30}
                      height="200px"
                    />
                  </RightContent>
                </MainCcontent>
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <BarEcharts
          direction="horizontal"
          data={midChartData}
          xAxisData={xAxisMidData}
          isStack={true}
          height="200px"
        />
        <Line margin="30px 0" />
        <BarEcharts
          direction="horizontal"
          data={midChartData}
          xAxisData={xAxisMidData}
          isStack={true}
          height="200px"
        />
        <Line margin="30px 0" />
        <BarEcharts
          direction="horizontal"
          data={midChartData}
          xAxisData={xAxisMidData}
          isStack={true}
          height="200px"
        />
        <Line margin="30px 0" />
        <BarEcharts
          direction="horizontal"
          data={midChartData}
          xAxisData={xAxisMidData}
          isStack={true}
          height="200px"
        />
        <Line margin="30px 0" />
        <BarEcharts
          direction="horizontal"
          data={midChartData}
          xAxisData={xAxisMidData}
          isStack={true}
          height="200px"
        />
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Table)
