import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Item } from '@/lib/type/topbarTypes'
import styles from './Categories.module.scss'


type Props = {
  children: any,
  list: Item[],
  curName: string,
  isPreview: boolean
}

const Categories = ({ children, list, curName, isPreview }: Props) => {

  // 控制categories区域在
  // 小于1190时自动隐藏（css控制）
  // 小于1190时自动隐藏

  // 点击按钮添加显示的样式（按钮有css控制）
  const [cates, setCates] = useState("")
  const showCates = () => {
    setCates(cates ? "" : "show-must");
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      // 大于1190时自动显示（删去 必须显式 的类）
      if (window.innerWidth > 1190) {
        setCates("");
      }
    })
  })

  const cliclHandaler: MouseEventHandler = (e) => {
    // 点击后如果是小屏幕就隐藏列表
    if (window.innerWidth < 1190) {
      setCates("")
    }
    // 如果是预览，就阻止路由跳转
    if (isPreview) {
      e.preventDefault();
    }
  }


  return (
    <div className={styles.categories}>
      <span className={styles.sel}>{curName}<i className={!cates ? "iconfont icon-xiangxia" : "iconfont icon-xiangshang"} onClick={showCates}></i></span>
      <ul className={`${styles.list} ${cates}`}>
        {
          list.map((item: Item) => <li key={item.id}><Link href={`/${item.id}`} onClick={cliclHandaler}>{item.name}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default Categories