import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MatchingPair from './matching-pair/index'

export default function Home() {
  return (
    <div>
      <MatchingPair />
    </div>
  )
}
