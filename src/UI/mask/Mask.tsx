import { MouseEventHandler, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Mask.module.scss'

type Props = {
    children: any,
    className: any,
    hideFun: Function
}

const Mask = ({ children, className, hideFun }: Props) => {

    const closeMask: MouseEventHandler = (e) => {
        if ((e.target as HTMLDivElement).classList.contains("m")) {
            hideFun("hide-must")
        }
    }
    return (
        <div className={`${styles.mask} ${className} m`} onClickCapture={closeMask}>
            {children}
        </div>
    )
}

export default Mask