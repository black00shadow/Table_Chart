import React from 'react'

import styled from 'styled-components'
import Line from '../line'
import FirstTable from './table'
import ReTable from '../ReTable'
import OneTabe from '../table'
import tableData from './table.json'
const { initialDataFirstMid3 } = tableData
const ContentRable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 11px 0;
  margin-bottom: 20px;
  width: 100%;
  // height: 600px;
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
  border-bottom: 1px solid blue;
  border-right: 1px solid blue;
  height: 100%;
  flex: 1;
  // padding-top: 32px;
`
const RightContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 283px;
`
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'
export interface SecondViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
  onChangeTable: (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  ) => void
}
const FirstTableView: React.FC<SecondViewProps> = ({
  timeRange,
  tableData,
  onChangeTable
}) => {
  const onChangeFirstTable = (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  ) => {
    onChangeTable(data)
  }
  return (
    <ContentRable>
      <LeftContent>
        <FirstTable
          timeRange={timeRange}
          tableData={tableData}
          onChange={onChangeFirstTable}
        />
      </LeftContent>
      <MiddleContent>
        {tableData ? (
          <>
            <ReTable rows={3} columns={6} initialData={initialDataFirstMid3} />
            <Line margin="19px 0" />
            <ReTable rows={3} columns={6} initialData={initialDataFirstMid3} />
            <Line margin="19px 0" />
            <ReTable rows={3} columns={6} initialData={initialDataFirstMid3} />
          </>
        ) : (
          <></>
        )}
      </MiddleContent>
      <RightContent>
        {tableData ? (
          <>
            <ReTable rows={3} columns={4} />
          </>
        ) : (
          <></>
        )}
      </RightContent>
    </ContentRable>
  )
}
export default FirstTableView
