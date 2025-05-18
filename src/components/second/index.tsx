import React from 'react'
import styled from 'styled-components'
import Line from '../line'
import ReTable from '../ReTable'

const ContentRable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
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
`

const RightContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 283px;
`

type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

interface TableData {
  time: string
  info: {
    name: string
    data: number[]
  }[]
}

export interface SecondViewProps {
  timeRange: TimeRangeType
  tableData: TableData[][]
  onChangeTable: (data: TableData[][]) => void
}

const SecondTableView: React.FC<SecondViewProps> = ({
  timeRange,
  tableData,
  onChangeTable
}) => {
  const getTableData = (data: TableData[]) => {
    return data.map(item => 
      item.info.map(info => info.data[0])
    )
  }

  return (
    <ContentRable>
      <LeftContent>
        {tableData[0] && (
          <ReTable 
            rows={3} 
            columns={6} 
            initialData={getTableData(tableData[0])} 
          />
        )}
      </LeftContent>
      <MiddleContent>
        {tableData[0] && (
          <>
            <ReTable rows={3} columns={6} initialData={getTableData(tableData[0])} />
            <Line margin="19px 0" />
            <ReTable rows={3} columns={6} initialData={getTableData(tableData[0])} />
            <Line margin="19px 0" />
            <ReTable rows={3} columns={6} initialData={getTableData(tableData[0])} />
          </>
        )}
      </MiddleContent>
      <RightContent>
        {tableData[0] && (
          <ReTable rows={3} columns={4} />
        )}
      </RightContent>
    </ContentRable>
  )
}

export default SecondTableView
