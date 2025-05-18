// first/types.ts

export type TimeRangeType =
  | 'today'
  | 'currentWeek'
  | 'currentMonth'
  | 'currentYear'

export interface ViewProps {
  timeRange?: TimeRangeType
  tableData?: any[]
  onChangeTable: (data: any[]) => void
}