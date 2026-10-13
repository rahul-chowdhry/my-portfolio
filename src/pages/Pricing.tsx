import { Link } from 'react-router-dom'

const softwarePackages = [
  { name: 'Quick Launch Website', price: '₹7,999+', detail: 'A focused landing page for a clear business offer.' },
  { name: 'Personal Portfolio', price: '₹9,999+', detail: 'A professional online presence for an individual.' },
  { name: 'Business Website', price: '₹14,999+', detail: 'A multi-section website for a small business.' },
  { name: 'Lead Generation Website', price: '₹19,999+', detail: 'Service pages and clear enquiry pathways.' },
  { name: 'Content Website', price: '₹24,999+', detail: 'A content-focused website with agreed editing needs.' },
  { name: 'Booking & Enquiry Website', price: '₹29,999+', detail: 'A structured workflow for collecting service requests.' },
  { name: 'E-commerce Starter', price: '₹39,999+', detail: 'A starter online-store project based on agreed scope.' },
  { name: 'Dashboard & Web Portal', price: '₹49,999+', detail: 'A custom interface with requirements defined in advance.' },
  { name: 'Custom / Enterprise Software', price: 'Custom quote', detail: 'Larger systems and integrations scoped individually.' },
]

const videoPackages = [
  { name: 'Single Short Edit', price: '₹799+', detail: 'One short video under 40 seconds.' },
  { name: 'Reel or Social Short', price: 'Custom quote', detail: 'Editing based on footage, duration and complexity.' },
  { name: 'Short Video Batch', price: 'Custom quote', detail: 'Multiple short edits planned as a batch.' },
  { name: 'YouTube Video Editing', price: 'Custom quote', detail: 'Long-form editing based on the footage and brief.' },
  { name: 'Business Promotional Video', price: 'Custom quote', detail: 'A promotional edit shaped around your message.' },
  { name: 'Event Highlights', price: 'Custom quote', detail: 'Event coverage or highlight editing based on requirements.' },
  { name: 'Shooting + Editing', price: 'Custom quote', detail: 'Production requirements, location and schedule agreed first.' },
]

function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <span className="section-index">05 /</span> PRICING
          </div>
          <h1 className="page-title">
            Clear starting points.
            <br />
            <span className="text-accent">Solutions built for you.</span>
          </h1>
          <p className="page-description">
            Explore initial pricing guidance for digital projects and video
            editing. The final estimate depends on your actual requirements.
          </p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-notice">
            <span aria-hidden="true">ⓘ</span>
            <p>
              <strong>Pricing status:</strong> These are editable draft
              estimates for website development, not a binding quotation.
              Confirm scope, deliverables and all prices before accepting an
              order. Custom projects can exceed ₹3 lakh.
            </p>
          </div>

          <div className="section-heading pricing-heading">
            <div>
              <div className="eyebrow">01 / DIGITAL PRODUCTS</div>
              <h2>
                Software & websites.
                <br />
                <span className="muted-heading">Start with the essentials.</span>
              </h2>
            </div>
            <p className="section-side-copy">
              Every project starts with an agreed scope, expected deliverables
              and a quote based on complexity.
            </p>
          </div>

          <div className="pricing-grid">
            {softwarePackages.map((item, index) => (
              <article
                className={`pricing-card ${index === 0 ? 'pricing-card-featured' : ''}`}
                key={item.name}
              >
                <div className="pricing-card-top">
                  <span className="pricing-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index === 0 && <span className="pricing-label">STARTING PACKAGE</span>}
                </div>

                <h3>{item.name}</h3>
                <p className="pricing-price">{item.price}</p>
                <p className="pricing-description">{item.detail}</p>

                <Link className="service-link" to="/contact">
                  Request a project quote <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="section-heading pricing-heading video-pricing-heading">
            <div>
              <div className="eyebrow">02 / VIDEO & CREATIVE</div>
              <h2>
                Make your message
                <br />
                <span className="muted-heading">worth watching.</span>
              </h2>
            </div>
            <p className="section-side-copy">
              Editing prices depend on duration, raw footage, effects,
              revisions and the final format.
            </p>
          </div>

          <div className="pricing-grid video-pricing-grid">
            {videoPackages.map((item, index) => (
              <article className="pricing-card" key={item.name}>
                <div className="pricing-card-top">
                  <span className="pricing-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="pricing-label">VIDEO SERVICE</span>
                </div>

                <h3>{item.name}</h3>
                <p className="pricing-price">{item.price}</p>
                <p className="pricing-description">{item.detail}</p>

                <Link className="service-link" to="/contact">
                  Discuss your video <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="repair-pricing-panel">
            <div>
              <div className="eyebrow">03 / SMARTPHONE TECH</div>
              <h2>Repair and support enquiries</h2>
              <p>
                Repair prices depend on device model, fault and parts
                availability. Share the device details to discuss assessment
                and the next step; no fixed repair price is shown here.
              </p>
            </div>
            <Link className="button button-dark" to="/contact">
              Ask about a repair <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing