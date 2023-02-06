import EasyBtn from '@/UI/Button/EasyBtn'
import Mask from '@/UI/mask/Mask'
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './AddItem.module.scss'

type Props = {
    maskCName: string,
    setMaskCName: Function,
    add: Function
}
type TempItem = {
    id: string,
    imgUrl: string,
    route:string
}
const itemInital = {
    id: "",
    imgUrl: "",
    route: ""
}
const setFun = (setState: Function, operFun: Function) => {
    setState((prev: any) => {
        let temp = null;
        if (Array.isArray(prev)) {
            temp = prev.slice();;
        }
        else {
            temp = { ...prev };
        }
        operFun(temp);

        return temp;
    })
}


const AddItem = ({ maskCName, setMaskCName, add }: Props) => {
    // 与添加的表单相互绑定的数据
    const [ele, setEle] = useState<TempItem>(itemInital)

    const nameChangeHandler = (w: string, e: ChangeEvent<HTMLInputElement>, index: number = 0, isTag: boolean = false) => {
        isTag ? setFun(setEle, (t: any) => { t.tags[index][w] = e.target.value; })
            : setFun(setEle, (t: any) => { t[w] = e.target.value; })
    }

    // 点击确认添加
    const confirmHandler = (element: TempItem) => {
        add(element);
        // 初始化添加框里的值，下次添加时为空
        setEle(itemInital);
        // 关闭添加框
        setMaskCName("hide-must");
    }


    return (
        <Mask className={`${maskCName}`} hideFun={setMaskCName}>
            <div className={styles.addItem}>
                <div className={styles.box}>
                    <div className={styles.line}>
                        <div className={styles.nickKey}>广告名称：</div>
                        <input type="text" value={ele.id} onChange={(e) => nameChangeHandler("id", e)} />
                    </div>
                    <div className={styles.line}>
                        <div className={styles.nickKey}>背景图片：</div>
                        <input type="text" value={ele.imgUrl} onChange={(e) => nameChangeHandler("imgUrl", e)} />
                    </div>
                    <div className={styles.line}>
                        <div className={styles.nickKey}>广告链接：</div>
                        <input type="text" value={ele.route} onChange={(e) => nameChangeHandler("route", e)} />
                    </div>

                </div>
                <div className={styles.btns}>
                    <EasyBtn className={styles.cancel} onClickCapture={() => setMaskCName("hide-must")}>取消</EasyBtn>
                    <EasyBtn className={styles.confirm} onClickCapture={() => { confirmHandler(ele) }}>确认</EasyBtn>
                </div>
            </div>
        </Mask>
    )
}

export default AddItem