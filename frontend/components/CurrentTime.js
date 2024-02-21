import Moment from 'react-moment'
import 'moment-timezone'
import NoSsr from './NoSsr'
import styles from '../styles/CurrentTime.module.css'

export default function CurrentTime() {
  return (
    <NoSsr>
      <div className={styles.wrapper}>
        <h4><br/> Te Whanganui-a-Tara, Aoteroa</h4>
        <Moment
          className={styles.time}
          tz="Pacific/Auckland"
          interval="1000"
          format="hh:mm:ss a"
        />
      </div>
    </NoSsr>
  )
}
