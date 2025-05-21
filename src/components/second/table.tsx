import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import ReTable from '../ReTable'
import OneTable from '../table'
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
export interface SecondViewProps {
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
const Table: React.FC<SecondViewProps> = ({
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
      content: 'All Tests',
      dataName: [],
      series: []
    },
    {
      content: 'Rapid Urine Drug S.',
      dataName: [],
      series: []
    },
    {
      content: 'Saliva Drug Screen',
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
                {tbdata?.[idx] ? (
                  tbdata[idx].map((it) => {
                    if (it.time === timeRange) {
                      return it.info.map((i) => {
                        return (
                          <>
                            {/* <Arrow content={i.name} key={i.name} /> */}
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
                {/* {tbdata?.[idx] ? (
                  <OneTable
                    rows={3}
                    columns={3}
                    initialData={tbdata[idx]}
                    onDataChange={(data) => onDataChange(data, idx)}
                  />
                ) : (
                  <></>
                )} */}
              </RightContent>
            </MainCcontent>
          </>
        )
      })}
      {/* <MainCcontent>
        <LeftContent1>
          {tbdata?.[0] ? (
            tbdata[0].map((item) => {
              if (item.time === timeRange) {
                return item.info.map((it) => {
                  return (
                    <>
                      <Arrow content={it.name} key={it.name} />
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
          {tbdata?.[0] ? (
            <ReTable
              rows={4}
              columns={4}
              initialData={tbdata[0]}
              onDataChange={onDataChange}
            />
          ) : (
            <></>
          )}
        </RightContent>
      </MainCcontent> */}
      {/* <MainCcontent>
        <LeftContent1>
          <Arrow content="Rapid Urine Drug S." />
          <Arrow content="Average" />
          <Arrow content="Shortest" />
          <Arrow content="Longest" />
        </LeftContent1>
        <RightContent>
          <ReTable rows={3} columns={4} initialData={tableData[0]} />
        </RightContent>
      </MainCcontent>
      <MainCcontent>
        <LeftContent1>
          <Arrow content="Saliva Drug Screen" />
          <Arrow content="Average" />
          <Arrow content="Shortest" />
          <Arrow content="Longest" />
        </LeftContent1>
        <RightContent>
          <ReTable rows={3} columns={4} initialData={tableData[0]} />
        </RightContent>
      </MainCcontent>
      <MainCcontent>
        <LeftContent1>
          <Arrow content="Urine Drug Test" />
          <Arrow content="Average" />
          <Arrow content="Shortest" />
          <Arrow content="Longest" />
        </LeftContent1>
        <RightContent>
          <ReTable rows={3} columns={4} initialData={tableData[0]} />
        </RightContent>
      </MainCcontent>
      <MainCcontent>
        <LeftContent1>
          <Arrow content="Breath Alcohol Test" />
          <Arrow content="Average" />
          <Arrow content="Shortest" />
          <Arrow content="Longest" />
        </LeftContent1>
        <RightContent>
        <ReTable rows={3} columns={4} initialData={tableData[0]}/>
      </RightContent>
      </MainCcontent> */}
    </TableWrapper>
  )
}

export default memo(Table)
