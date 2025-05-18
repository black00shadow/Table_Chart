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
      content: 'Sent to Lab (RFT)',
      dataName: [],
      series: []
    },
    {
      content: 'Refusal',
      dataName: [],
      series: []
    }
  ]

  useEffect(() => {
    setTbdata(tableData)
  }, [tableData])
  return (
    <TableWrapper>
      {_tableData.map((item, idx) => {
        return (
          <>
            <MainCcontent>
              <LeftContent1>
                <Arrow content={item.content} backgroundColor="#176CC9" />
                {tbdata?.[idx] ? (
                  tbdata[idx].map((it) => {
                    if (it.time === timeRange) {
                      return it.info.map((i) => {
                        return (
                          <>
                            <Arrow content={i.name} key={i.name} />
                          </>
                        )
                      })
                    } else {
                      return <></>
                    }
                  })
                ) : (
                  <></>
                )}
              </LeftContent1>
              <RightContent>
                {tbdata?.[idx] ? (
                  <ReTable
                    rows={3}
                    columns={3}
                    initialData={tbdata[idx]}
                    onDataChange={(data) => onDataChange(data, idx)}
                  />
                ) : (
                  <></>
                )}
              </RightContent>
            </MainCcontent>
          </>
        )
      })}
    </TableWrapper>
  )
}

export default memo(Table)
