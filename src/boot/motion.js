import { boot } from 'quasar/wrappers'
import { MotionPlugin } from '@vueuse/motion'

// Animation configurations
const defaultScrollOptions = {
  threshold: 0.2,
  once: true,
}

export default boot(({ app }) => {
  // Register the motion plugin
  app.use(MotionPlugin)

  // Register global directives
  app.directive('scroll-fade', {
    mounted(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease-out'

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      }, defaultScrollOptions)

      observer.observe(el)
    },
  })
})

export {}
