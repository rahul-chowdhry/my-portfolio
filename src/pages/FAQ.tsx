import { Link } from 'react-router-dom'

const faqGroups = [
  {
    title: 'Projects & services',
    items: [
      {
        question: 'What services does RS World offer?',
        answer:
          'The studio focuses on websites and software development, video editing and production enquiries, and smartphone repair or technical-support enquiries.',
      },
      {
        question: 'How does a new project begin?',
        answer:
          'Start by sharing your requirements. The scope, deliverables, quote and expected timing should be discussed and agreed before work begins.',
      },
      {
        question: 'Can I request a custom solution?',
        answer:
          'Yes. Custom requirements can be discussed first. Feasibility, scope and cost will depend on the features, integrations and constraints involved.',
      },
    ],
  },
  {
    title: 'Pricing & delivery',
    items: [
      {
        question: 'Are the listed prices final?',
        answer:
          'No. The page currently contains editable draft estimates. Confirmed prices must be agreed in a project-specific quotation before an order is accepted.',
      },
      {
        question: 'How long will my project take?',
        answer:
          'Timing depends on the requirements, project complexity, assets and feedback. The expected schedule should be confirmed after the scope is reviewed.',
      },
      {
        question: 'Is smartphone repair pricing fixed?',
        answer:
          'No fixed repair prices are published here. Device model, fault and parts availability can affect the estimate, so these details need to be discussed first.',
      },
    ],
  },
  {
    title: 'Contact & support',
    items: [
      {
        question: 'How do I contact RS World?',
        answer:
          'Use the contact page to find the current email contact method. Include a clear description of your project or device issue.',
      },
      {
        question: 'Can I submit and track a request on this website?',
        answer:
          'Online request tracking is not connected yet. A future backend can add request submission, status tracking and dashboard features once those systems are implemented and tested.',
      },
    ],
  },
]

function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <span className="section-index">07 /</span> FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="page-title">
            A few useful
            <br />
            <span className="text-accent">answers, upfront.</span>
          </h1>
          <p className="page-description">
            Find out how projects, draft pricing and enquiries are expected
            to work.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <aside className="faq-aside">
            <div className="eyebrow">NEED MORE DETAILS?</div>
            <h2>
              Can't find
              <br />
              your answer?
            </h2>
            <p>
              Share your requirements and ask about the service you need.
            </p>
            <Link className="button button-dark" to="/contact">
              Contact RS World <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <div className="faq-groups">
            {faqGroups.map((group) => (
              <section className="faq-group" key={group.title}>
                <h2>{group.title}</h2>

                {group.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <span className="faq-toggle" aria-hidden="true">+</span>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