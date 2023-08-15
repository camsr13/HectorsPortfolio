import { useState } from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  // States for contact form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    const data = {
      name,
      email,
      message,
    }

    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      })
      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Sent')
    }
  }

  return (
    <>
      <div className={styles.contactWrapper}>


        <div className={styles.contactText}>
          <span className="heading">Please reach out, 
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
                rows="4"
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="contact-form__message">
                {showSuccessMessage && (
                  <p>Thanks for your message, i'll get back to you shortly</p>
                )}
                {showFailureMessage && (
                  <p>
                    Sorry there was an error, please{' '}
                    <a href="mailto:camsr13@gmail.com">email me</a> instead at
                    <a href="mailto:camsr13@gmail.com">camsr13@gmail.com</a>
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className={styles.contactFormSend}>
            {!showSuccessMessage && (
                <button className="projectLink" type="submit">
                  {buttonText}{' '}
                  <img
                    className="form-send-arrow"
                    src="./sendArrow.svg"
                    width="20"
                  />
                </button>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
