import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

const data = await fetchData()

export default function Layout(props) {
  const siteSettings = data.settingsBody.result[0][0]
  const navContent = data.navigationBody

  return (
    <>
      <Head>
        <title>{siteSettings.title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=10, user-scalable=0"
        />
        <meta
          name="description"
          content={siteSettings.description}
          key="desc"
        />
      </Head>

      <Navigation content={navContent} />
      <Header content={navContent} />

      <main className="main-wrapper">{props.children}</main>
      <Footer />
    </>
  )
}

export async function fetchData() {
  const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`)
  const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`
  const navigationBody = await fetch(navigationURL).then((res) => res.json())
  const settingsQuery = encodeURIComponent(`*[ _type == 'siteConfig']`)
  const settingsURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${settingsQuery}]`
  const settingsBody = await fetch(settingsURL).then((res) => res.json())

  return {
    navigationBody,
    settingsBody,
  }
}
