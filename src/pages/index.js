// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
//import List from "./components/artistsArr"
//import List from './qcomps/artistsRemoveArr'
// import Gallery from './components/state'
// import Gallery from './qcomps/state'
// import PersonData from './components/stateObj'
// import Form from './qcomps/stuckForm'
// import FeedbackForm from './qcomps/thankYouCrash'
import BucketList from './qcomps/arrObj'
import Form from './qcomps/stuckForm'
import List from './components/artistsArr'

export default function Home() {
  return (
    <div className={styles.main}>

        <BucketList />
        {/* <List/> */}
    </div>
  )
}
