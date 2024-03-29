import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}){
    function handleDeleteComment(){
        onDeleteComment(content);
    }
    return(
        <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/88410418?v=4" />
            <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Diego Fernandes</strong>
                                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">A cerca de 1h atrás</time>
                            </div>
                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>
                    <footer>
                        <button>
                            <ThumbsUp/>
                            Aplaudir <span>28</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}