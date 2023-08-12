import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer({ content }) {

  function handleClick() {
    document.body.removeAttribute('style')
  }

  const mainNav = content.result[0][1].navItems
  const socialNav = content.result[0][0].navItems

  return (
    <footer className={styles.wrapper}>
      <ul className={styles.mainNavItemList}>
        {mainNav.map((item, i) => {
          return (
            <li
              id={item.text}
              key={item.text}
              className={styles.mainNavItem}
              onClick={() => handleClick()}
            >
              <Link href={`/${item.navItemUrl.linkUrl}`}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
      <div className={styles.footerEmail}>
        <a href="mailto:camsr13@gmail.com">camsr13@gmail.com</a>
      </div>
      <ul className={styles.socialNavItemList}>
          {socialNav.map((item, i) => {
            return (
              <li key={item.text} className={styles.socialNavItem}>
                <a target="_blank" href={item.navItemUrl.linkUrl}>
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
    </footer>
  )
}
