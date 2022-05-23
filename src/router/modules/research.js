/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const researchRouter = {
  path: '/research',
  component: Layout,
  redirect: '/research/paper/journal/list',
  name: '科研成果管理',
  meta: {
    title: '科研成果管理',
    icon: 'list'
  },
  children: [
    // {
    //   path: 'paper',
    //   component: () => import('@/views/research/paper/index'), // Parent router-view
    //   name: '论文管理',
    //   meta: { title: '论文管理', icon: 'documentation'},
    //   redirect: '/research/paper/list',
    //   children: [
    //     {
    //       path: 'list',
    //       component: () => import('@/views/research/paper/action/list'),
    //       name: '论文列表',
    //       hidden: true,
    //       meta: { title: '论文列表' }
    //     },
    //     {
    //       path: 'create',
    //       component: () => import('@/views/research/paper/action/create'),
    //       name: '论文录入',
    //       hidden: true,
    //       meta: { title: '论文录入' }
    //     },
    //     {
    //       path: 'edit/:id',
    //       component: () => import('@/views/research/paper/action/create'),
    //       name: '编辑专利',
    //       hidden: true,
    //       meta: { title: '编辑专利' }
    //     },
    //     // {
    //     //   path: 'conferencePaperList',
    //     //   component: () => import('@/views/research/paper/action/card'),
    //     //   name: '会议论文列表',
    //     //   hidden: true,
    //     //   meta: { title: '会议论文列表' }
    //     // },
    //   ]
    // },
    
    {
      path: 'paper',
      component: () => import('@/views/research/paper/journal/index'), // Parent router-view
      name: '论文管理',
      meta: { title: '论文管理', icon: 'documentation'},
      redirect: '/research/paper/journal/list',
      children: [
        {
          path: 'journal',
          component: () => import('@/views/research/paper/journal/index'),
          name: '期刊论文管理',
          redirect: '/research/paper/journal/list',
          // hidden: true,
          meta: { title: '期刊论文管理', icon: 'el-icon-s-management' },
          children: [
            {
              path: 'list',
              component: () => import('@/views/research/paper/journal/action/journalPaperList'),
              name: '列表',
              hidden: true,
              meta: {title: '列表'}
            },
            {
              path: 'Create',
              component: () => import('@/views/research/paper/journal/action/journalPaperCreate'),
              name: '录入',
              hidden: true,
              meta: { title: '录入' }
            },
            {
              path: 'edit/:id',
              component: () => import('@/views/research/paper/journal/action/journalPaperCreate'),
              name: '编辑',
              hidden: true,
              meta: { title: '编辑' }
            },
          ]
        },
        
        {
          path: 'conference',
          component: () => import('@/views/research/paper/conference/index'),
          name: '会议论文管理',
          redirect: '/research/paper/conference/List',
          meta: { title: '会议论文管理', icon: 'el-icon-s-custom' },
          children: [
            {
              path: 'list',
              component: () => import('@/views/research/paper/conference/action/conferencePaperList'),
              name: '列表',
              hidden: true,
              meta: {title: '列表'}
            },
            {
              path: 'Create',
              component: () => import('@/views/research/paper/conference/action/conferencePaperCreate'),
              name: '录入',
              hidden: true,
              meta: { title: '录入' }
            },
            {
              path: 'edit/:id',
              component: () => import('@/views/research/paper/conference/action/conferencePaperCreate'),
              name: '编辑',
              hidden: true,
              meta: { title: '编辑' }
            },
          ]
        },
      ]
    },
    {
      path: 'patent',
      component: () => import('@/views/research/patent/index'), // Parent router-view
      name: '专利管理',
      meta: { title: '专利管理', icon: 'skill' },
      redirect: '/research/patent/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/research/patent/action/list'),
          name: '专利列表',
          hidden: true,
          meta: { title: '专利列表' }
        },
        {
          path: 'create',
          component: () => import('@/views/research/patent/action/create'),
          name: '专利录入',
          hidden: true,
          meta: { title: '专利录入' }
        },
        
        
      ]
    },
    {
      path: 'work',
      component: () => import('@/views/research/work/index'), // Parent router-view
      name: '著作管理',
      meta: { title: '著作管理', icon: 'education' },
      redirect: '/research/work/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/research/work/index'),
          name: '著作列表',
          hidden: true,
          meta: { title: '著作列表' }
        },
        {
          path: 'create',
          component: () => import('@/views/research/work/create'),
          name: '著作录入',
          hidden: true,
          meta: { title: '著作录入' }
        },
        
      ]
    },
    {
      path: 'project',
      component: () => import('@/views/research/project/index'), // Parent router-view
      name: '项目管理',
      meta: { title: '项目管理', icon: 'clipboard' },
      redirect: '/research/project/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/research/project/index'),
          name: '项目列表',
          hidden: true,
          meta: { title: '项目列表' }
        },
        {
          path: 'create',
          component: () => import('@/views/research/project/create'),
          name: '项目录入',
          hidden: true,
          meta: { title: '项目录入' }
        },
        
      ]
    },
  ]
}

export default researchRouter
