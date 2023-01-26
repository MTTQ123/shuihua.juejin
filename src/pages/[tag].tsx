import { GetServerSideProps } from 'next/types'
import Head from 'next/head'
import styles from '@/styles/Main.module.scss'
import Topbar from '@/components/before/Topbar/Topbar'
import ArticleList from '@/components/before/Main/ArticleList/ArticleList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { apiUrl } from 'public/url'

type Props = {
    id: string
    postData: [any],
    topList: any[]
}

export default function Home({ id, postData, topList }: Props) {

    // 从Topbar组件获取其高度来设置main区域顶部内边距
    // （>100）checked为false，不选中，为120px
    // （<100）checked为true，单选框选中，为70px
    const [isCheckd, setIsCheckd] = useState(false)
    const checkedHandler = (h: boolean) => {
        setIsCheckd(h);
    }
    useEffect(() => {
        const ipt: any = document.querySelector('#ipt');
        isCheckd ? ipt.checked = true : ipt.checked = false
    }, [isCheckd])

    return (
        <>
            <Head>
                <title>{id}</title>
                <meta name="description" content="在字节跳动第五届青训营最终实战的使用next.js完成的静态仿掘金项目" />
                <meta name="keywords" content="next.js 仿掘金 青训营 第五届 字节跳动" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.box}>
                <Topbar topList={topList} hHandler={checkedHandler} hideTags={false}></Topbar>
                <input type="checkbox" className={`${styles.ipt} `} id="ipt" />
                <div className={`${styles.content} w`}>
                    <div className={styles.main}>
                        <div className={styles.sort}>
                            <Link href='/'>推荐</Link>
                            <Link href='/'>热门</Link>
                            <Link href='/'>最新</Link>
                        </div>
                        <ArticleList postData={postData}></ArticleList>
                    </div>
                    <div className={styles.right}>
                        111
                    </div>

                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {



    const { tag } = context.query;

    // const res = await fetch(`${apiUrl}article/${tag}`).then(res => res.json());
    // const topbars = await fetch(`${apiUrl}/topbar/getAllTopbar`).then(res => res.json());

    return {
        props: {
            id: tag,
            postData: [],
            topList: [],
        }
        // props: {
        //     id: tag,
        //     postData: res,
        //     topList: topbars,
        // }
    }
}