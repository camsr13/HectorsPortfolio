import styles from '../styles/Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ content }) {
  const [isActive, setActive] = useState(false)

  function handleClick() {
    document.body.removeAttribute('style')
    if (isActive) {
      setActive(false)
    }
  }

  return (
    <>
      <header className={`${styles.wrapper} ${isActive ? 'is-active' : ''}`}>
        <h1 className={styles.title}>
          <Link legacyBehavior href="/">
            <a onClick={() => handleClick()}>Cameron Richards</a>
          </Link>
        </h1>
        <AnnouncementBar />
        <CurrentTime />
        <MobileNavigation
          items={content}
          isActive={isActive}
          setActive={setActive}
        />
      </header>
    </>
  )
}
