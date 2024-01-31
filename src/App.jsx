import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import "./Global.css"

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author = "Mikaio Yamada" content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo unde officia voluptates eligendi reiciendis aut maiores inventore ipsam recusandae eaque odit dolores, perferendis corporis nesciunt nostrum molestiae aliquid necessitatibus."/>
          <Post author = "Regivaldo Surez" content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo unde officia voluptates eligendi reiciendis aut maiores inventore ipsam recusandae eaque odit dolores, perferendis corporis nesciunt nostrum molestiae aliquid necessitatibus." />
         </main>
      </div>
      
    </div>
  )
}

export default App
