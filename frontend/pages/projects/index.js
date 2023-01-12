import ProjectList from '../../components/ProjectList'

export default function Projects(props) {
  const projectList = props.projects.result[0]
  return <ProjectList projects={projectList} />
}

export async function getStaticProps() {
  const projectsQuery = encodeURIComponent(`*[ _type == 'projects']`)
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectURL).then((res) => res.json())
  return {
    props: {
      projects,
    },
    revalidate: 10,
  }
}
