import styles from '../styles/HomePageImage.module.css'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

export default function HomePageImage({ image }) {
  const homepageImage = image.result[0][0].image

  function urlFor(source) {
    return imgBuilder.image(source)
  }

  const imgBuilder = imageUrlBuilder({
    projectId: 'vgbsv8ys',
    dataset: 'production',
  })

  return (
    <div className={styles.wrapper}>
      {homepageImage && (
        <Image
          src={urlFor(homepageImage).width(1000).quality(65).url()}
          className={styles.image}
          layout="fill"
          alt="Cameron Richards Homepage Gif Image"
          placeholder="blur"
          blurDataURL={urlFor(homepageImage).url()}
          loading="lazy"
        />
      )}
    </div>
  )
}
