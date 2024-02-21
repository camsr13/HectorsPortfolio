import { useState } from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message,
    }
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    })
  }

  return (
    <div className={styles.contactWrapper}>

      <div className={styles.contactText}>
        <span>Please reach out, 
        I’m always open to new opportunities and collaborations!</span>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.contactFormMain}>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              required
              className="form-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              type="text"
              required
              rows="8"
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </div>
        <div className={styles.contactFormSend}>
          <button className="projectLink" type="submit">
              Send{' '}
              <img className="form-send-arrow" src="./sendArrow.svg" width="20" />
          </button>
        </div>
      </div>
    </div>
  )
}
