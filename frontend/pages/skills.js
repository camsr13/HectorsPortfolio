import Skills from '../components/Skills'

export default function SkillsSet(props) {
  return (
    <>
      <Skills content={props.skillsBody} />
    </>
  )
}

export async function getStaticProps() {
  const skillsQuery = encodeURIComponent(`*[ _type == 'skills']`)
  const skillsURL = `https://vgbsv8ys.api.sanity.io/v1/data/query/production?query=[${skillsQuery}]`
  const skillsBody = await fetch(skillsURL).then((res) => res.json())
  return {
    props: {
      skillsBody,
    },
    revalidate: 10,
  }
}
