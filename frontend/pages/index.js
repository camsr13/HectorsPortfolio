import About from '../components/About'
import HomePageImage from '../components/HomePageImage'

export default function Home(props) {
  return (
    <>
      <About content={props.aboutBody} />
      <HomePageImage image={props.aboutBody} />
    </>
  )
}

export async function getStaticProps() {
  const aboutQuery = encodeURIComponent(`*[ _type == 'about']`)
  const aboutURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${aboutQuery}]`
  const aboutBody = await fetch(aboutURL).then((res) => res.json())
  return {
    props: {
      aboutBody,
    },
    revalidate: 10,
  }
}
