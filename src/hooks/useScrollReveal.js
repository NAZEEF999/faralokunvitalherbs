import { useEffect } from 'react'

const SELECTOR = '.c4>*,.c3>*,.pcards>*,.ob,.nat>*,.two>*,.story>*,.dl>div,section h2,section .eb,section .l,.cta .w>*,.faq .card'

/** Fades/slides elements in as they scroll into view (reduced motion handled in CSS). */
export default function useScrollReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll(SELECTOR)].filter((e) => !e.closest('.hero'))
    els.forEach((e) => {
      e.classList.add('rv')
      const i = [...e.parentElement.children].indexOf(e)
      e.style.setProperty('--d', Math.min(i, 4) * 0.12 + 's')
    })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((e) => { if (!e.classList.contains('in')) io.observe(e) })
    return () => io.disconnect()
  }, [])
}
