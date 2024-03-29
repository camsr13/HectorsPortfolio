import MobileProjectSlideshow from '../../components/MobileProjectSlideshow'
import ProjectList from '../../components/ProjectList'
import styles from '../../styles/Projects.module.css'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Project(props) {
  const projectContent = props.project.result[0][0]
  const projectList = props.projects.result[0]
  const router = useRouter()

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  return (
    <>
      <ProjectList projects={projectList} liveProject={projectContent.title} />
      <MobileProjectSlideshow project={projectContent} />
      <motion.div
        className={styles.projectContent}
        key={router.asPath}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.65,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
      >
        <div className={styles.projectContentInner}>
          <BlockContent blocks={projectContent.body} />
          {projectContent.extraCredits && (
            <div className={styles.extraCredit}>
              <BlockContent blocks={projectContent.extraCredits} />
            </div>
          )}
          <div className={styles.projectDisciplines}>
            {projectContent.projectDisciplines.map((discipline) => {
              return (
                <span key={discipline} className={styles.projectDisciplineItem}>
                  {discipline.text}
                </span>
              )
            })}
          </div>
          <a
            href={projectContent.link.linkUrl}
            className="projectLink"
            target="_blank"
          >
            View Project{' '}
            <img
              className={styles.projectArrow}
              src="../projectArrow.svg"
              width="15"
            />
          </a>
        </div>
      </motion.div>
      <motion.div
        className={styles.projectImages}
        key={projectContent.title}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.35,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        {projectContent.projectImages.map((image, i) => {
          return (
            <Fragment key={i}>
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(image.image).width(1500).quality(100).url()}
                  className={styles.projectImage}
                  width="700"
                  height="400"
                  placeholder="blur"
                  blurDataURL={urlFor(image.image).width(1500).url()}
                  alt={projectContent.title}
                  loading="lazy"
                />
              </div>
            </Fragment>
          )
        })}
      </motion.div>
    </>
  )
}

export async function getStaticPaths() {
  const projectsQuery = encodeURIComponent(`*[ _type == 'projects' ]`)
  const projectsURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectsURL).then((res) => res.json())

  const paths = projects.result[0].map((project) => ({
    params: { slug: project.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const projectsQuery = encodeURIComponent(`*[ _type == 'projects' ]`)
  const projectsURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectsQuery}]`
  const projects = await fetch(projectsURL).then((res) => res.json())

  const { slug = '' } = context.params
  const projectQuery = encodeURIComponent(
    `*[ _type == 'projects' && id == '${slug}']`
  )
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${projectQuery}]`
  const project = await fetch(projectURL).then((res) => res.json())

  return {
    props: {
      project,
      projects,
    },
    revalidate: 1,
  }
}
