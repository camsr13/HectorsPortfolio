import styles from '../styles/Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import CurrentTime from '../components/CurrentTime'
import MobileNavigation from '../components/MobileNavigation'

export default function Header({ content }) {
  const [menuStatus, setMenuStatus] = useState('Menu')
  const [isActive, setActive] = useState(false)

  function handleClick() {
    document.body.removeAttribute('style')
    setActive((current) => !current)
  }

  return (
    <>
      <header className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link legacyBehavior href="/">
            <a onClick={() => handleClick()}>Fergus Haywood</a>
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
