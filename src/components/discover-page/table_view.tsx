import React, { useState } from 'react'

import styled from 'styled-components'
import Line from '../line'
import Table, { TableData, ViewProps } from './table'
import ReTable from '../ReTable'
import tableData from './table.json'
import { Select } from 'antd'
// const { initialDataFirstMid2, initialDataFirstMid3 } = tableData
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
  width: 42%;
  height: 100%;
`

const MiddleContent = styled.div`
  border-bottom: 1px solid blue;
  border-right: 1px solid blue;
  // width: 50%;
  height: 100%;
  flex: 1;
  // padding-top: 32px;
`
const RightContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 10%;
`

const TableView: React.FC<ViewProps> = ({
  contentNames,
  collectors,
  yearlyData,
  timeRange,
  tableData,
  onChangeTable
}) => {
  const onChangeFirstTable = (
    data: TableData
  ) => {
    onChangeTable(data)
  }
  return (
    <ContentRable>
      <LeftContent>
        <Table
          contentNames={contentNames}
          timeRange={timeRange}
          collectors={collectors}
          tableData={tableData}
          yearlyData={yearlyData}
          onChangeTable={onChangeFirstTable}/>
      </LeftContent>
      <MiddleContent>
      {contentNames.map((name,idx) => {
        return (
          <>
            {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
            <div style={{height: contentNames[idx] ? '52px' : '10px'}} />
            <ReTable rows={3} columns={6} initialData={yearlyData[idx]} />
          </>
        );
      })}
      </MiddleContent>
      <RightContent>
        {
          yearlyData.map((data, idx) => {
            return (<>
              {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
              <div style={{height: contentNames[idx] ? '52px' : '5px'}}/>
              {data.map(() => <ReTable rows={1} columns={1} key={idx}/>)}
            </>)
          })
        }
      </RightContent>
    </ContentRable>
  )
}
export default TableView
