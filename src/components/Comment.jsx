import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
         <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/88410418?v=4" alt="" />
            <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Diego Fernandes</strong>
                                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">A cerca de 1h atrás</time>
                            </div>
                            <button title='Deletar comentário'>
                                    <Trash size={24}/>
                                </button>
                        </header>
                        <p>Muito bom Devon, Parabéns paezão</p>
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