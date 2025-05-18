import React from 'react'
import styled from 'styled-components'
import Line from '../line'
import ReTable from '../ReTable'

import type { ViewProps } from './types'
export type { ViewProps } 

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
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const TableView: React.FC<ViewProps> = ({
  timeRange,
  tableData,
  onChangeTable
}) => {
  // const onChangeFirstTable = (data: ViewProps['tableData']) => {
  //   onChangeTable(data)
  // }

  return (
    <ContentRable>
      <LeftContent>
        {['Today', 'Current Week', 'Current Month', 'Current Year'].map(
          (label) => (
            <button
              key={label}
              style={{
                padding: '6px 12px',
                backgroundColor: '#339dff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {label}
            </button>
          )
        )}
      </LeftContent>
      <MiddleContent>
        <Line margin="10px 0" color="#ffffff" />
        <ReTable rows={7} columns={6} initialData={[]} />
        <Line margin="19px 0" color="#ffffff" />
        <ReTable rows={2} columns={6} initialData={[]} />
      </MiddleContent>
      <RightContent>
        <ReTable rows={3} columns={4} />
      </RightContent>
    </ContentRable>
  )
}

export default TableView
