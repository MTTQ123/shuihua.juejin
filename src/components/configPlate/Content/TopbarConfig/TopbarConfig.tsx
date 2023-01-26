import Topbar from '@/components/before/Topbar/Topbar'
import { Item, Tag } from '@/lib/type/topbarTypes';
import EasyBtn from '@/UI/Button/EasyBtn';
import { apiUrl } from 'public/url';
import { MouseEventHandler, useState } from 'react';
import Box from '../Box/Box'
import AddItem from './AddTag/AddItem';
import styles from './topbarConfig.module.scss'

const LIST_INIT: any[] = [{
  "hasTags": true,
  "name": "首页",
  "id": "recommended",
  "tags": [
    {
      "name": "综合",
      "id": "/"
    }
  ],
  "isCate": true
}]
type Props = {
  topbars: any[]
}

const TopbarConfig = ({ topbars}:Props) => {
  // 本地实时预览导航栏的数据
  const [list, setList] = useState(topbars)

  // 在添加框里点击确认后，添加到list里面
  const addCate: MouseEventHandler = (cate) => {
    const tempCate = { ...cate, isCate: true }
    setList((prev) => {

      const temp = prev.slice(0);
      temp.push(tempCate);

      return temp;
    })
  }

  // 点击增加分类，弹出框
  const [maskCName, setMaskCName] = useState("hide-must")
  const toogleMask: MouseEventHandler = () => {
    maskCName ? setMaskCName("") : setMaskCName("hide-must")
  }

  // 点击保存按钮，将本地数据存储到数据库
  // -1：未保存
  //  1：保存
  //  1：保存
  const [saveState, setSaveState] = useState(-1);
  const saveHandler: MouseEventHandler = async () => {
    setSaveState(1);

    await fetch(`${apiUrl}topbar/addTopbar`, {
      method: "POST",
      body: JSON.stringify(list)
    });
  }


  return (
    <div className={styles.topbarConfig}>
      <div className={styles.previewBox}>
        <h4>预览区</h4>
        <EasyBtn htmlFor="preBox">展示/隐藏 </EasyBtn>
        <input type="checkbox" id="preBox" className='sa' />
        {
          (list.length === 0) ? <div style={{ margin: 20 }}>暂无导航</div> : <Topbar c={styles.preview} topList={list} isPreview={true}></Topbar>
        }
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
            list.length === 0 ? <div>暂无导航，请添加一个导航</div>
              : list.map((item: Item) => {
                return (
                  <div key={item.id} className={styles.one}>
                    <input type="checkbox" id={item.id} />
                    <label htmlFor={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span>{'/' + item.id}</span>
                        <span>{item.hasTags ? "有子标签" : "无子标签"}</span>
                      </div>
                    </label>
                    <Box>
                      <div className={styles.line}>
                        <div className={styles.nickKey}>名称</div>
                        <div className={styles.nickVal}>{item.name}</div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.nickKey}>路由</div>
                        <div className={styles.nickVal}>{item.id}</div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.nickKey}>子标签</div>
                        <div className={styles.nickVal}>
                          {item.hasTags ? (
                            item.tags.map((tag: Tag) => {
                              return (
                                <div key={tag.id} className={styles.line}>
                                  <br />
                                  <div className={styles.nickKey}>{tag.name}</div>
                                  <div className={styles.nickVal}>{tag.id}</div>
                                </div>
                              )
                            })
                          ) : "暂无子标签"}
                        </div>
                      </div>
                    </Box>
                  </div>
                )
              }
              )
          }
        </div>
      </div>

      <AddItem maskCName={maskCName} setMaskCName={setMaskCName} addCate={addCate}></AddItem>
    </div>
  )
}

export default TopbarConfig
