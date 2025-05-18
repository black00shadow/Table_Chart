import React, { useMemo } from 'react'

import styled from 'styled-components'
import Line from '../line'
import FirstTable from './table'
import ReTable from '../ReTable'
import tableData from './table.json'

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

const TopBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  margin-bottom: 20px;
`

const TopBox = styled.input`
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  background: white;
`

const TableContainer = styled.div`
  width: 85%;
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

const FirstTableView: React.FC<ViewProps> = ({
  timeRange,
  tableData: propTableData,
  onChangeTable
}) => {
  const initialData = useMemo(() => {
    const timeMap = {
      today: 'today',
      currentWeek: 'week',
      currentMonth: 'month',
      currentYear: 'year'
    }
    
    // 尝试找到对应时间范围的数据
    const matchingData = propTableData[0]?.find(item => item.time === timeMap[timeRange])
    if (matchingData) {
      return matchingData.info.map(item => item.data)
    }
    // 如果找不到，返回第一组数据
    return propTableData[0]?.[0]?.info.map(item => item.data) || []
  }, [timeRange, propTableData])

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
          tableData={propTableData}
          onChange={onChangeFirstTable}
        />
      </LeftContent>
      <MiddleContent>
        <ReTable rows={9} columns={6} initialData={initialData} />
      </MiddleContent>
    </ContentRable>
  )
}
export default FirstTableView
