import dayjs from 'dayjs'

// 汉化
import 'dayjs/locale/zh-cn' // ES 2015 
dayjs.locale('zh-cn') // 全局使用

// 相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default dayjs;