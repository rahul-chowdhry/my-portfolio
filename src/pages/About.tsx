import { Link } from 'react-router-dom'

const principles = [
  {
    number: '01',
    title: 'Understand the requirement',
    description:
      'Start by understanding the actual problem, audience and expected outcome.',
  },
  {
    number: '02',
    title: 'Choose a practical solution',
    description:
      'Use the appropriate tools and a realistic scope for the job.',
  },
  {
    number: '03',
    title: 'Focus on useful details',
    description:
      'Keep usability, clarity, communication and quality in focus.',
  },
  {
    number: '04',
    title: 'Review and improve',
    description:
      'Use feedback to refine the work and agree on the next steps.',
  },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <span className="section-index">03 /</span> ABOUT RS WORLD
          </div>
          <h1 className="page-title">
            A practical mindset.
            <br />
            <span className="text-accent">A creative edge.</span>
          </h1>
          <p className="page-description">
            RS World brings technology, software and creative work together
            under one studio brand.
          </p>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-stamp" aria-label="RS World Tech Studio">
            <div className="stamp-ring">
              <span>RS WORLD</span>
              <strong>RS</strong>
              <span>TECH · CODE · CREATE</span>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow">THE STUDIO</div>
            <h2>
              Technology with
              <br />
              <span className="muted-heading">a human purpose.</span>
            </h2>
            <p>
              Founded by Rahul Kumar, RS World is an independent technology
              and creative studio. Its focus is on developing digital
              experiences, producing video content and handling smartphone
              technical-support enquiries.
            </p>
            <p>
              The goal is to understand each requirement, communicate clearly
              and work toward a practical solution without unnecessary
              complexity.
            </p>
            <Link className="button button-dark" to="/services">
              Explore our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">HOW WE APPROACH WORK</div>
              <h2>
                Clear thinking.
                <br />
                <span className="muted-heading">Thoughtful execution.</span>
              </h2>
            </div>
            <p className="section-side-copy">
              Every enquiry is different. The process starts with a shared
              understanding of the work and its requirements.
            </p>
          </div>

          <div className="approach-list">
            {principles.map((principle) => (
              <article className="approach-item" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
                <span className="approach-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-inner">
          <div className="eyebrow contact-eyebrow">LET'S CONNECT</div>
          <h2>
            Have an idea?
            <br />
            <span>Start here.</span>
          </h2>
          <p>Tell us what you need help with and start a conversation.</p>
          <Link className="button button-light" to="/contact">
            Contact RS World <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="contact-decoration" aria-hidden="true">RS</div>
      </section>
    </>
  )
}

export default About