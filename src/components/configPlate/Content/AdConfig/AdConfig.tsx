import ADs from '@/components/before/Main/Aside/ADs/ADs'
import EasyBtn from '@/UI/Button/EasyBtn'
import { MouseEventHandler, useState } from 'react'
import Box from '../Box/Box'
import styles from './AdConfig.module.scss'
import AddItem from './AddTag/AddItem'

type Props = {
    ads: any[]
}

const AdConfig = ({ ads }: Props) => {
    const [list, setList] = useState(ads)
    const [maskCName, setMaskCName] = useState("hide-must")
    const toogleMask: MouseEventHandler = () => {
        maskCName ? setMaskCName("") : setMaskCName("hide-must")
    }
    // 点击保存按钮，将本地数据存储到数据库
    const saveHandler: MouseEventHandler = async () => {
        await fetch(`/api/ad/addAd`, {
            method: "POST",
            body: JSON.stringify(list)
        });
        // console.log(`${apiUrl}`);
        
    }

    const add: MouseEventHandler = (ele) => {
        setList([...list, ele])
    }
    return (
        <div className={styles.adConfig}>
            <div className={styles.previewBox}>
                <h4>预览区</h4>
                <EasyBtn htmlFor="preBox">展示/隐藏 </EasyBtn>
                <input type="checkbox" id="preBox" className='sa' />
                <ADs className={`scroll-bar ${styles.preview}`} adList={list} isPreview={true}></ADs>
            </div>

            <div className={styles.box}>
                <div>
                    <div className={styles.txt}>
                        操作
                    </div>
                    <EasyBtn onClickCapture={toogleMask}>添加</EasyBtn>
                    <EasyBtn onClickCapture={saveHandler}>保存</EasyBtn>
                </div>
                <div>
                    {
                        list.length === 0 ? <div>暂无广告，请添加一个</div>
                            : list.map((item) => {
                                return (
                                    <div key={item.id} className={styles.one}>
                                        <Box className={styles.d}>
                                            <div className={styles.line}>
                                                <div className={styles.nickKey}>名称</div>
                                                <div className={styles.nickVal}>{item.id}</div>
                                            </div>
                                            <div className={styles.line}>
                                                <div className={styles.nickKey}>图片地址</div>
                                                <div className={styles.nickVal}>{item.imgUrl}</div>
                                            </div>
                                            <div className={styles.line}>
                                                <div className={styles.nickKey}>路由</div>
                                                <div className={styles.nickVal}>{item.route}</div>
                                            </div>

                                        </Box>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>

            <AddItem maskCName={maskCName} setMaskCName={setMaskCName} add={add}></AddItem>
        </div>
    )
}

export default AdConfig