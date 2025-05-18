import Mock from 'mockjs'
// 引入模板函数类
import mockData from './modules/mockData'

const { mock } = Mock // Mock函数

// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
mock('/api/data/table', 'post', mockData.getData)
