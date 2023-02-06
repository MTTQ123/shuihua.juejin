import AdConfig from './AdConfig/AdConfig';
import TopbarConfig from './TopbarConfig/TopbarConfig'

import styles from './Content.module.scss'

const Content = ({ topbars, ads, id }: any) => {
    function what(id:string){

        switch(id){
            case "topbar":
                return <TopbarConfig topbars={topbars}></TopbarConfig>;
            case "ads":
                return <AdConfig ads={ads}></AdConfig>
        }
    }

    return (
        <div className={styles.content}>
            {
                what(id)
            }
        </div>
    )
}

export default Content