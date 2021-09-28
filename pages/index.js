import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MatchingPair from './matching-pair/index'

export default function Home() {
  return (
    <div>
      <h1>Game Board Lesson</h1>
      <Link href="/matching-game">
        <a>testing</a>
      </Link>
      {/* <MatchingPair /> */}
    </div>
  )
}
