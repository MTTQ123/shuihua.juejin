import styles from './Box.module.scss'

type Props = {
  children: any
}

const Box = ({ children }: Props) => {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}

export default Box