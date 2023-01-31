
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Categories from './Categories/Categories'
import Tags from './Tags/Tags'

import styles from './Topbar.module.scss'
import { Item } from '@/lib/type/topbarTypes'
import React from 'react'


const checkRouter = (list: [], url: string, setFun: Function) => {
    const target = list.find((item: Item) => (item.id === url.slice(1) && item.isCate));
    target && setFun(target)
}
const checkName = (list: [], name: string, setFun: Function) => {
    const target = list.find((item: Item) => (item.name === name && item.isCate));
    target && setFun(target)
}


const Topbar = ({ topList, c = {}, isPreview = false, hideTags = false, hHandler = (b: boolean) => { } }: any) => {
    const router = useRouter();

    // 获取topbar元素（方便获取其高度，并通知父组件）
    const topbarRef: any = useRef("");

    // 存储当前选择的类别
    const [cur, setCur] = useState(topList[0]);

    // 
    const [isShow, setIsShow] = useState("")

    /**
     * 滚动事件的处理
     */
    let scrollTop = 0
    let topValue = 0
    const getScollTop = () => {
        let scrollTop = 0;
        if (document?.documentElement && document?.documentElement?.scrollTop) {
            scrollTop = document?.documentElement.scrollTop;
        }
        else if (document?.body) {
            scrollTop = document?.body.scrollTop;
        }
        return scrollTop;
    }

    const bindHandleScroll = () => {
        scrollTop = getScollTop();
        if (scrollTop >= topValue && scrollTop > 180) {
            setIsShow("hide-must-h")
        }
        else {
            setIsShow("")
        }
        setTimeout(function () { topValue = scrollTop; }, 0);
    }

    // 路由改变，当前标签改变
    useEffect(() => {
        window.addEventListener("scroll", bindHandleScroll)

        // 如果是在配置模块的预览区
        // 点击时获取目标并判断是否隐藏
        if (isPreview) {
            (document.querySelector(".mw") as any)
                .addEventListener('click', (e: any) => {
                    // const a = topList.find((item: Item) => (item.name === e.target.innerHTML))
                    // a && (a.hasTags ? (hideOut = false) : (hideOut = true))
                    checkName(topList, e.target.innerHTML, setCur);
                })
        }

        // 如果是用户的主页面
        // 获取当前的url来判断是否隐藏
        else {
            // 用来设置首页主区域顶部内边距
            hHandler(topbarRef.current.clientHeight > 100 ? false : true);


            // 首次进入页面立即判断
            const url = router.asPath
            checkRouter(topList, url, setCur);


            // 在路由改变时判断
            const routeChangeComplete = (url: string) => {
                checkRouter(topList, url, setCur);
            }
            router.events.on('routeChangeComplete', routeChangeComplete);
            return () => {
                router.events.off('routeChangeComplete', routeChangeComplete)
            }
        }
    }, [cur])


    return (
        <div className={`${styles.topbar} mw ${c}`} ref={topbarRef}>
            <div className={`${styles.top} ${isShow}`}>
                <div className={styles.favicon}>
                    <h2 className={styles.title}>稀土掘金</h2>
                </div>
                <div className={styles.cates}>
                    <Categories list={topList} curName={cur.name} isPreview={isPreview}>
                    </Categories>
                </div>
            </div>
            {
                hideTags ? null : <div className={styles.bottom}>
                    {
                        cur.hasTags ? <Tags list={cur.tags} isPreview={isPreview}></Tags> : null
                    }
                </div>
            }
        </div>
    )
}

export default React.memo(Topbar) 