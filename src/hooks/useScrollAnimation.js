import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const selector = '.fade-in-up, .fade-in'
    const observed = new WeakSet()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observeIfNeeded = (el) => {
      if (!(el instanceof Element) || observed.has(el)) return
      observed.add(el)
      observer.observe(el)
    }

    document.querySelectorAll(selector).forEach(observeIfNeeded)

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return

          if (node.matches(selector)) {
            observeIfNeeded(node)
          }

          node.querySelectorAll(selector).forEach(observeIfNeeded)
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [])
}

export function useScrollAnimationRef() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
