import Vue from 'vue'
import Router from 'vue-router'
import ContentVue from '@/components/ContentVue'
import index from '@/components/index'
import rightOne from '@/components/rightOne'
import no1 from '@/components/no1'
import no2 from '@/components/no2'
import no3 from '@/components/no3'
import no4 from '@/components/no4'
import no5 from '@/components/no5'
import no11 from '@/components/no1/no11'
import no12 from '@/components/no1/no12'

Vue.use(Router)	

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentVue',
      redirect: '/index', //可以直接将页面切换到某个路由
      component: ContentVue,
      children: [
        {
          path: '/index', //通过children的方式将子路由嵌套进页面
          name: 'index', 
          component: index
        },
        {
          path: '/no1',
          name: 'no1',
          redirect: '/no1/no11',
          component: no1,
          children: [
            {
              path: '/no1/no11',
              name: 'no11',
              component: no11
            },
            {
              path: '/no1/no12',
              name: 'no12',
              component: no12
            }
          ]
        },
        {
          path: '/no2',
          name: 'no2',
          component: no2
        },
        {
          path: '/no3',
          name: 'no3',
          component: no3
        },
        {
          path: '/no4',
          name: 'no4',
          component: no4
        },
        {
          path: '/no5',
          name: 'no5',
          component: no5
        }
      ] 
    },
    {
      path: '/rightOne',
      name: 'rightOne',
      component: rightOne
    }
  ]
})
