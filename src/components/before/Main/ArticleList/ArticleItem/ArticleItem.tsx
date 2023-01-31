import { fromNow } from '@/lib/time';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ArticleItem.module.scss'


const ArticleItem = ({ info }: any) => {
  const router = useRouter();

  const tags: [string] = info.tags;
  return (
    <div className={styles.articleItem} onClickCapture={()=>router.push(`/posts/${info.id.toString()}`)}>
      <div className={styles.top}>
        <Link href='/' className={styles.user}>{info.author}</Link>
        <div className={styles.date}>
          {
            fromNow(info.createdTime)
          }
        </div>
        <div className={styles.tags}>
          {
            tags.map(item => <span key={item}><Link href="/">{item}</Link> </span>)
          }
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.title}>
            <Link href='/' title={info.title}>{info.title}</Link>
          </div>
          <p className={`${styles.p}`}>{info.contentHtml}</p>
          <ul>
            <li>
              <i className='iconfont icon-yanjing'></i>
              <span>12</span>
            </li>
            <li>
              <i className='iconfont icon-zan'></i>
              <span>12</span>
            </li>
            <li>
              <i className='iconfont icon-pinglun'></i>
              <span>12</span>
            </li>
          </ul>
        </div>
        <div className={`${styles.right} ${info.imgUrl.trim()?"":"hide-must"}`}>

        </div>
      </div>
    </div>
  )
}

// export default React.memo(ArticleItem)
export default (ArticleItem)