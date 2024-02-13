// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import PackingList from './components/props_item'
import List from './components/list_keys'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile/> */}
        <Profile/>
        <MyComp/>
        <Bio/>
        <TodoList/>
        <PackingList/>
        <List/>
        <RecipeList/>
    </div>

  )
}
