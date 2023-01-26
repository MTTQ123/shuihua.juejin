
// 获取顶部导航栏配置项列表的每一个数组元素
export type Item = {
    _id: string,
    hasTags: boolean,
    name: string,
    id: string,
    tags: [],
    isCate:boolean
}


// 种类下的tag栏里的每一个tag类型
export type Tag = {
    name: string,
    id: string
  }