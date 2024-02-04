import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { Comment } from "./Comment.jsx"
import { Avatar } from "./Avatar.jsx"
import { useState } from 'react'

// conceito 'estado' para leitura de componentes = variáves que eu quero que o componente monitore
export function Post({author, publishedAt, content}){
   

    const [comments, setComments] = useState([
       'Post muito bacana hein'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormated = format(publishedAt,"d 'de' LLL 'às' HH:mm'h'", {
        locale:ptBr,
    }) 
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:  ptBr,
        addSuffix: true
    })

    //setComments: é usado para avisar alterações para o react
    function handleCreateNewComment(){
        event.preventDefault()

        const newCommentText =  event.target.comment.value
        setComments([...comments, newCommentText])
        setNewCommentText('');

        //event.target.comment.value = '';//pesquisar termo de programação imperativa aqui
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function onDeleteComment(comment){
        console.log(`Deletar comentário ${comment}`)
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl}/>
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.nameUser}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                  if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                  } else if (line.type == 'link'){
                    return <p key={line.content}><a href="">{line.content}</a></p>
                  }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea name="comment" 
                placeholder="Deixe seu comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}/>
                
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                    
            </form>

            <div className={styles.commentList}>
            {comments.map(comment => {
                return (<Comment key={comment} 
                    content={comment} 
                    onDeleteComment={onDeleteComment}/>)
              })}
            </div>


        </article>
        
    )
}
/*new Intl.DateTimeFormat('pt-Br',{
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt) obs: linhas substituida para uso da biblioteca propria para formatação de datetime*/
