import React, { memo, useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
import PieEcharts from '../pie/pie-first'
import LineChart from '../line-chart'
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
  flex-direction: column;
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

// 定义TimeRange类型
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

// 定义Props接口
interface Props {
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
  // 默认数据 - 折线图上部分
  let upperLineData = [
    {
      name: '2017',
      data: [1000, 2300, 2000, 2300, 1200, 2300],
      color: '#62CFE5',
      smooth: true
    },
    {
      name: '2018',
      data: [900, 2100, 1900, 2100, 1300, 2200],
      color: '#FEA8A1',
      smooth: true
    },
    {
      name: '2019',
      data: [800, 3000, 3000, 2200, 1400, 2300],
      color: '#A193FF',
      smooth: true
    }
  ]

  const upperLinexAxisData = ['AMP', 'BZO', 'COC', 'MET', 'OXY', 'THC']

  // 默认数据 - 折线图下部分
  let lowerLineData = [
    {
      name: '2017',
      data: [1200, 2300],
      color: '#A193FF',
      smooth: true
    },
    {
      name: '2018',
      data: [1400, 100],
      color: '#FEA8A1',
      smooth: true
    },
    {
      name: '2019',
      data: [1700, 2900],
      color: '#62CFE5',
      smooth: true
    }
  ]

  const lowerLineXAxisData = ['Cannabinoid', 'Cathinone']

  // 默认数据 - 柱状图
  let barData = [
    { name: 'AMP', data: [2500], color: '#176CC9' },
    { name: 'BZO', data: [2200], color: '#A193FF' },
    { name: 'COC', data: [1900], color: '#FEA8A1' },
    { name: 'MET', data: [1600], color: '#62CFE5' },
    { name: 'OPI', data: [1300], color: '#FFBE70' },
    { name: 'OXY', data: [1000], color: '#66C2A5' },
    { name: 'THC', data: [700], color: '#176CC9' }
  ]

  // 默认数据 - 饼图
  let pieData = [
    { name: 'Cannabinoid', value: 60, color: '#176CC9' },
    { name: 'Cathinone', value: 40, color: '#A193FF' }
  ]

  // 根据timeRange生成不同的数据
  switch (timeRange) {
    case 'today':
      upperLineData = [
        {
          name: '2017',
          data: [800, 1800, 1600, 1900, 1000, 1800],
          color: '#62CFE5',
          smooth: true
        },
        {
          name: '2018',
          data: [700, 1600, 1500, 1700, 1100, 1700],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [600, 2400, 2400, 1800, 1200, 1900],
          color: '#A193FF',
          smooth: true
        }
      ]

      lowerLineData = [
        {
          name: '2017',
          data: [900, 1800],
          color: '#A193FF',
          smooth: true
        },
        {
          name: '2018',
          data: [1100, 80],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [1300, 2300],
          color: '#62CFE5',
          smooth: true
        }
      ]

      barData = [
        { name: 'AMP', data: [2000], color: '#176CC9' },
        { name: 'BZO', data: [1800], color: '#A193FF' },
        { name: 'COC', data: [1500], color: '#FEA8A1' },
        { name: 'MET', data: [1300], color: '#62CFE5' },
        { name: 'OPI', data: [1000], color: '#FFBE70' },
        { name: 'OXY', data: [800], color: '#66C2A5' },
        { name: 'THC', data: [500], color: '#176CC9' }
      ]

      pieData = [
        { name: 'Cannabinoid', value: 55, color: '#176CC9' },
        { name: 'Cathinone', value: 45, color: '#A193FF' }
      ]
      break

    case 'currentWeek':
      upperLineData = [
        {
          name: '2017',
          data: [1200, 2500, 2200, 2500, 1400, 2500],
          color: '#62CFE5',
          smooth: true
        },
        {
          name: '2018',
          data: [1100, 2300, 2100, 2300, 1500, 2400],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [1000, 3200, 3200, 2400, 1600, 2500],
          color: '#A193FF',
          smooth: true
        }
      ]

      lowerLineData = [
        {
          name: '2017',
          data: [1400, 2500],
          color: '#A193FF',
          smooth: true
        },
        {
          name: '2018',
          data: [1600, 120],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [1900, 3100],
          color: '#62CFE5',
          smooth: true
        }
      ]

      barData = [
        { name: 'AMP', data: [2700], color: '#176CC9' },
        { name: 'BZO', data: [2400], color: '#A193FF' },
        { name: 'COC', data: [2100], color: '#FEA8A1' },
        { name: 'MET', data: [1800], color: '#62CFE5' },
        { name: 'OPI', data: [1500], color: '#FFBE70' },
        { name: 'OXY', data: [1200], color: '#66C2A5' },
        { name: 'THC', data: [900], color: '#176CC9' }
      ]

      pieData = [
        { name: 'Cannabinoid', value: 65, color: '#176CC9' },
        { name: 'Cathinone', value: 35, color: '#A193FF' }
      ]
      break

    case 'currentMonth':
      upperLineData = [
        {
          name: '2017',
          data: [1400, 2700, 2400, 2700, 1600, 2700],
          color: '#62CFE5',
          smooth: true
        },
        {
          name: '2018',
          data: [1300, 2500, 2300, 2500, 1700, 2600],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [1200, 3400, 3400, 2600, 1800, 2700],
          color: '#A193FF',
          smooth: true
        }
      ]

      lowerLineData = [
        {
          name: '2017',
          data: [1600, 2700],
          color: '#A193FF',
          smooth: true
        },
        {
          name: '2018',
          data: [1800, 140],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [2100, 3300],
          color: '#62CFE5',
          smooth: true
        }
      ]

      barData = [
        { name: 'AMP', data: [2900], color: '#176CC9' },
        { name: 'BZO', data: [2600], color: '#A193FF' },
        { name: 'COC', data: [2300], color: '#FEA8A1' },
        { name: 'MET', data: [2000], color: '#62CFE5' },
        { name: 'OPI', data: [1700], color: '#FFBE70' },
        { name: 'OXY', data: [1400], color: '#66C2A5' },
        { name: 'THC', data: [1100], color: '#176CC9' }
      ]

      pieData = [
        { name: 'Cannabinoid', value: 70, color: '#176CC9' },
        { name: 'Cathinone', value: 30, color: '#A193FF' }
      ]
      break

    case 'currentYear':
      upperLineData = [
        {
          name: '2017',
          data: [1600, 2900, 2600, 2900, 1800, 2900],
          color: '#62CFE5',
          smooth: true
        },
        {
          name: '2018',
          data: [1500, 2700, 2500, 2700, 1900, 2800],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [1400, 3600, 3600, 2800, 2000, 2900],
          color: '#A193FF',
          smooth: true
        }
      ]

      lowerLineData = [
        {
          name: '2017',
          data: [1800, 2900],
          color: '#A193FF',
          smooth: true
        },
        {
          name: '2018',
          data: [2000, 160],
          color: '#FEA8A1',
          smooth: true
        },
        {
          name: '2019',
          data: [2300, 3500],
          color: '#62CFE5',
          smooth: true
        }
      ]

      barData = [
        { name: 'AMP', data: [3100], color: '#176CC9' },
        { name: 'BZO', data: [2800], color: '#A193FF' },
        { name: 'COC', data: [2500], color: '#FEA8A1' },
        { name: 'MET', data: [2200], color: '#62CFE5' },
        { name: 'OPI', data: [1900], color: '#FFBE70' },
        { name: 'OXY', data: [1600], color: '#66C2A5' },
        { name: 'THC', data: [1300], color: '#176CC9' }
      ]

      pieData = [
        { name: 'Cannabinoid', value: 75, color: '#176CC9' },
        { name: 'Cathinone', value: 25, color: '#A193FF' }
      ]
      break

    default:
      // 默认数据保持不变
      break
  }

  return {
    upperLineData,
    upperLinexAxisData,
    lowerLineData,
    lowerLineXAxisData,
    barData,
    pieData
  }
}

const Chart: React.FC<Props> = ({ timeRange, tableData }) => {
  // 使用useState管理图表数据
  const [upperLineData, setUpperLineData] = useState([
    {
      name: '2017',
      data: [1000, 2300, 2000, 2300, 1200, 2300],
      color: '#62CFE5',
      smooth: true
    },
    {
      name: '2018',
      data: [900, 2100, 1900, 2100, 1300, 2200],
      color: '#FEA8A1',
      smooth: true
    },
    {
      name: '2019',
      data: [800, 3000, 3000, 2200, 1400, 2300],
      color: '#A193FF',
      smooth: true
    }
  ])

  const [upperLinexAxisData, setUpperLinexAxisData] = useState([
    'AMP',
    'BZO',
    'COC',
    'MET',
    'OXY',
    'THC'
  ])

  const [lowerLineData, setLowerLineData] = useState([
    {
      name: '2017',
      data: [1200, 2300],
      color: '#A193FF',
      smooth: true
    },
    {
      name: '2018',
      data: [1400, 100],
      color: '#FEA8A1',
      smooth: true
    },
    {
      name: '2019',
      data: [1700, 2900],
      color: '#62CFE5',
      smooth: true
    }
  ])

  const [lowerLineXAxisData, setLowerLineXAxisData] = useState([
    'Cannabinoid',
    'Cathinone'
  ])

  const [barData, setBarData] = useState([
    { name: 'AMP', data: [2500], color: '#176CC9' },
    { name: 'BZO', data: [2200], color: '#A193FF' },
    { name: 'COC', data: [1900], color: '#FEA8A1' },
    { name: 'MET', data: [1600], color: '#62CFE5' },
    { name: 'OPI', data: [1300], color: '#FFBE70' },
    { name: 'OXY', data: [1000], color: '#66C2A5' },
    { name: 'THC', data: [700], color: '#176CC9' }
  ])

  const [pieData, setPieData] = useState([
    { name: 'Cannabinoid', value: 60, color: '#176CC9' },
    { name: 'Cathinone', value: 40, color: '#A193FF' }
  ])

  // 使用useEffect监听timeRange变化并更新图表数据
  useEffect(() => {
    // 根据timeRange更新图表数据
    const {
      upperLineData: newUpperLineData,
      upperLinexAxisData: newUpperLinexAxisData,
      lowerLineData: newLowerLineData,
      lowerLineXAxisData: newLowerLineXAxisData,
      barData: newBarData,
      pieData: newPieData
    } = generateChartData(timeRange)

    setUpperLineData(newUpperLineData)
    setUpperLinexAxisData(newUpperLinexAxisData)
    setLowerLineData(newLowerLineData)
    setLowerLineXAxisData(newLowerLineXAxisData)
    setBarData(newBarData)
    setPieData(newPieData)
    console.log('timeRange', timeRange)
  }, [timeRange])

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'Negative',
      dataName: [],
      series: []
    },
    {
      content: 'Synthetic',
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
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Negative" backgroundColor="#176CC9" />
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={_tableData[0].series}
                xAxisData={_tableData[0].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Synthetic" backgroundColor="#176CC9" />
            </LeftContent1>
            <RightContent>
              <PieEcharts
                data={_tableData[1].series}
                height="300px"
                radius={['38%', '70%']}
                centerText="49"
                showPercentage={true}
                legendPosition="top"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        <LineChart
          data={upperLineData}
          xAxisData={upperLinexAxisData}
          height="300px"
          showSymbol={true}
          yAxisMax={3600}
          yAxisMin={0}
          yAxisInterval={600}
          smooth={true}
          legend={{
            show: true,
            bottom: 0,
            right: 30
          }}
        />
        <LineChart
          data={lowerLineData}
          xAxisData={lowerLineXAxisData}
          height="300px"
          showSymbol={true}
          yAxisMax={6800}
          yAxisMin={0}
          yAxisInterval={1700}
          smooth={true}
          legend={{
            show: true,
            bottom: 0,
            right: 30
          }}
        />
      </MiddleContent>
    </ContentRable>
  )
}

export default memo(Chart)
