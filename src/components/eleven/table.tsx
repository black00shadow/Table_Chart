import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import ReTable from '../ReTable'

const TableWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`

const MainContent = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
`

const LeftContent = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: wrap;
`

const RightContent = styled.div`
  width: 65%;
`

type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

interface ViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
  onChange: (data: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]) => void
}

const Table: React.FC<ViewProps> = ({ timeRange, tableData, onChange }) => {
  const [tbdata, setTbdata] = useState(tableData)

  const getTableData = (data: typeof tableData[0]) => {
    // 根据不同的时间范围返回相应的数据
    const timeMap = {
      today: 'today',
      currentWeek: 'week',
      currentMonth: 'month',
      currentYear: 'year'
    }
    
    // 如果找不到对应时间的数据，返回第一组数据
    const matchingData = data?.find(item => item.time === timeMap[timeRange])
    if (matchingData) {
      return matchingData.info.map(item => item.data)
    }
    // 如果找不到匹配的时间范围，返回today的数据
    const todayData = data?.find(item => item.time === 'today')
    return todayData?.info.map(item => item.data) || []
  }

  const formatDataForSave = (data: number[][]): typeof tableData[0] => {
    const timeMap = {
      today: 'today',
      currentWeek: 'week',
      currentMonth: 'month',
      currentYear: 'year'
    }
    
    return [{
      time: timeMap[timeRange],
      info: data.map((row, index) => ({
        name: tbdata[0]?.[0]?.info[index]?.name || `Row ${index + 1}`,
        data: row
      }))
    }]
  }

  useEffect(() => {
    setTbdata(tableData)
  }, [tableData])

  return (<></>
    // <TableWrapper>
    //   <MainContent>
    //     <LeftContent>
    //       {tbdata[0]?.map(item => (
    //         item.time === 'today' ? (
    //           item.info.map(i => (
    //             <Arrow key={i.name} content={i.name} />
    //           ))
    //         ) : null
    //       ))}
    //     </LeftContent>
    //     <RightContent>
    //       {tbdata[0] && (
    //         <ReTable
    //           rows={3}
    //           columns={4}
    //           initialData={getTableData(tbdata[0])}
    //           onDataChange={(data) => {
    //             const newData = [...tbdata]
    //             newData[0] = formatDataForSave(data)
    //             onChange(newData)
    //           }}
    //         />
    //       )}
    //     </RightContent>
    //   </MainContent>
    // </TableWrapper>
  )
}

export default Table 