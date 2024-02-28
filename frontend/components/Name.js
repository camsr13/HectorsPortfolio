import styles from '../styles/Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from './CurrentTime'
import MobileNavigation from './MobileNavigation'

export default function Name({ content }) {


  return (
    <>
      <header>
        <h1 className={styles.title}>Hector Clarke</h1>
      </header>
    </>
  )
}
