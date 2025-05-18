// first/types.ts

export type TimeRangeType =
  | 'today'
  | 'currentWeek'
  | 'currentMonth'
  | 'currentYear'

export interface ViewProps {
  timeRange: TimeRangeType
  tableData: {
    time: string
    info: {
      name: string
      data: number[]
    }[]
  }[][]
  onChangeTable: (
    data: {
      time: string
      info: {
        name: string
        data: number[]
      }[]
    }[][]
  ) => void
}
