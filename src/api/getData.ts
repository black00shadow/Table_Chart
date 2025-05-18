import { TableType } from '@/mock/modules/mockData'
import { post } from '@/utils/request'

/* 用户登录api */
export const getData = (params: { type: TableType }) => {
  return post('/data/table', params)
}
