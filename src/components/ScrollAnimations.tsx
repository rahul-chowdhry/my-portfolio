import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const revealSelectors = [
  '.hero-copy',
  '.hero-visual',
  '.intro-strip-inner',
  '.section-heading',
  '.service-card',
  '.approach-heading',
  '.approach-item',
  '.about-stamp',
  '.about-copy',
  '.contact-inner',
  '.page-hero-inner',
  '.service-detail-card',
  '.portfolio-capability-card',
  '.pricing-notice',
  '.pricing-card',
  '.repair-pricing-panel',
  '.process-intro',
  '.process-step',
  '.faq-aside',
  '.faq-group',
  '.contact-panel',
  '.contact-form-panel',
  '.contact-services',
  '.legal-document',
].join(', ')

function ScrollAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      return
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    )

    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty(
        '--reveal-delay',
        `${(index % 3) * 85}ms`,
      )
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()

      elements.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [pathname])

  return null
}

export default ScrollAnimations