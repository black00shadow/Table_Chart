import React, { useState, useEffect, useRef } from 'react'
import { DatePicker, Select, InputNumber } from 'antd'
import styled from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import * as echarts from 'echarts'

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
  // width: 100%;
  // // padding: 24px;
  background: #f5f5f5;
  // min-height: 100vh;
  padding-left: 24px;
  padding-top: 24px;
`

const LeftPanel = styled.div`
  width: 24%;
  // flex-shrink: 0;
  height: fit-content;
`

const RightPanel = styled.div`
  flex: 1;
  // width: calc(100% - 300px - 24px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Container = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000033;
  margin-bottom: 16px;
`

const DateSection = styled.div`
  margin-bottom: 20px;
`

const DateLabel = styled.div`
  color: #666;
  margin-bottom: 8px;
`

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 4px 11px;

  .date-text {
    font-size: 14px;
  }

  .ant-btn {
    border: none;
    padding: 0 4px;
    color: #666;
  }
`

const LocationSection = styled.div`
  margin-bottom: 20px;
`

const LocationLabel = styled.div`
  color: #666;
  margin-bottom: 8px;
`

const TestsSection = styled.div`
  margin-bottom: 20px;
`

const TestsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`

const DonutChart = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  position: relative;
`

const TotalNumber = styled.div`
  position: absolute;
  text-align: center;

  .number {
    font-size: 24px;
    font-weight: bold;
  }

  .label {
    font-size: 12px;
    color: #666;
  }
`

const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TestItem = styled.div<{ $color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .test-name {
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    background: ${(props) => props.$color};
    flex: 1;
    margin-right: 12px;
  }

  .test-value {
    width: 60px;
    .ant-input-number {
      width: 50px;
      border-radius: 4px;
      text-align: center;
      &:hover,
      &:focus {
        border-color: #40a9ff;
      }
    }
  }
`

const PatientsSection = styled.div``

const PatientsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`

const PatientItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  height: 32px;

  .label {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 60px;
    color: #666;
  }

  .bar {
    flex: 1;
    height: 16px;
    background: #003366;
    margin: 0 12px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .number {
    min-width: 40px;
    text-align: center;

    .ant-input-number {
      width: 50px;
      border-radius: 4px;
      text-align: center;
      &:hover,
      &:focus {
        border-color: #40a9ff;
      }
    }
  }
`

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  // padding: 20px;
`

const ResultsChartContainer = styled.div`
  width: 100%;
  height: 425px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 0px 20px 0px;
`

interface TestData {
  date: string
  total: number
  breathAlcoholScreen: number
  urineDrugScreen: number
  oralFluidDrugScreen: number
  urineDrugTest: number
  oralFluidCollection: number
  hairDrugTest: number
}

const testData: TestData[] = [
  {
    date: '05/04/23',
    total: 59,
    breathAlcoholScreen: 30,
    urineDrugScreen: 13,
    oralFluidDrugScreen: 16,
    urineDrugTest: 11,
    oralFluidCollection: 8,
    hairDrugTest: 4
  },
  {
    date: '06/04/23',
    total: 38,
    breathAlcoholScreen: 20,
    urineDrugScreen: 8,
    oralFluidDrugScreen: 11,
    urineDrugTest: 23,
    oralFluidCollection: 2,
    hairDrugTest: 2
  },
  {
    date: '07/04/23',
    total: 56,
    breathAlcoholScreen: 16,
    urineDrugScreen: 18,
    oralFluidDrugScreen: 14,
    urineDrugTest: 33,
    oralFluidCollection: 4,
    hairDrugTest: 2
  },
  {
    date: '10/04/23',
    total: 61,
    breathAlcoholScreen: 12,
    urineDrugScreen: 18,
    oralFluidDrugScreen: 56,
    urineDrugTest: 15,
    oralFluidCollection: 8,
    hairDrugTest: 4
  },
  {
    date: '11/04/23',
    total: 56,
    breathAlcoholScreen: 11,
    urineDrugScreen: 7,
    oralFluidDrugScreen: 14,
    urineDrugTest: 34,
    oralFluidCollection: 2,
    hairDrugTest: 2
  }
]

const ChartView: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current)
      }

      const colors = {
        total: '#000080',
        breathAlcoholScreen: '#003366',
        urineDrugScreen: '#0066cc',
        oralFluidDrugScreen: '#99ccff',
        urineDrugTest: '#ccffff',
        oralFluidCollection: '#99ffcc',
        hairDrugTest: '#ccccff'
      }

      const option = {
        title: {
          text: 'Tests Processed',
          left: 0,
          top: 0,
          textStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        legend: {
          data: [
            'Total',
            'Breath Alcohol Screen',
            'Urine Drug Screen',
            'Oral Fluid Drug Screen',
            'Urine Drug Test',
            'Oral Fluid Collection',
            'Hair Drug Test'
          ],
          right: '10%',
          top: 0,
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 10
        },
        grid: {
          top: 80,
          left: 40,
          right: 40,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: testData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: '#ccc',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 12,
            color: '#666'
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#eee'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 12,
            color: '#666'
          }
        },
        series: [
          {
            name: 'Total',
            type: 'line',
            data: testData.map((item) => item.total),
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              width: 2,
              color: colors.total
            },
            itemStyle: {
              color: colors.total,
              borderWidth: 2,
              borderColor: '#fff'
            },
            z: 10,
            label: {
              show: true,
              position: 'top',
              fontSize: 12,
              color: colors.total,
              formatter: '{c}',
              padding: [0, 0, 5, 0]
            },
            smooth: 0.2
          },
          {
            name: 'Breath Alcohol Screen',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.breathAlcoholScreen),
            itemStyle: {
              color: colors.breathAlcoholScreen,
              borderRadius: [2, 2, 0, 0]
            }
          },
          {
            name: 'Urine Drug Screen',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.urineDrugScreen),
            itemStyle: {
              color: colors.urineDrugScreen,
              borderRadius: [2, 2, 0, 0]
            }
          },
          {
            name: 'Oral Fluid Drug Screen',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.oralFluidDrugScreen),
            itemStyle: {
              color: colors.oralFluidDrugScreen,
              borderRadius: [2, 2, 0, 0]
            }
          },
          {
            name: 'Urine Drug Test',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.urineDrugTest),
            itemStyle: {
              color: colors.urineDrugTest,
              borderRadius: [2, 2, 0, 0]
            }
          },
          {
            name: 'Oral Fluid Collection',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.oralFluidCollection),
            itemStyle: {
              color: colors.oralFluidCollection,
              borderRadius: [2, 2, 0, 0]
            }
          },
          {
            name: 'Hair Drug Test',
            type: 'bar',
            barWidth: 20,
            data: testData.map((item) => item.hairDrugTest),
            itemStyle: {
              color: colors.hairDrugTest,
              borderRadius: [2, 2, 0, 0]
            }
          }
        ]
      }

      chartInstance.current.setOption(option)
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose()
        chartInstance.current = null
      }
    }
  }, [])

  return <ChartContainer ref={chartRef} />
}

const TestResultsChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  const testData = [
    {
      name: 'Rapid Urine Drug Screen',
      data: [
        { type: 'Negative', value: 82, color: '#003366' },
        { type: 'Non Negative', value: 37, color: '#FFA500' },
        { type: 'Invalid', value: 20, color: '#87CEEB' },
        { type: 'Sent to Lab', value: 49, color: '#98FB98' },
        { type: 'Refusal', value: 10, color: '#1E90FF' }
      ]
    },
    {
      name: 'Saliva Drug Screen',
      data: [
        { type: 'Negative', value: 79, color: '#003366' },
        { type: 'Non Negative', value: 45, color: '#FFA500' },
        { type: 'Invalid', value: 33, color: '#87CEEB' },
        { type: 'Sent to Lab', value: 42, color: '#98FB98' },
        { type: 'Refusal', value: 8, color: '#1E90FF' }
      ]
    },
    {
      name: 'Urine Drug Test',
      data: [
        { type: 'Negative', value: 0, color: '#003366' },
        { type: 'Non Negative', value: 0, color: '#FFA500' },
        { type: 'Invalid', value: 0, color: '#87CEEB' },
        { type: 'Sent to Lab', value: 91, color: '#98FB98' },
        { type: 'Refusal', value: 9, color: '#1E90FF' }
      ]
    },
    {
      name: 'Breath Alcohol Test',
      data: [
        { type: 'Negative', value: 70, color: '#003366' },
        { type: 'Non Negative', value: 42, color: '#FFA500' },
        { type: 'Invalid', value: 0, color: '#87CEEB' },
        { type: 'Sent to Lab', value: 0, color: '#98FB98' },
        { type: 'Refusal', value: 5, color: '#1E90FF' }
      ]
    }
  ]

  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current)
      }

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        legend: {
          data: [
            'Negative',
            'Non Negative',
            'Invalid',
            'Sent to Lab',
            'Refusal'
          ],
          top: 0,
          left: 0,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        grid: {
          top: 40,
          left: 0,
          right: 20,
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: testData.map((item) => item.name),
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            fontSize: 12,
            color: '#666',
            width: 120,
            overflow: 'break',
            lineHeight: 14
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#eee'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 12,
            color: '#666'
          }
        },
        series: testData[0].data.map((item, index) => ({
          name: item.type,
          type: 'bar',
          barWidth: 20,
          barGap: '30%',
          label: {
            show: true,
            position: 'top',
            fontSize: 12,
            color: '#666',
            formatter: (params: any) => {
              return params.value > 0 ? params.value : ''
            }
          },
          data: testData.map((test) => ({
            value: test.data[index].value,
            itemStyle: {
              color: item.color,
              borderRadius: [2, 2, 0, 0]
            }
          }))
        }))
      }

      chartInstance.current.setOption(option)
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose()
        chartInstance.current = null
      }
    }
  }, [])

  return <ResultsChartContainer ref={chartRef} />
}
type TimeRangeType = 'today' | 'currentWeek' | 'currentMonth' | 'currentYear'

