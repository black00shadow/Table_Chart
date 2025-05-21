import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import ReTable from '../table'
const TableWrapper = styled.div`
  width: 100%;
  // height: 100%;
  padding: 0 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  // height: 100%;
  padding: 16px;
  display: flex;
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
  width: 65%;
  // flex: 1;
`


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
const Table: React.FC<ThreeViewProps> = ({
  timeRange,
  tableData,
  onChange
}) => {
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
    }[]
  ) => {
    if (tbdata && tbdata.length > 0) {
      tbdata[0] = data
      onChange(tbdata)
    }
  }
  useEffect(() => {
    setTbdata(tableData)
  }, [tableData])

  return (
    <TableWrapper>
      <MainCcontent>
        <LeftContent1>
          {/* <Arrow content="Rail (Cat 1)" /> */}
          {/* <Arrow content="Rail (Cat 1)" /> */}
          {/* <Arrow content="Rail (Cat 1)" /> */}
          {/* <Arrow content="Rail (Cat 1)" /> */}
        </LeftContent1>
        <RightContent>
          {/* <ReTable rows={3} columns={4} initialData={initialData1} /> */}
          {/* {tbdata?.[0] ? (
            <ReTable
              rows={4}
              columns={4}
              initialData={tbdata[0]}
              onDataChange={onDataChange}
            />
          ) : (
            <></>
          )} */}
        </RightContent>
      </MainCcontent>
    </TableWrapper>
  )
}

export default memo(Table)
