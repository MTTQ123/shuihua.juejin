import Link from "next/link";
import { Tag } from "@/lib/type/topbarTypes";
import styles from "./Tags.module.scss";
import { MouseEventHandler } from "react";

type Props = {
  list: Tag[],
  isPreview: boolean
}
const Tags = ({ list, isPreview }: Props) => {

  const clickHandler: MouseEventHandler = (e) => {
    // 如果是预览，就阻止路由跳转
    if (isPreview) {
      e.preventDefault();
    }
  }
  return (
    <div className={styles.tags}>
      <div className={`${styles.list} w`}>
        <ul>
          {
            list.map((item: Tag) => <li key={item.id}><Link href={`${item.id}`} onClick={clickHandler}>{item.name}</Link></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Tags