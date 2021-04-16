import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>
    <Nav/>
    <div className="bubble"></div>
    <div className="bubble bubble1"></div>
    <div className="bubble bubble2"></div>
    <div className="bubble bubble3"></div>
    <div className="bubble bubble4"></div>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to the next-news</h1>
      <h3>Click on the news you want.</h3>
    </div>
    </>
  )
}
