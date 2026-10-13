import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const email = 'Rahulinfo5479@gmail.com'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      service_category: String(data.get('service') ?? ''),
      budget: String(data.get('budget') ?? ''),
      timeline: String(data.get('timeline') ?? ''),
      message: String(data.get('message') ?? '').trim()
    }

    try {
      // Backend API URL (Vite environment variable se aayega)
      const apiUrl = import.meta.env.VITE_API_BASE_URL 
        ? `${import.meta.env.VITE_API_BASE_URL}/enquiries/submit/` 
        : 'http://127.0.0.1:8000/api/enquiries/submit/'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset() // Form clear kar do
      } else {
        const errorData = await response.json().catch(() => null)
        setSubmitStatus('error')
        setErrorMessage(errorData?.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <span className="section-index">04 /</span> CONTACT
          </div>
          <h1 className="page-title">
            Let's talk about
            <br />
            <span className="text-accent">your next idea.</span>
          </h1>
          <p className="page-description">
            Share the details of your project or smartphone issue, and send 
            an enquiry directly to our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Start a conversation.</h2>
            <p>
              Give us a clear overview of what you need. The scope, pricing,
              availability and next steps can then be discussed.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL ADDRESS</span>
              <a className="contact-email-link" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <h3 className="contact-subheading">Before sending</h3>
            <p>
              For software projects, describe the main features. For video
              work, mention the format and approximate duration. For repairs,
              include the phone model and issue.
            </p>
          </div>

          <div className="contact-form-panel">
            <div className="eyebrow">PROJECT ENQUIRY</div>
            <h2>What do you need?</h2>
            
            {submitStatus === 'success' ? (
              <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #10b981' }}>
                <h3>✅ Enquiry Sent Successfully!</h3>
                <p style={{ margin: '0.5rem 0 0 0' }}>Thank you for reaching out. We will review your project details and get back to you shortly.</p>
                <button onClick={() => setSubmitStatus('idle')} className="button button-dark" style={{ marginTop: '1rem' }}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <p className="contact-form-intro">
                  Fields marked with * are required.
                </p>

                {submitStatus === 'error' && (
                  <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #ef4444' }}>
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}

                <form className="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="enquiry-name">Your name *</label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      minLength={2}
                      maxLength={100}
                      placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="enquiry-email">Email address *</label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      placeholder="you@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="enquiry-service">Service required *</label>
                    <select id="enquiry-service" name="service" required defaultValue="" disabled={isSubmitting}>
                      <option value="" disabled>Select a service</option>
                      <option value="Web and software development">Web & Software Development</option>
                      <option value="Video editing and production">Video Editing & Production</option>
                      <option value="Smartphone repair and support">Smartphone Repair & Support</option>
                      <option value="Other enquiry">Something else</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="enquiry-budget">Approximate budget</label>
                      <select id="enquiry-budget" name="budget" defaultValue="" disabled={isSubmitting}>
                        <option value="">Not decided</option>
                        <option value="Under ₹5,000">Under ₹5,000</option>
                        <option value="₹5,000–₹15,000">₹5,000–₹15,000</option>
                        <option value="₹15,000–₹50,000">₹15,000–₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="enquiry-timeline">Target timeline</label>
                      <select id="enquiry-timeline" name="timeline" defaultValue="" disabled={isSubmitting}>
                        <option value="">Not decided</option>
                        <option value="As soon as practical">As soon as practical</option>
                        <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="enquiry-message">Project or issue details *</label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      placeholder="Tell us what you need..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button className="button button-dark enquiry-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry ↗'}
                  </button>
                </form>

                <p className="form-note">
                  This form directly sends your request to our secure database. 
                  See our <Link to="/privacy">Privacy Policy</Link> and{' '}
                  <Link to="/terms">Terms & Conditions</Link>.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
