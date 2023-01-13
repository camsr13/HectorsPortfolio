import styles from '../styles/Projects.module.css'
import Link from 'next/link'

export default function ProjectList({ projects, liveProject }) {
  return (
    <div className={styles.projectList}>
      <div className="mobile-page-title">Projects</div>
      <ul>
        {projects.map((project) => {
          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={project.title == liveProject ? 'active-project' : ''}
            >
              <li id={project.title} key={project.title} className="navItem">
                {project.title}
                <span className={styles.clientOrigin}>({project.origin})</span>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
