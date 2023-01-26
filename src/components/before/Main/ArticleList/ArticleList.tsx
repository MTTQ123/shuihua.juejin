import styles from './ArticleList.module.scss'
import ArticleItem from './ArticleItem/ArticleItem';

type props = {
    postData:[any]
}

const ArticleList = ({postData}: props) => {
    return (
        <div className={styles.articleList}>
            {
                postData.map(item => <ArticleItem info={item} key={item.id}></ArticleItem>)
            }
        </div>
    )
}

export default ArticleList