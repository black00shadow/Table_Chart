import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import ReTable from '../table'

const TableWrapper = styled.div`
  width: 100%;
  padding-left: 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
`

const LeftContent1 = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  
  & > div {
    width: 100%;
  }
  
  & > div:nth-child(3n) {
    margin-bottom: 24px;
  }
`

const RightContent = styled.div`
  width: 65%;
  margin-left: 16px;
`

type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'
export interface ViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
  onChange: (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  ) => void
}

const Table: React.FC<ViewProps> = ({ timeRange, tableData, onChange }) => {
  const [tbdata, setTbdata] = useState<
    {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  >()

  const onDataChange = (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[],
    index: number
  ) => {
    if (tbdata && tbdata.length > 0) {
      tbdata[index] = data
      onChange(tbdata)
    }
  }

  const _tableData: {
    content: string
    dataName: string[]
    series: any[]
  }[] = [
    {
      content: 'All Tests',
      dataName: [],
      series: []
    }
  ]

  useEffect(() => {
    setTbdata(tableData)
  }, [tableData])
  
  return (<></>
    // <TableWrapper>
    //   {_tableData.map((item, idx) => (
    //     <MainCcontent key={idx}>
    //       <LeftContent1>
    //         {tbdata?.[idx] ? (
    //           tbdata[idx].map((it) => {
    //             if (it.time === timeRange) {
    //               return it.info.map((i) => (
    //                 <div key={i.name}>
    //                   <Arrow content={i.name} />
    //                 </div>
    //               ))
    //             }
    //             return null
    //           })
    //         ) : null}
    //       </LeftContent1>
    //       <RightContent>
    //         {/* {tbdata?.[idx] ? (
    //           <ReTable
    //             rows={3}
    //             columns={3}
    //             initialData={tbdata[idx]}
    //             onDataChange={(data) => onDataChange(data, idx)}
    //           />
    //         ) : null} */}
    //       </RightContent>
    //     </MainCcontent>
    //   ))}
    // </TableWrapper>
  )
}

export default memo(Table)
