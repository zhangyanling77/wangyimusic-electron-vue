import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wrapper',
      redirect: { name: 'music'},
      component: require('@/views/wrapper').default,
      children: [
        {
          path: 'music',
          name: 'music',
          component: () => import('@/views/music')
        },
        {
          path: 'fm',
          name: 'fm',
          component: () => import('@/views/fm')
        },
        {
          path: 'playlist',
          name: 'playlist',
          component: () => import('@/views/playlist')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
