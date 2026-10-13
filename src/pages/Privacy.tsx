import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">LEGAL / PRIVACY</div>
          <h1 className="page-title">
            Your information.
            <br />
            <span className="text-accent">Handled thoughtfully.</span>
          </h1>
          <p className="page-description">
            This draft explains how the current RS World website handles
            information and how to contact the studio with privacy questions.
          </p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-document">
          <p className="legal-notice">
            <strong>Draft policy:</strong> Review and update this page before
            publishing the production website, especially after adding the
            backend, analytics, accounts or online booking.
          </p>

          <p className="legal-effective">
            Last reviewed: October 13, 2026
          </p>

          <section className="legal-block">
            <h2>1. About this website</h2>
            <p>
              RS World — Tech Studio is a technology and creative services
              website associated with Rahul Kumar. This website describes
              website and software development, video editing and production,
              and smartphone technical support services.
            </p>
          </section>

          <section className="legal-block">
            <h2>2. Information you provide</h2>
            <p>
              The current contact form prepares an email in your default email
              application. You may choose whether to send that email. The form
              does not itself submit enquiry details to an RS World server or
              store them in a website database.
            </p>
            <p>
              If you send an email, its contents and your email address will
              be handled through your email provider and the recipient's email
              service.
            </p>
          </section>

          <section className="legal-block">
            <h2>3. Website technologies</h2>
            <p>
              The website uses frontend technologies to display pages and
              support navigation. Its stylesheet currently loads fonts from
              Google Fonts, which may cause your browser to connect to that
              provider when those fonts are requested.
            </p>
            <p>
              Hosting providers may process technical request information
              according to their own systems and policies. Hosting and
              infrastructure practices must be reviewed before launch.
            </p>
          </section>

          <section className="legal-block">
            <h2>4. How information may be used</h2>
            <p>
              Information you voluntarily send by email may be used to respond
              to your enquiry, discuss project requirements and communicate
              about a requested service.
            </p>
          </section>

          <section className="legal-block">
            <h2>5. Sharing and retention</h2>
            <p>
              Do not send passwords, payment card details or other sensitive
              information through a general project enquiry. Information sent
              by email is subject to the email services used and applicable
              retention practices.
            </p>
            <p>
              This draft does not establish a fixed retention period or
              describe a database system. Those details must be added if the
              website begins collecting or storing enquiries online.
            </p>
          </section>

          <section className="legal-block">
            <h2>6. External services</h2>
            <p>
              Opening your email application transfers control to your chosen
              email software or provider. Its privacy practices are governed
              by that provider's terms and policies.
            </p>
          </section>

          <section className="legal-block">
            <h2>7. Policy updates</h2>
            <p>
              This page must be updated if the website introduces server-side
              forms, user accounts, analytics, cookies, payment processing or
              other data-collection features.
            </p>
          </section>

          <section className="legal-block">
            <h2>8. Privacy questions</h2>
            <p>
              For privacy-related questions, contact:
            </p>
            <a
              className="legal-email"
              href="mailto:Rahulinfo5479@gmail.com?subject=Privacy%20Enquiry%20-%20RS%20World"
            >
              Rahulinfo5479@gmail.com
            </a>
          </section>

          <div className="legal-related-links">
            <Link to="/terms">Read Terms & Conditions →</Link>
            <Link to="/contact">Contact RS World →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy