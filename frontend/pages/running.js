import styles from '../styles/Running.module.css'

export default function Running({ data }) {
  const runningData = data.all_run_totals

  const totalKms = (runningData.distance / 1000).toFixed(0)

  return (
    <div className={styles.runningWrapper}>
      <p>Running Totals</p>
      <p>{totalKms} Kilometers in total</p>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://fergushaywood.com/api/strava').then((res) =>
    res.json()
  )
  console.log('data from frontend', data)
  return {
    props: {
      data: data,
    },
  }
}
