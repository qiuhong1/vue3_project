import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding, vnode, prevVnode) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            console.log(isIntersecting, '出现在可视区')
            el.src = binding.value
            //stop为useIntersectionObserver自带方法
            stop() //存在内存浪费的问题 第一次渲染出来后就停止监听
          }
        })
      },
    })
  },
}
