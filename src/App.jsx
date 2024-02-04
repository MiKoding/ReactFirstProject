import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import "./Global.css"

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: string

const posts = [
  {

    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/88410418?v=4',
      nameUser: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:  'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {

    id: 2,
    author:{
      avatarUrl: 'https://github.com/jonathasmarques102030.png',
      nameUser: 'Mario Otavio',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:  'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-10 21:00:00')
  }
];

//uso de iteração: fazer uma repetição de algo, iterar um array por exemplo
//obs: forEach não tem retorno, porém o map devolve algum valor
function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
         </main>
      </div>
      
    </div>
  )
}

export default App
