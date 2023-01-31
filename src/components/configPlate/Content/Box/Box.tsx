import styles from './Box.module.scss'

type Props = {
  children: any,
  className?: string
}

const Box = ({ children, className="" }: Props) => {
  return (
    <div className={`${styles.box} ${className}`}>
      {children}
    </div>
  )
}

export default Box