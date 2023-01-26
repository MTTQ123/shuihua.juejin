import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import styles from './Aside.module.scss'
import AsideItem from './AsideItem/AsideItem'

const list = [{
    id: "topbar",
    uname: '顶部导航栏',

}, {
    id: "ads",
    uname: '广告位',
}]

const Aside = () => {
    const [c, setC] = useState("")

    const clickHandle: MouseEventHandler = (e) => {
        const current = e.currentTarget;
        const children = current.parentNode?.parentNode?.children;
        
        if (children) {
            for (let i = 0; i < children.length; i++) {
                (children[i].children[0] as HTMLElement).style.backgroundColor = "#fff";
            }
        }
        (current as HTMLElement).style.backgroundColor = "#E6F7FF";
        (document.querySelector('#toggle') as HTMLInputElement ).checked = false;

    }

    return (
        <div className={styles.aside}>
            <label htmlFor="toggle" className={styles.txt}>🔘</label>
            <input type="checkbox" id="toggle" className={styles.toggle} />
            <div>
                {
                    list.map(item => <Link key={item.id} href={item.id}><AsideItem click={clickHandle} c={c} uname={item.uname}></AsideItem></Link>)
                }
            </div>

        </div>
    )
}

export default Aside