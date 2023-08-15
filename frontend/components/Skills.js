import styles from '../styles/Skills.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function Skills( { content } ) {
  const bodyBlock = content.result[0][0]

  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log("888888888");
  console.log(content);

  return (
    <div className={styles.skillsContent}>
      <h1 className={styles.skillsHeading}> Design </h1>
      <BlockContent blocks={bodyBlock.design} />
      <h1 className={styles.skillsHeading}> Front End + Web</h1>
      <BlockContent blocks={bodyBlock.frontend} />
      <h1 className={styles.skillsHeading}> Back End </h1>
      <BlockContent blocks={bodyBlock.backend} />
    </div>
  )
}
