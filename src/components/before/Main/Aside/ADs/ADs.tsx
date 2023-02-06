import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import styles from './ADs.module.scss'

type Props = {
    adList: any[],
    isPreview?: boolean,
    className?:string
}
let LIST_INIT = [
    1,
    2
]

const ADs = ({ adList, isPreview = false, className="sss" }: Props) => {
    const [list, setList] = useState(adList)

    // 关闭广告
    const closeHandler = (index: number, e: any) => {
        e.preventDefault();
        setList((prev) => {
            const temp = prev.slice();
            temp.splice(index, 1);

            return temp;
        })
    }

    const cliclHandaler: MouseEventHandler = (e) => {
        // 如果是预览，就阻止路由跳转
        if (isPreview) {
            e.preventDefault();
        }
    }

    useEffect(()=>{
        setList([...adList])
    }
    , [adList])
    

    return (
        <div className={`${styles.ads} ${className}`}>
            {
                list.map((item, index) =>
                    <div className={`${styles.adItem} marg-bottom`} key={index}>
                        <i className={`${styles.close} iconfont icon-close`} onClickCapture={(e) => closeHandler(index, e)}></i>
                        <Link href={item.route} style={{ backgroundImage: `url(${item.imgUrl})` }} className="bg-cover" onClickCapture={cliclHandaler}>{item.id}</Link>
                        <Link href='/ad' className={styles.tip} onClickCapture={cliclHandaler}>广告</Link>
                    </div>)
            }
        </div>
    )
}

export default ADs