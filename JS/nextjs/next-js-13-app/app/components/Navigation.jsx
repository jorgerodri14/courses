import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}]

export function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(link => (
            <li key={link.route}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
