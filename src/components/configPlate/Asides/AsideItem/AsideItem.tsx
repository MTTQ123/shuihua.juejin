import { MouseEventHandler } from 'react'
import styles from './AsideItem.module.scss'

type props = {
    uname:string,
    c:string,
    click:MouseEventHandler
}

const AsideItem = ({uname,c,click}:props) => {
  return (
    <div className={`${styles.asideItem} ${c}`} onClick={click} tabIndex={1}><div>{uname}</div></div>
  )
}

export default AsideItem