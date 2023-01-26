import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { apiUrl } from 'public/url'
import styles from "@/styles/Detail.module.scss";
import Topbar from '@/components/before/Topbar/Topbar';

const Post = ({ postData,topList }: any) => {
    
    return (
        <div className={styles.post}>
            <Topbar topList={topList}></Topbar>
            <Link href="/">首页</Link>
            <MdEditor className={styles.content} modelValue={postData.contentHtml} previewTheme="smart-blue" previewOnly/>
        </div>
    )
}
export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const article = await fetch(`${apiUrl}article/getOne`, {
        method: "POST",
        body: JSON.stringify(id)
    }).then(res => res.json());

    const topbars = await fetch(`${apiUrl}/topbar/getAllTopbar`).then(res => res.json());

    return {
        props: {
            postData: article,
            topList: topbars,
        }
    }
}