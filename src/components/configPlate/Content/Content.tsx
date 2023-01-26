import styles from './Content.module.scss'
import TopbarConfig from './TopbarConfig/TopbarConfig'

const Content = ({ topbars, id }: any) => {
    function what(id:string){

        switch(id){
            case "topbar":
                return <TopbarConfig topbars={topbars}></TopbarConfig>
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