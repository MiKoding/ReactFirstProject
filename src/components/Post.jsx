import styles from "./Post.module.css"
import { Comment } from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://avatars.githubusercontent.com/u/88410418?v=4"/>
                    
                    <div className={styles.authorInfo}>
                        <strong>Diego Alves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado a 1h</time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a> {''}
                    <a>#nlw</a> {''}
                    <a href="">#rocketseat</a>{''}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder="Deixe seu comentário"/>
                
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                    
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>


        </article>
        
    )
}
