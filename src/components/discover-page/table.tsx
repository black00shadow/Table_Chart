import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import ReTable from '../table'
import Line from '../line'
const TableWrapper = styled.div`
  width: 100%;
  // height: 100%;
  padding: 0 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  display: flex;
`

const LeftContent1 = styled.div`
  width: 25%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2px 0;
  align-self: anchor-center;
`

const RightContent = styled.div`
  // height: 100%;
  // padding: 16px;
  margin-left: 10%;
  width: 55%;
  // flex: 1;
`

const Div = styled.div`
  margin: 0px;
  padding-top: 3px;
`

type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

export interface SubContent{
  time: string;
  info: {
    name: string;
    data: number[];
  }[]
};

export type ContentData = SubContent[];
export type TableData = ContentData[];

export interface ViewProps {
  contentNames: string[]
  collectors: string[]
  yearlyData:number[][][]
  timeRange: TimeRangeType
  tableData: TableData
  onChangeTable: (
    data: TableData
  ) => void
}
const Table: React.FC<ViewProps> = ({ contentNames, collectors, timeRange, tableData, onChangeTable: onChange }) => {
  const [tbdata, setTbdata] = useState<TableData>()

  const onDataChange = (
    data: ContentData,
    index: number
  ) => {
    if (tbdata && tbdata.length > 0) {
      tbdata[index] = data
      onChange(tbdata)
    }
  }

  useEffect(() => {
    setTbdata(tableData)
  }, [tableData])
  return (
    <TableWrapper>
      {contentNames.map((contentName, idx) => {
        return (
          <React.Fragment key={`content-${idx}`}>
           <Div>
              {contentName !== "" ? (
                <div style={{marginTop: 5}}>
                  <Arrow
                    content={contentName}
                    isContent={true}
                    color="#fff"
                    width='30%'
                  />
                </div>
              ) : null}
              <Div>
                  {tbdata?.[idx] ? (
                    tbdata[idx].map((it, i) => {
                      if (it.time === timeRange) {
                        return it.info.map((info, infoIdx) => {
                          return (
                            <React.Fragment key={`info-${idx}-${infoIdx}`}>
                              <MainCcontent>
                                <LeftContent1>
                                  <Arrow
                                    width='100%'
                                    isContent={false}
                                    content={info.name}
                                    color="#fff"
                                  />
                                </LeftContent1>
                                <RightContent>
                                  {tbdata?.[idx] ? (
                                    <ReTable
                                      rows={3}
                                      columns={3}
                                      content={info.name}
                                      initialData={tbdata[idx]}
                                      onDataChange={(data) => onDataChange(data, idx)}
                                    />
                                  ) : null}
                                </RightContent>
                              </MainCcontent>
                            </React.Fragment>
                          )
                        })
                      } else {
                        return null
                      }
                    })
                  ) : null}
              </Div>
              {
                idx !== (contentNames.length - 1) ? <Line margin="15px 0" color="#dddddd" width='95%' height='2px' /> : null
              }
            </Div>
          </React.Fragment>
        )
      })}
    </TableWrapper>
  )
}

export default memo(Table)
