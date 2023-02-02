export default function Running(props) {
  console.log(props)

  return <div>Testing</div>
}

export async function getStaticProps() {
  const data = await fetch('localhost:3000/api/strava')
  return {
    props: {
      data,
    },
  }
}
