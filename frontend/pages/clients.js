import styles from '../styles/Clients.module.css'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { Fragment } from 'react'
import Image from 'next/image'

export default function Clients(props) {
  const [clientContent, setClientContent] = useState({})
  const [hasContent, setHasContent] = useState(false)
  let clientItems = []
  let clientSpans = []

  const clientList = props.clients.result[0].sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  useEffect(() => {
    if (clientContent?.mainImage) {
      setHasContent(true)
    }
  }, [clientContent])

  const imgBuilder = imageUrlBuilder({
    projectId: '36om7i3d',
    dataset: 'production',
  })

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  if (typeof window !== 'undefined') {
    clientItems = document.querySelectorAll('.Clients_clientItem__D8a_q')
    clientSpans = document.querySelectorAll('.Clients_clientOrigin__echlS')
    if (clientContent) {
      document.body.style.backgroundColor = clientContent.backgroundColor
    } else {
      document.body.style.backgroundColor = getComputedStyle(
        document.body
      ).getPropertyValue('--background-color')
    }
  }

  function handleClick(e) {
    const targetClient = e.target.id
    if (targetClient !== clientContent.title) {
      setHasContent(false)
      clientItems.forEach((client) => client.classList.remove('active-client'))
    }

    const content = clientList.find((content) => content.title == targetClient)
    setClientContent(content)
    e.target.classList.add('active-client')
  }

  return (
    <>
      <div className={styles.clientWrapper}>
        <div className="mobile-page-title">Clients</div>
        {clientList.map((client) => {
          return (
            <Fragment key={client.id}>
              <div className={styles.clientContainer}>
                <a
                  id={client.title}
                  className={styles.clientItem}
                  onClick={(e) => handleClick(e)}
                >
                  {client.title}
                </a>
                <span className={styles.clientOrigin}>({client.origin})</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <div className={styles.clientContent}>
        {hasContent && (
          <>
            <div className={styles.clientImageContainer}>
              <Image
                src={urlFor(clientContent.mainImage)
                  .width(1500)
                  .quality(100)
                  .url()}
                className={styles.clientImage}
                layout="fill"
                objectFit="cover"
                blurDataURL={urlFor(clientContent.mainImage).width(1500).url()}
                alt={clientContent.title}
                loading="lazy"
              />
            </div>
            <div className={styles.clientDisciplines}>
              {clientContent.disciplines}
            </div>
            <a
              href={clientContent.link.linkUrl}
              className="projectLink"
              target="_blank"
            >
              View Client{' '}
              <img
                className={styles.projectArrow}
                src="./projectArrow.svg"
                width="15"
              />
            </a>
          </>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const clientsQuery = encodeURIComponent(`*[ _type == 'clients']`)
  const projectURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${clientsQuery}]`
  const clients = await fetch(projectURL).then((res) => res.json())
  return {
    props: {
      clients,
    },
    revalidate: 10,
  }
}
