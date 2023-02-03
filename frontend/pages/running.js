import styles from '../styles/Running.module.css'
import { router } from 'next/router'

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
  async function getAccessToken() {
    const client_id = process.env.STRAVA_CLIENT_ID
    const client_secret = process.env.STRAVA_CLIENT_SECRET
    const refresh_token = process.env.STRAVA_REFRESH_TOKEN

    const headers = {
      Accept: 'application/json text/plain, */*"',
      'Content-Type': 'application/json',
    }

    const body = JSON.stringify({
      client_id,
      client_secret,
      refresh_token,
      grant_type: 'refresh_token',
    })

    const authorize = await fetch('https://www.strava.com/oauth/token', {
      headers,
      method: 'POST',
      body,
    }).then((res) => res.json())

    return authorize.access_token
  }

  const response = async () => {
    const athleteId = 63544607
    const access_token = await getAccessToken()

    return await fetch(
      `https://www.strava.com/api/v3/athletes/${athleteId}/stats?access_token=${access_token}`
    ).then((res) => res.json())
  }

  const data = await response()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
