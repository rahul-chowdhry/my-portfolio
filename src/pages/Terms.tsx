import { Link } from 'react-router-dom'

function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">LEGAL / TERMS</div>
          <h1 className="page-title">
            Clear expectations.
            <br />
            <span className="text-accent">Better collaboration.</span>
          </h1>
          <p className="page-description">
            These draft terms describe the intended use of the RS World
            website and the initial expectations for service enquiries.
          </p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-document">
          <p className="legal-notice">
            <strong>Draft terms:</strong> These are preliminary website terms,
            not a substitute for reviewing the final terms of the actual
            business. Review them before publicly launching the website.
          </p>

          <p className="legal-effective">
            Last reviewed: October 13, 2026
          </p>

          <section className="legal-block">
            <h2>1. Website use</h2>
            <p>
              You may use this website to learn about RS World services,
              review published information and initiate a service enquiry.
              Do not misuse the website, attempt unauthorized access or
              interfere with its normal operation.
            </p>
          </section>

          <section className="legal-block">
            <h2>2. Service descriptions</h2>
            <p>
              The website describes web and software development, video
              editing and production, and smartphone technical-support
              enquiries. The availability and suitability of a particular
              service must be confirmed directly.
            </p>
          </section>

          <section className="legal-block">
            <h2>3. Pricing and quotations</h2>
            <p>
              Prices shown on the website are indicative draft estimates, not
              guaranteed quotations. The final scope, price, deliverables,
              payment schedule and expected timeline must be agreed for each
              project before work begins.
            </p>
            <p>
              Repair estimates may depend on the device, fault and parts
              availability. A repair assessment may be needed before a price
              can be confirmed.
            </p>
          </section>

          <section className="legal-block">
            <h2>4. Enquiries are not confirmed orders</h2>
            <p>
              Sending an enquiry does not, by itself, establish an accepted
              project, service booking, repair appointment or payment
              obligation. Acceptance and any applicable terms must be
              communicated separately.
            </p>
          </section>

          <section className="legal-block">
            <h2>5. Project scope and responsibilities</h2>
            <p>
              Before a project starts, both parties should agree on the
              requirements, deliverables, responsibilities, revisions,
              milestones, payment conditions and handover arrangements that
              apply to that specific engagement.
            </p>
          </section>

          <section className="legal-block">
            <h2>6. Intellectual property</h2>
            <p>
              Website content, branding and other materials may be protected
              by applicable intellectual-property laws. Project-specific
              ownership and usage rights should be stated in the agreement
              between the parties. Do not assume that viewing website content
              transfers ownership of it.
            </p>
          </section>

          <section className="legal-block">
            <h2>7. Third-party services</h2>
            <p>
              Links or integrations may lead to services operated by third
              parties. Their availability and terms are controlled by those
              providers.
            </p>
          </section>

          <section className="legal-block">
            <h2>8. Website information</h2>
            <p>
              Website information is provided for general information and may
              be revised. Specific project commitments should be recorded in
              the agreed quotation or service agreement.
            </p>
          </section>

          <section className="legal-block">
            <h2>9. Updates and applicable law</h2>
            <p>
              These draft terms may be revised. The final version should
              identify the appropriate governing law, jurisdiction and
              additional provisions relevant to the actual business and
              services.
            </p>
          </section>

          <section className="legal-block">
            <h2>10. Contact</h2>
            <p>Questions about these terms can be sent to:</p>
            <a
              className="legal-email"
              href="mailto:Rahulinfo5479@gmail.com?subject=Terms%20Enquiry%20-%20RS%20World"
            >
              Rahulinfo5479@gmail.com
            </a>
          </section>

          <div className="legal-related-links">
            <Link to="/privacy">Read Privacy Policy →</Link>
            <Link to="/contact">Contact RS World →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Terms