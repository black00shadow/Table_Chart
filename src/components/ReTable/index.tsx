import React, { memo, useState } from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 4px;
  padding: 4px;
`

const TableRow = styled.tr`
  &:nth-child(3n) {
    margin-bottom: 12px;
    display: table-row;
    border-bottom: 12px solid transparent;
  }
`

const TableCell = styled.td`
  border: 1px solid #e5e7eb;
  padding: 0;
  height: 40px;
  width: 50px;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  
  &:not(:last-child) {
    margin-right: 4px;
  }
`

const CellInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  background: transparent;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: 2px solid #1890ff;
    background: #fff;
  }

  &:hover {
    background: #f5f5f5;
  }
`

interface IProps {
  rows: number
  columns: number
  initialData?: number[][]
  onDataChange?: (data: number[][]) => void
}

const Table: React.FC<IProps> = ({
  rows,
  columns,
  initialData,
  onDataChange
}) => {
  // 初始化表格数据
  const initData = () => {
    if (initialData) return initialData
    return Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(0))
  }

  const [tableData, setTableData] = useState<number[][]>(initData())

  // 处理单元格值变化
  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newValue = value === '' ? 0 : Number(value)
    if (isNaN(newValue)) return

    const newData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === colIndex ? newValue : cell))
        : row
    )

    setTableData(newData)
    onDataChange?.(newData)
  }

  return (
    <TableContainer>
      <StyledTable>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <TableCell key={`${rowIndex}-${colIndex}`}>
                  <CellInput
                    type="text"
                    value={cell || ''}
                    onChange={(e) =>
                      handleCellChange(rowIndex, colIndex, e.target.value)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}

export default memo(Table)
