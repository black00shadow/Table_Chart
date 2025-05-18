import React, { useState } from 'react'
import styled from 'styled-components'
import { Checkbox, Radio, Select } from 'antd'

const ViewContainer = styled.div`
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;
  // gap: 20px;
  padding: 12px 16px;
  // background: #fff;
  // border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`

const YearSelector = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  background: #1890ff;
`

const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  width: 24px;
  height: 24px;
  border: none;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  // color: #1890ff;
  font-size: 16px;
  padding: 0 10px
  &:hover {
    background: #f0f0f0;
    border-radius: 4px;
  }

  &::before {
    content: '${(props) => (props.direction === 'left' ? '←' : '→')}';
  }
`

const YearDot = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#1890ff' : '#d9d9d9')};
  margin: 0 4px;
`

const YearText = styled.span`
  font-size: 14px;
  color: #333;
  min-width: 40px;
  text-align: center;
`

interface IProps {
  onViewChange?: (view: 'year' | 'month') => void
  onYearChange?: (year: number) => void
}

const YearView: React.FC<IProps> = ({ onViewChange, onYearChange }) => {
  const [currentYear, setCurrentYear] = useState(2022)
  const [viewType, setViewType] = useState<'year' | 'month'>('year')
  const years = [2017, 2018, 2019, 2020, 2021, 2022]

  const handlePrevYear = () => {
    if (currentYear > years[0]) {
      setCurrentYear((prev) => {
        const newYear = prev - 1
        onYearChange?.(newYear)
        return newYear
      })
    }
  }

  const handleNextYear = () => {
    if (currentYear < years[years.length - 1]) {
      setCurrentYear((prev) => {
        const newYear = prev + 1
        onYearChange?.(newYear)
        return newYear
      })
    }
  }

  const handleViewChange = (e: any) => {
    const newView = e.target.value
    setViewType(newView)
    onViewChange?.(newView)
  }

  return (
    <ViewContainer>
      <div style={{ display: 'flex', flexWrap: 'nowrap', height: '50%' }}>
        <div
          style={{ color: '#333333', textAlign: 'center', paddingTop: '17px' }}
        >
          <div> Options： </div>
        </div>
        <Checkbox.Group
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: '1'
          }}
        >
          {/* <Checkbox defaultChecked={false} /> Year View */}
          {/* <Checkbox defaultChecked={false} /> onth View */}
          <Checkbox value="year">Year View</Checkbox>
          <Checkbox value="month">Month View</Checkbox>
          <Select
            defaultValue="Select Year"
            style={{ width: 120 }}
            onChange={(value) => {
              setCurrentYear(Number(value))
              onYearChange?.(Number(value))
            }}
            options={years.map((year) => ({ value: year, label: year }))}
          />
        </Checkbox.Group>
      </div>
      <YearSelector>
        <ArrowButton direction="left" onClick={handlePrevYear} />
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          {years.map((year) => (
            <div
              key={year}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                flex: '1 1 0%',
                justifyContent: 'space-around'
              }}
            >
              <YearText>{year}</YearText>
              <YearDot active={year === currentYear} />
            </div>
          ))}
        </div>
        <ArrowButton direction="right" onClick={handleNextYear} />
      </YearSelector>
    </ViewContainer>
  )
}

export default YearView
