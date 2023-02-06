import ADs from './ADs/ADs'
import styles from './Aside.module.scss'

type Props = {
    adList: any[]
}

const Aside = ({ adList }: Props) => {
    return (
        <div className={styles.aside}>
            <ADs adList={adList}></ADs>
        </div>
    )
}

export default Aside