import React, { memo, useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from '../arrow'
import BarEcharts from '../bar'
import { ChartContent } from '.'
import { SubContent, TableData } from './table'
import LineChart from '../line-chart'
import PieEcharts from '../pie/pie-first'
import PolarBarChart from '../pie/pie-second'
import { TestTypesChart2 } from '../five/chart'
import Line from '../line'
import { MonthlyStatsChart, ObservedChart, ObservedMonthlyChart, RenewalChart, TestTypesChart, TypeDistributionChart } from '../second/chart'
const ContentRable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 11px 0;s
  margin-bottom: 20px;
  width: 100%;
  // heiht: 600px;
  height: 100%;
`
const LeftContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
  width: 45%;
  height: 100%;
`
const MiddleContent = styled.div`
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  height: 100%;
  width: 62%;
  // flex: 1;
  // padding-top: 32px;
`
const TableWrapper = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 0 16px;
`

const MainCcontent = styled.div`
  width: 100%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  padding: 10px 0 0 10px;
`

const LeftContent1 = styled.div`
  width: 30%;
  // height: 100%;
  // padding: 16px;
  display: flex;
  flex-wrap: wrap;
`

const RightContent = styled.div`
  // height: 100%;
  // padding: 16px;
  // width: 65%;
  flex: 1;
`
const data = [
  {
    name: '',
    data: [21],
    color: '#A193FF'
  },
  {
    name: '',
    data: [11],
    color: '#FEA8A1'
  },
  {
    name: '',
    data: [15],
    color: '#62CFE5'
  },
  {
    name: '',
    data: [10],
    color: '#FFBE70'
  }
]
const xAxisData = ['']

const threChartMidData = [
  {
    name: 'series1',
    data: [11, 10, 5],
    color: '#A193FF'
  },
  {
    name: 'series2',
    data: [15, 10, 5],
    color: '#FEA8A1'
  },
  {
    name: 'series3',
    data: [2, 10, 7],
    color: '#62CFE5'
  }
]
const xAxisThreChartMidData = ['2017', '2018', '2019']
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

interface Props {
  timeRange: TimeRangeType
  contentData: ChartContent[]
  tableData: TableData
  yearlyData: number[][][],
  reqType: string
}

interface CustomProps {
  contentData: ChartContent[],
  tableData: TableData, 
  timeRange: TimeRangeType, 
  yearlyData: number[][][],
  yearlyChartData: (
    data: any, 
    tableData: SubContent[]
  ) => {
    name: string,
    data: number[],
    color: string
  }[]
}

const SecondChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) =>
  <ContentRable>
    <LeftContent>
      <TableWrapper>
        <TestTypesChart timeRange={timeRange} chartData={tableData[0]} />
        <ObservedChart timeRange={timeRange} chartData={tableData[1]} />
        <TypeDistributionChart
          timeRange={timeRange}
          chartData={tableData[2]}
        />
      </TableWrapper>
    </LeftContent>
    <MiddleContent>
      <MonthlyStatsChart timeRange={timeRange} chartData={tableData[3]} />
      <ObservedMonthlyChart timeRange={timeRange} chartData={tableData[4]} />
      <RenewalChart timeRange={timeRange} chartData={tableData[5]} />
    </MiddleContent>
    </ContentRable>

const ThirdChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
                  <ContentRable>
                    <LeftContent>
                      <TableWrapper>
                        {contentData.map((item, idx) => {
                          return (
                            <>
                              <MainCcontent>
                                <LeftContent1>
                                  <Arrow content={item.content} isContent={true}/>
                                    {tableData[idx].map((it) => {
                                      if (it.time === timeRange) {
                                        return it.info.map((i) => {
                                          return (
                                            <>
                                              <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
                                            </>
                                          )
                                        })
                                      } else {
                                        return <></>
                                      }
                                    })}
                                  </LeftContent1>
                                  <RightContent>
                                    <BarEcharts
                                      direction="horizontal"
                                      data={item.series}
                                      xAxisData={item.dataName}
                                      isStack={false}
                                      barWidth={30}
                                      height="200px"
                                    />
                                  </RightContent>
                                </MainCcontent>
                                {
                                  idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
                                }
                              </>
                            )
                        })
                        }
                      </TableWrapper>
                    </LeftContent>
                    <MiddleContent>
                      {
                        yearlyData.map((data, idx) => {
                          const yearData = yearlyChartData(data, tableData[idx])
                          return (<>
                            {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
                            <BarEcharts key = {idx}
                              direction="horizontal"
                              data={yearData}
                              xAxisData={[]}
                              isStack={true}
                              barWidth={10}
                              height="210px"
                            />
                          </>)
                        })
                      }
                    </MiddleContent>
                  </ContentRable>

const FourthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
    <LeftContent>
      <TableWrapper>
        {contentData.map((item, idx) => {
          return (
            <>
              <MainCcontent>
                <LeftContent1>
                  <Arrow content={item.content} isContent={true} width='100%' />
                  {tableData[idx].map((it) => {
                    if (it.time === timeRange) {
                      return it.info.map((i) => {
                        return (
                          <>
                            <Arrow content={i.name} key={i.name} isContent={false} width='60%' />
                          </>
                        )
                      })
                    } else {
                      return <></>
                    }
                  })}
                </LeftContent1>
                <RightContent>
                  <BarEcharts
                    direction="horizontal"
                    data={item.series}
                    xAxisData={item.dataName}
                    isStack={false}
                    barWidth={30}
                    height="200px"
                  />
                </RightContent>
              </MainCcontent>
              {
                idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
              }
            </>
          )
        })}
      </TableWrapper>
    </LeftContent>
    <MiddleContent>
      {
        yearlyData.map((data, idx) => {
          const yearData = yearlyChartData(data, tableData[idx])
          return (<>
            {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
            <BarEcharts
              key= {idx}
              direction="horizontal"
              data={yearData}
              xAxisData={[]}
              isStack={true}
              height="210px"
            />
          </>)
        })
      }
    </MiddleContent>
  </ContentRable>

const FifthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent style={{padding: '0px'}}>
            <RightContent>
              <TestTypesChart2 timeRange={timeRange} chartData={tableData[0]} />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <BarEcharts
                key = {idx}
                direction="horizontal"
                data={yearData}
                xAxisData={[]}
                isStack={false}
                barWidth={30}
                height="100%"
              />
            )
          })
        }
      </MiddleContent>
  </ContentRable>

const SixthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
    <LeftContent>
      <TableWrapper>
        {contentData.map((item, idx) => {
          return (
            <>
              <MainCcontent>
                <LeftContent1>
                  <Arrow content={item.content} backgroundColor="#176CC9" isContent={true} width='100%' />
                  {tableData[idx].map((it) => {
                    if (it.time === timeRange) {
                      return it.info.map((i) => {
                        return (
                          <>
                            <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
                          </>
                        )
                      })
                    } else {
                      return <></>
                    }
                  })}
                </LeftContent1>
                <RightContent>
                  <BarEcharts
                    direction="horizontal"
                    data={item.series}
                    xAxisData={item.dataName}
                    isStack={false}
                    barWidth={30}
                    height="170px"
                  />
                </RightContent>
              </MainCcontent>
              {
                idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
              }
            </>
          )
        })}
      </TableWrapper>
    </LeftContent>
    <MiddleContent>
    {
      yearlyData.map((data, idx) => {
        const yearData = yearlyChartData(data, tableData[idx])
        return (<>
          {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
          <BarEcharts
            key = {idx}
            direction="horizontal"
            data={yearData}
            xAxisData={[]}
            isStack={false}
            barWidth={10}
            height="180px"
          />
        </>)
      })
    }
    </MiddleContent>
  </ContentRable>
const SeventhChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          {contentData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    {
                      item.content != "" ? <Arrow content={item.content} backgroundColor="#176CC9" isContent={true} width='100%'/> : <></>
                    }

                    {tableData?.[idx] ? (
                      tableData[idx].map((it) => {
                        if (it.time === timeRange) {
                          return it.info.map((i) => {
                            return (
                              <>
                                <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
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
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={30}
                      height="150px"
                    />
                  </RightContent>
                </MainCcontent>
                {
                idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
                }
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (<>
              {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
              <BarEcharts
                key = {idx}
                direction="horizontal"
                data={yearData}
                xAxisData={[]}
                isStack={false}
                barWidth={10}
                height="160px"
              />
            </>)
          })
        }
      </MiddleContent>
    </ContentRable>
const EighthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          {contentData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    <Arrow content={item.content} backgroundColor="#176CC9" isContent={true} width='100%'/>
                    {tableData[idx].map((it) => {
                      if (it.time === timeRange) {
                        return it.info.map((i) => {
                          return (
                            <>
                              <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
                            </>
                          )
                        })
                      } else {
                        return <></>
                      }
                    })}
                  </LeftContent1>
                  <RightContent>
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={30}
                      height="170px"
                    />
                  </RightContent>
                </MainCcontent>
                {
                idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
                }
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (<>
              {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
              <BarEcharts
                key = {idx}
                direction="vertical"
                data={yearData}
                xAxisData={[]}
                isStack={false}
                barWidth={20}
                height="180px"
              />
            </>)
          })
        }
      </MiddleContent>
    </ContentRable>
const NinethChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Negative" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={contentData[0].series}
                xAxisData={contentData[0].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Synthetic" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <PieEcharts
                data={contentData[1].series}
                height="300px"
                radius={['38%', '70%']}
                centerText="49"
                showPercentage={true}
                legendPosition="top"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <LineChart
                key = {idx}
                data={yearData}
                xAxisData={[]}
                height="300px"
                showSymbol={true}
                yAxisMax={3600}
                yAxisMin={0}
                yAxisInterval={600}
                smooth={true}
                legend={{
                  show: true,
                  bottom: 0,
                  right: 30
                }}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>
const TenthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Negative" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={contentData[0].series}
                xAxisData={contentData[0].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Synthetic" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <PieEcharts
                data={contentData[1].series}
                height="300px"
                radius={['38%', '70%']}
                centerText="49"
                showPercentage={true}
                legendPosition="top"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <LineChart
            key = {idx}

                data={yearData}
                xAxisData={[]}
                height="300px"
                showSymbol={true}
                yAxisMax={3600}
                yAxisMin={0}
                yAxisInterval={600}
                smooth={true}
                legend={{
                  show: true,
                  bottom: 0,
                  right: 30
                }}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>
const EleventhChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Negative" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={contentData[0].series}
                xAxisData={contentData[0].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent>
            <LeftContent1>
              <Arrow content="Synthetic" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <PieEcharts
                data={contentData[1].series}
                height="300px"
                radius={['38%', '70%']}
                centerText="49"
                showPercentage={true}
                legendPosition="top"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <LineChart
            key = {idx}
            data={yearData}
                xAxisData={[]}
                height="300px"
                showSymbol={true}
                yAxisMax={3600}
                yAxisMin={0}
                yAxisInterval={600}
                smooth={true}
                legend={{
                  show: true,
                  bottom: 0,
                  right: 30
                }}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>
const TwelvethChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent style={{padding: '0'}}>
            <RightContent>
              <PolarBarChart
                data={contentData[0].series}
                height="350px"
                startAngle={90}
                endAngle={-270}
                radius={['30%', '80%']}
                showLabel={true}
              />
            </RightContent>
          </MainCcontent>
          <MainCcontent style={{padding: '0'}}>
            <LeftContent1>
              <Arrow content="Collectors" backgroundColor="#176CC9" isContent={true}/>
            </LeftContent1>
            <RightContent>
              <BarEcharts
                direction="horizontal"
                data={contentData[1].series}
                xAxisData={contentData[1].dataName}
                isStack={false}
                barWidth={20}
                height="350px"
              />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <LineChart
            key = {idx}
            data={yearData}
                xAxisData={[]}
                height="300px"
                showSymbol={true}
                yAxisMax={3000}
                yAxisMin={0}
                yAxisInterval={600}
                smooth={true}
                legend={{
                  show: true,
                  right: 30,
                  bottom: 0
                }}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>
const ThirteenthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          <MainCcontent style={{padding: '0'}}>
            <RightContent>
              <TestTypesChart2 timeRange={timeRange} chartData={tableData[0]} />
            </RightContent>
          </MainCcontent>
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <LineChart
            key = {idx}
            data={yearData}
                xAxisData={[]}
                height="470px"
                showSymbol={true}
                yAxisMax={10}
                yAxisMin={0}
                yAxisInterval={1}
                smooth={true}
                legend={{
                  show: true,
                  right: 30,
                  orient: 'vertical'
                }}
                showGrid={true}
                labelShow={true}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>
const FourteenthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          {contentData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    <Arrow content={item.content} backgroundColor="#176CC9" isContent={true} width='100%'/>
                    {tableData[idx].map((it) => {
                      if (it.time === timeRange) {
                        return it.info.map((i) => {
                          return (
                            <>
                              <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
                            </>
                          )
                        })
                      } else {
                        return <></>
                      }
                    })}
                  </LeftContent1>
                  <RightContent>
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={30}
                      height="240px"
                    />
                  </RightContent>
                </MainCcontent>
                {
                idx !== (contentData.length - 1) ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>
                }
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
      {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (<>
              {idx !== 0 ? <Line margin="15px 3%" color="#dddddd" width='95%' height='2px' /> : <></>}
              <BarEcharts
                key = {idx}
                direction="vertical"
                data={yearData}
                xAxisData={[]}
                isStack={false}
                barWidth={20}
                height="250px"
                legend={true}
              />
            </>)
          })
        }
      </MiddleContent>
    </ContentRable>
const FifteenthChart: React.FC<CustomProps> = ({contentData, tableData, timeRange, yearlyData, yearlyChartData}) => 
  <ContentRable>
      <LeftContent>
        <TableWrapper>
          {contentData.map((item, idx) => {
            return (
              <>
                <MainCcontent>
                  <LeftContent1>
                    <Arrow content={item.content} backgroundColor="#176CC9" isContent={true} width='100%'/>
                    {tableData[idx].map((it) => {
                      if (it.time === timeRange) {
                        return it.info.map((i) => {
                          return (
                            <>
                              <Arrow content={i.name} key={i.name} isContent={false} width='60%'/>
                            </>
                          )
                        })
                      } else {
                        return <></>
                      }
                    })}
                  </LeftContent1>
                  <RightContent>
                    <BarEcharts
                      direction="horizontal"
                      data={item.series}
                      xAxisData={item.dataName}
                      isStack={false}
                      barWidth={20}
                      height="250px"
                    />
                  </RightContent>
                </MainCcontent>
              </>
            )
          })}
        </TableWrapper>
      </LeftContent>
      <MiddleContent>
        {
          yearlyData.map((data, idx) => {
            const yearData = yearlyChartData(data, tableData[idx])
            return (
              <BarEcharts
                key = {idx}
                direction="vertical"
                data={yearData}
                xAxisData={[]}
                isStack={false}
                barWidth={20}
                height="250px"
                legend={true}
              />
            )
          })
        }
      </MiddleContent>
    </ContentRable>




const Table: React.FC<Props> = ({ timeRange, tableData, contentData, yearlyData, reqType }) => {
  const [currentChartData, setCurrentChartData] = useState<ChartContent[]>(contentData);
  
  const yearlyChartData = (data:any, tdData:SubContent[]) => {
    const newData = [{
      name: '' as string,
      data: [] as number[],
      color: '' as string
    }]

    data.map((yearData:number[], idx:any) => {
      const subContentName: string = tdData[0].info[idx].name

      newData.push({
        name: subContentName,
        data: [yearData[0], yearData[1], yearData[2]],
        color: ''
      })
    })
    return newData
  }

  useEffect(() => {
    const updatedData = contentData.map((data, index) => {
      const newData = {
        dataName: [] as string[],
        series: [] as any
      }
      tableData[index].map((tbData, idx) => {
        if(tbData.time === timeRange){
          tbData.info.forEach((i, idx) => {
            newData.dataName.push(i.name)
            newData.series.push({
              name: i.name,
              data: i.data
            })
          })
        }
      })
      return {
        ...newData,
        content: data.content ?? ""
      };
    });
    setCurrentChartData(updatedData as ChartContent[]);
  }, [timeRange, contentData, tableData])

  switch(reqType) {
    case 'second':
      return <SecondChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'three':
      return <ThirdChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'four':
      return <FourthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'five':
      return <FifthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'six':
      return <SixthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'seven':
      return <SeventhChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'eight':
      return <EighthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'nine':
      return <NinethChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'ten':
      return <TenthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'eleven':
      return <EleventhChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'twelve':
      return <TwelvethChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'thirteen':
      return <ThirteenthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'fourteen':
      return <FourteenthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    case 'fiveteen':
      return <FifteenthChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
    default:
      return <ThirdChart contentData = {currentChartData} tableData = {tableData} timeRange = {timeRange} yearlyData = {yearlyData} yearlyChartData = {yearlyChartData}/>
  }
}

export default memo(Table)