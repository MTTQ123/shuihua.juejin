import EasyBtn from '@/UI/Button/EasyBtn'
import Mask from '@/UI/mask/Mask'
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './AddItem.module.scss'

type Props = {
    maskCName: string,
    setMaskCName: Function,
    addCate: Function
}
type TempItem = {
    name: string,
    id: string,
    hasTags: boolean,
    tags: any[]
}
const itemInital = {
    name: "",
    id: "",
    hasTags: false,
    tags: []
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
const maxTagNum = 10;


const AddItem = ({ maskCName, setMaskCName, addCate }: Props) => {
    // 与添加的表单相互绑定的数据
    const [ele, setEle] = useState<TempItem>(itemInital)

    // 当前子标签个数
    let [num, setNum] = useState<number[]>([]);

    // 复选框是否选中，分类是否含有子标签
    const checkboxChangeHandler = () => {
        setEle((prev) => {
            if (prev.hasTags) {
                setNum([]);
                setFun(setEle, (t: any) => {
                    t.tags = [];
                })
            }
            else {
                setFun(setNum, (temp: any) => temp.push(temp.length))

                setFun(setEle, (t: any) => {
                    t.tags[0] = { "name": "", "id": "" };
                })
            }
            return { ...prev, hasTags: !prev.hasTags };
        })
        
    }

    // 添加子项按钮
    const toggleTag = (i: number) => {
        // 如果已经有最大数目的子标签，显示“已达最多”，然后直接返回
        if (num.length === maxTagNum) {
            return;
        }

        // 没有到最多
        // 记录数量
        setFun(setNum, (temp: any) => {
            temp.push(temp.length);
        })
        // 添加到记录数据的state里面
        setFun(setEle, (t: any) => {
            t.tags[num.length] = { name: "111", id: "222" };
        })
    }

    // 删除子标签
    const deleteTag = (i: number) => {
        setFun(setNum, (temp: any) => { temp.splice(i, 1) })
        setFun(setEle, (temp: any) => {
            (i === 0) && (temp.hasTags = false);
            temp.tags.splice(i, 1);
        })

    }
    const nameChangeHandler = (w: string, e: ChangeEvent<HTMLInputElement>, index: number = 0, isTag: boolean = false) => {
        isTag ? setFun(setEle, (t: any) => { t.tags[index][w] = e.target.value; })
            : setFun(setEle, (t: any) => { t[w] = e.target.value; })
    }


    useEffect(() => {
        console.log(num);
        console.log(ele.tags);
    }, [num])

    // 点击确认添加
    const confirmHandler = (element: TempItem) => {
        addCate(element);
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
                        <div className={styles.nickKey}>名称：</div>
                        <input type="text" value={ele.name} onChange={(e) => nameChangeHandler("name", e)} />
                    </div>
                    <div className={styles.line}>
                        <div className={styles.nickKey}>路由：</div>
                        <input type="text" value={ele.id} onChange={(e) => nameChangeHandler("id", e)} />
                    </div>
                    <div className={styles.line}>
                        <div className={styles.nickKey}>子标签：</div>
                        <input type="checkbox" checked={ele.hasTags} onChange={checkboxChangeHandler} />
                    </div>
                    <div className={`${styles.tagsLine}`}>
                        {
                            num.map((item, index) =>
                                <div className={`${styles.line}`} key={index}>
                                    <div className={styles.nickKey}>{index}：</div>
                                    <input type="text" placeholder='子标签名' value={ele.tags[index].name} onChange={(e) => nameChangeHandler("name", e, index, true)} />
                                    <input type="text" placeholder='子标签路由' value={ele.tags[index].id} onChange={(e) => nameChangeHandler("id", e, index, true)} />
                                    <EasyBtn className={styles.clsTag} onClickCapture={() => deleteTag(index)}><i className='iconfont icon-delete'></i></EasyBtn>
                                </div>)
                        }
                        {(num.length !== 0) && <EasyBtn onClickCapture={toggleTag}>
                            添加子项
                        </EasyBtn>}
                        <div className={`${styles.line} hide-must`}>
                            最多添加10个！！！
                        </div>
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