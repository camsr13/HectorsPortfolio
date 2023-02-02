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

export default async (req, res) => {
  const athleteId = 63544607
  const access_token = await getAccessToken()

  const response = await fetch(
    `https://www.strava.com/api/v3/athletes/${athleteId}/stats?access_token=${access_token}`
  ).then((res) => res.json())

  return res.status(200).json(response)
}
