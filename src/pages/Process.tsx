import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'Share your idea, the problem you want to solve and any important requirements.',
    output: 'Initial project brief',
  },
  {
    number: '02',
    title: 'Review the requirements',
    description:
      'We identify the scope, constraints, dependencies and information still needed.',
    output: 'Agreed requirements',
  },
  {
    number: '03',
    title: 'Confirm scope and quote',
    description:
      'Deliverables, cost, milestones and expected timing are discussed before work begins.',
    output: 'Written project agreement',
  },
  {
    number: '04',
    title: 'Create and review',
    description:
      'The work progresses against the agreed scope, with review and feedback at suitable stages.',
    output: 'Reviewable work',
  },
  {
    number: '05',
    title: 'Finalize and hand over',
    description:
      'The agreed deliverables are reviewed and handover arrangements are confirmed.',
    output: 'Agreed deliverables',
  },
]

function Process() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <span className="section-index">06 /</span> OUR PROCESS
          </div>
          <h1 className="page-title">
            A clear plan.
            <br />
            <span className="text-accent">Thoughtful execution.</span>
          </h1>
          <p className="page-description">
            A straightforward process keeps requirements, expectations and
            next steps clear for both sides.
          </p>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <div className="eyebrow">FROM IDEA TO HANDOVER</div>
            <h2>
              Good work starts
              <br />
              with <span className="muted-heading">good alignment.</span>
            </h2>
            <p>
              Each service has its own requirements. The exact deliverables,
              review stages and schedule are agreed for the particular project
              rather than assumed in advance.
            </p>
            <Link className="button button-dark" to="/contact">
              Discuss your project <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="process-timeline">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="process-step-marker">{step.number}</div>
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="process-output">
                    <span aria-hidden="true">↗</span> {step.output}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <p>
            HAVE A REQUIREMENT? <span>LET'S DISCUSS IT.</span>
          </p>
          <Link className="text-link" to="/pricing">
            Explore pricing <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Process