import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
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
    name: '',
    data: [21],
    color: '#A193FF'
  },
  {
    name: '',
    data: [11],
    color: '#FEA8A1'
  },
  {
    name: '',
    data: [15],
    color: '#62CFE5'
  },
  {
    name: '',
    data: [10],
    color: '#FFBE70'
  }
]
const xAxisData = ['']

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

// 定义图表数据类型
type ChartDataType = {
  name: string
  data: number[]
  color: string
}[]

// 根据不同时间范围生成图表数据
const generateChartData = (timeRange: TimeRangeType) => {
  // 左侧图表数据
  let leftChartData = [...data]
  // 右侧图表数据
  let midChartData = [...threChartMidData]
  // 右侧图表X轴数据
  let midChartXAxisData = [...xAxisThreChartMidData]

  switch (timeRange) {
    case 'today':
      leftChartData = [
        { name: '', data: [18], color: '#A193FF' },
        { name: '', data: [8], color: '#FEA8A1' },
        { name: '', data: [12], color: '#62CFE5' },
        { name: '', data: [6], color: '#FFBE70' }
      ]

      midChartData = [
        { name: 'series1', data: [8, 12, 6], color: '#A193FF' },
        { name: 'series2', data: [10, 8, 4], color: '#FEA8A1' },
        { name: 'series3', data: [5, 7, 9], color: '#62CFE5' }
      ]

      midChartXAxisData = ['Morning', 'Noon', 'Afternoon']
      break

    case 'currentWeek':
      leftChartData = [
        { name: '', data: [22], color: '#A193FF' },
        { name: '', data: [12], color: '#FEA8A1' },
        { name: '', data: [18], color: '#62CFE5' },
        { name: '', data: [9], color: '#FFBE70' }
      ]

      midChartData = [
        { name: 'series1', data: [12, 15, 10, 8, 14], color: '#A193FF' },
        { name: 'series2', data: [8, 10, 12, 15, 9], color: '#FEA8A1' },
        { name: 'series3', data: [6, 8, 10, 7, 5], color: '#62CFE5' }
      ]

      midChartXAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      break

    case 'currentMonth':
      leftChartData = [
        { name: '', data: [25], color: '#A193FF' },
        { name: '', data: [15], color: '#FEA8A1' },
        { name: '', data: [20], color: '#62CFE5' },
        { name: '', data: [12], color: '#FFBE70' }
      ]

      midChartData = [
        { name: 'series1', data: [15, 18, 20, 17], color: '#A193FF' },
        { name: 'series2', data: [12, 14, 16, 13], color: '#FEA8A1' },
        { name: 'series3', data: [8, 10, 12, 9], color: '#62CFE5' }
      ]

      midChartXAxisData = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      break

    case 'currentYear':
      leftChartData = [
        { name: '', data: [30], color: '#A193FF' },
        { name: '', data: [20], color: '#FEA8A1' },
        { name: '', data: [25], color: '#62CFE5' },
        { name: '', data: [15], color: '#FFBE70' }
      ]

      midChartData = [
        { name: 'series1', data: [20, 22, 25, 28], color: '#A193FF' },
        { name: 'series2', data: [15, 18, 20, 22], color: '#FEA8A1' },
        { name: 'series3', data: [10, 12, 15, 18], color: '#62CFE5' }
      ]

      midChartXAxisData = ['Q1', 'Q2', 'Q3', 'Q4']
      break

    default:
      // 默认数据保持不变
      break
  }

  return { leftChartData, midChartData, midChartXAxisData }
}

const Table: React.FC<Props> = ({ timeRange, tableData }) => {
  // // 使用useState管理图表数据
  const [chartData, setChartData] = useState(data)
  const [midChartData, setMidChartData] = useState(threChartMidData)
  const [xAxisMidData, setXAxisMidData] = useState(xAxisThreChartMidData)

  useEffect(() => {
    // 根据timeRange更新图表数据
    const { leftChartData, midChartData, midChartXAxisData } =
      generateChartData(timeRange)
    setChartData(leftChartData)
    setMidChartData(midChartData)
    setXAxisMidData(midChartXAxisData)
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
      content: 'Non Negative',
      dataName: [],
      series: []
    },
    {
      content: 'Invalid',
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

  return (<></>
    // <ContentRable>
    //   <LeftContent>
    //     <TableWrapper>
    //       {_tableData.map((item, idx) => {
    //         return (
    //           <>
    //             <MainCcontent>
    //               <LeftContent1>
    //                 <Arrow content={item.content} backgroundColor="#176CC9" />
    //                 {tableData[idx].map((it) => {
    //                   if (it.time === timeRange) {
    //                     return it.info.map((i) => {
    //                       return (
    //                         <>
    //                           <Arrow content={i.name} key={i.name} />
    //                         </>
    //                       )
    //                     })
    //                   } else {
    //                     return <></>
    //                   }
    //                 })}
    //               </LeftContent1>
    //               <RightContent>
    //                 <BarEcharts
    //                   direction="horizontal"
    //                   data={item.series}
    //                   xAxisData={item.dataName}
    //                   isStack={false}
    //                   barWidth={30}
    //                   height="200px"
    //                 />
    //               </RightContent>
    //             </MainCcontent>
    //           </>
    //         )
    //       })}
    //     </TableWrapper>
    //   </LeftContent>
    //   <MiddleContent>
    //     <BarEcharts
    //       direction="vertical"
    //       data={midChartData}
    //       xAxisData={xAxisMidData}
    //       isStack={false}
    //       barWidth={20}
    //       height="200px"
    //     />
    //     <BarEcharts
    //       direction="vertical"
    //       data={midChartData}
    //       xAxisData={xAxisMidData}
    //       isStack={false}
    //       barWidth={20}
    //       height="200px"
    //     />
    //     <BarEcharts
    //       direction="vertical"
    //       data={midChartData}
    //       xAxisData={xAxisMidData}
    //       isStack={false}
    //       barWidth={20}
    //       height="200px"
    //     />
    //   </MiddleContent>
    // </ContentRable>
  )
}

export default memo(Table)
