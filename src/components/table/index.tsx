import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
  // overflow-x: auto;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 1px;
  /* background-color: #fff; */
  /* border-radius: 8px; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  // padding: 2px;
`

const TableCell = styled.td`
  border: 1px solid #e5e7eb;
  padding-right: 5px;
  margin: 0;
  height: 40px;
  width: 90%;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 15%;
`

const CellInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  text-align: right;

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
  content: string
  initialData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[]
  onDataChange?: (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[]
  ) => void
}

const Table: React.FC<IProps> = ({
  rows,
  columns,
  content,
  initialData,
  onDataChange
}) => {
  // 初始化表格数据

  const [tableData, setTableData] = useState<
    {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[]
  >()

  useEffect(() => {
    setTableData(() => initialData)
  }, [initialData])
  // 处理单元格值变化
  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    if (!tableData) {
      return
    }
    const newValue = value === '' ? 0 : Number(value)
    if (isNaN(newValue)) return

    const newData = tableData.map((row, i) => {
      if (i === rowIndex) {
        const arr = row
        row.info.map((cell, j) => {
          if (j === colIndex) {
            arr.info[j].data = [newValue]
          } else {
            arr.info[j].data = cell.data
          }
        })
        return arr
      } else {
        return row
      }
    })
    setTableData(newData)
    onDataChange?.(newData)
  }

  return (
    <TableContainer>
      <StyledTable>
        <tbody style={{ display: 'flex' }}>
          {/* {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <TableCell key={`${rowIndex}-${colIndex}`}>
                  <CellInput
                    type="text"
                    value={cell || ''}
                    onChange={(e: any) =>
                      handleCellChange(rowIndex, colIndex, e.target.value)
                    }
                  />
                </TableCell>
              ))}
            </tr>
          ))} */}
          {tableData ? (
            tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {row.info.map((cell, colIndex) => {
                  if(cell.name === content) {
                    return (
                      <TableCell key={`${rowIndex}-${colIndex}`}>
                        <CellInput
                          type="text"
                          value={cell.data[0] || ''}
                          onChange={(e: any) =>
                            handleCellChange(rowIndex, colIndex, e.target.value)
                          }
                        />
                      </TableCell>
                    );
                  }
                  return null;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <TableCell>无</TableCell>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}

export default memo(Table)
