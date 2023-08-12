import styles from '../styles/MobileNavigation.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileNavigation({ items, isActive, setActive }) {
  const mainNav = items.result[0][0].navItems
  const socialNav = items.result[0][0].navItems

  const [menuStatus, setMenuStatus] = useState('Menu')

  useEffect(() => {
    isActive ? setMenuStatus('Close') : setMenuStatus('Menu')
  }, [isActive])

  function handleClick() {
    setActive((current) => !current)
    !isActive ? setMenuStatus('Close') : setMenuStatus('Menu')
  }

  function handleNavClick() {
    document.body.removeAttribute('style')
    handleClick()
  }
  return (
    <>
      <p onClick={() => handleClick()} className={styles.menuButton}>
        {menuStatus}
      </p>
      <nav className={`mobileNavWrapper ${isActive ? 'is-active' : ''}`}>
        <ul className={styles.mainNavItemList}>
          {mainNav.map((item, i) => {
            return (
              <li
                id={item.text}
                key={item.text}
                className="navItem"
                onClick={() => handleNavClick()}
              >
                <Link href={`/${item.navItemUrl.linkUrl}`}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className={styles.socialNavItemList}>
          {socialNav.map((item, i) => {
            return (
              <li key={item.text} className="navItem">
                <a target="_blank" href={item.navItemUrl.linkUrl}>
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
