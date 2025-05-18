import React from 'react'

import styled from 'styled-components'
import Line from '../line'
import Table from './table'
import ReTable from '../ReTable'
import tableData from './table.json'
const { initialDataFirstMid2, initialDataFirstMid3 } = tableData
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
export interface ViewProps {
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
const TableView: React.FC<ViewProps> = ({
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
        <Table
          timeRange={timeRange}
          tableData={tableData}
          onChange={onChangeFirstTable}
        />
      </LeftContent>
      <MiddleContent>
        <Line margin="10px 0" color="#ffffff" />
        <ReTable rows={7} columns={6} initialData={initialDataFirstMid2} />
        <Line margin="19px 0" color="#ffffff" />
        <ReTable rows={2} columns={6} initialData={initialDataFirstMid3} />
      </MiddleContent>
      <RightContent>
        <ReTable rows={3} columns={4} />
      </RightContent>
    </ContentRable>
  )
}
export default TableView
