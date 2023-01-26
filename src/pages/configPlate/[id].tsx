import { GetServerSideProps } from 'next'
import styles from '@/styles/Common.module.scss'
import Aside from '@/components/configPlate/Asides/Aside'
import Content from '@/components/configPlate/Content/Content'
import { apiUrl } from 'public/url'

type props = {
  id: string,
  topbars: any[]
}

const Common = ({ id, topbars }: props) => {
  return (
    <>
      <title>水花仿掘金版块配置系统</title>
      <meta name="description" content="水花仿掘金版块配置系统" />
      <div>
        <main className={styles.main}>
          <div className={styles.top}>
            <h2 className={styles.low}>版块配置</h2>
            <h2 className={styles.wid}>水花仿掘金版块配置系统</h2>
            <p>v1.0.0</p>
          </div>
          <div className={styles.box}>
            <div className={styles.aside}>
              <Aside></Aside>
            </div>
            <div className={styles.content}>
              <Content topbars={topbars} id={id}></Content>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Common

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const topbars = await fetch(`${apiUrl}topbar/getAllTopbar`).then(res => res.json());
  return {
    props: {
      id,
      topbars
    },
  }
}