interface Props {
  timeRange: TimeRangeType
}
const DailySummary: React.FC<Props> = ({ timeRange }) => {
  useEffect(() => {
    console.log('timeRange', timeRange) // 这里根据timeRange生成对应的x轴数据
    // const xAxisData = generateXAxisData(timeRange)
    // 更新图表逻辑...
  }, [timeRange])
  const [currentDate, setCurrentDate] = useState('Tue, 01 Mar 023')
  const donutChartRef = useRef<HTMLDivElement>(null)
  const donutChartInstance = useRef<echarts.ECharts | null>(null)
  const [patientData, setPatientData] = useState([
    { type: 'Male', count: 30, color: '#003366' },
    { type: 'Female', count: 17, color: '#0066cc' },
    { type: 'X', count: 1, color: '#99ccff' }
  ])
  const [testItems, setTestItems] = useState([
    { name: 'Breath Alcohol Screen', value: 30, color: '#003366' },
    { name: 'Urine Drug Screen', value: 31, color: '#0066cc' },
    { name: 'Oral Fluid Drug Screen', value: 14, color: '#99ccff' },
    { name: 'Urine Drug Test', value: 15, color: '#ccffff' },
    { name: 'Oral Fluid Collection', value: 22, color: '#99ffcc' },
    { name: 'Hair Drug Test', value: 6, color: '#ccccff' }
  ])

  const handlePrevDate = () => {
    // 处理日期切换逻辑
  }

  const handleNextDate = () => {
    // 处理日期切换逻辑
  }

  const handlePatientCountChange = (value: number | null, type: string) => {
    if (value !== null) {
      setPatientData((prev) =>
        prev.map((item) =>
          item.type === type ? { ...item, count: value } : item
        )
      )
    }
  }

  const handleTestValueChange = (value: number | null, name: string) => {
    if (value !== null) {
      setTestItems((prev) =>
        prev.map((item) => (item.name === name ? { ...item, value } : item))
      )
    }
  }

  const totalPatients = patientData.reduce((sum, item) => sum + item.count, 0)
  const totalTests = testItems.reduce((sum, item) => sum + item.value, 0)

  useEffect(() => {
    if (donutChartRef.current) {
      if (!donutChartInstance.current) {
        donutChartInstance.current = echarts.init(donutChartRef.current)
      }

      const option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['70%', '90%'],
            center: ['50%', '50%'],
            data: testItems.map((item) => ({
              value: item.value,
              name: item.name,
              itemStyle: {
                color: item.color
              }
            })),
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            emphasis: {
              scale: true,
              scaleSize: 5
            }
          }
        ]
      }

      donutChartInstance.current.setOption(option)
    }
  }, [testItems])

  return (
    <Container>
      <Title>Daily Summary</Title>

      <DateSection>
        <DateLabel>Date</DateLabel>
        <DateSelector>
          <LeftOutlined
            onClick={handlePrevDate}
            style={{ cursor: 'pointer' }}
          />
          <span className="date-text">{currentDate}</span>
          <RightOutlined
            onClick={handleNextDate}
            style={{ cursor: 'pointer' }}
          />
        </DateSelector>
      </DateSection>

      <LocationSection>
        <LocationLabel>Location</LocationLabel>
        <Select defaultValue="All" style={{ width: '100%' }}>
          <Select.Option value="All">All</Select.Option>
        </Select>
      </LocationSection>

      <TestsSection>
        <TestsTitle>Tests</TestsTitle>
        <DonutChart ref={donutChartRef}>
          <TotalNumber
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="number">{totalTests}</div>
            <div className="label">Total</div>
          </TotalNumber>
        </DonutChart>
        <TestList>
          {testItems.map((test) => (
            <TestItem key={test.name} $color={test.color}>
              <div className="test-name">{test.name}</div>
              <div className="test-value">
                <InputNumber
                  min={0}
                  value={test.value}
                  onChange={(value) => handleTestValueChange(value, test.name)}
                  size="small"
                />
              </div>
            </TestItem>
          ))}
        </TestList>
      </TestsSection>

      <PatientsSection>
        <PatientsTitle>Patients</PatientsTitle>
        {patientData.map((patient) => (
          <PatientItem key={patient.type}>
            <div className="label">{patient.type}</div>
            <div
              className="bar"
              style={{
                background: patient.color,
                width: `${(patient.count / totalPatients) * 100}%`
              }}
            />
            <div className="number">
              <InputNumber
                min={0}
                value={patient.count}
                onChange={(value) =>
                  handlePatientCountChange(value, patient.type)
                }
                size="small"
              />
            </div>
          </PatientItem>
        ))}
      </PatientsSection>
    </Container>
  )
}

const FirstView: React.FC<Props> = ({ timeRange }) => {
  useEffect(() => {
    console.log('timeRange', timeRange) // 这里根据timeRange生成对应的x轴数据
    // const xAxisData = generateXAxisData(timeRange)
    // 更新图表逻辑...
  }, [timeRange])
  return (
    <PageContainer>
      <LeftPanel>
        <DailySummary timeRange={timeRange} />
      </LeftPanel>
      <RightPanel>
        <ChartView />
        <TestResultsChart />
      </RightPanel>
    </PageContainer>
  )
}

export default FirstView
