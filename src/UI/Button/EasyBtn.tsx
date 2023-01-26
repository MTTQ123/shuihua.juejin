import { MouseEventHandler } from 'react'
import styles from './Btn.module.scss'

type Props = {
    children: any,
    className?:string,
    htmlFor?: string,
    onClickCapture?:Function
}

const EasyBtn = ({ children, className="", htmlFor = "",onClickCapture }: Props) => {
    return (
        <div className={`${styles.easyBtn} ${className}`} onClickCapture={onClickCapture as MouseEventHandler}>
            <label htmlFor={htmlFor}>
                    {children}
            </label>
        </div>
    )
}

export default EasyBtn