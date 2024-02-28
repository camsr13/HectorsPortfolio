import Moment from 'react-moment'
import 'moment-timezone'
import NoSsr from './NoSsr'
import styles from '../styles/CurrentTime.module.css'

export default function CurrentTime() {
  return (
    <NoSsr>
      <div className={styles.wrapper}>
        <h4> EST   
          <Moment
            className={styles.time}
            tz="Australia/Sydney"
            interval="1000"
            format="hh:mm:ss a"
          />
        </h4>
        <h4> MEL   
          <Moment
            className={styles.time}
            tz="Australia/Melbourne"
            interval="1000"
            format="hh:mm:ss a"
          />
        </h4>
      </div>
    </NoSsr>
  )
}
