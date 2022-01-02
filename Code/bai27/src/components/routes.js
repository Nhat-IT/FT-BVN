import Inbox from './Inbox.vue'
import Spam from './Spam.vue'
import Draft from './Draft.vue'
import Read from './Read.vue'

const routes = [
  {
    path: '/inbox',
    alias:[
      '/ib'
    ],
    component: Inbox,
    name: 'inbox',
    children: [
      {
        path: '/inbox/:id',
        component: Read,
        name: 'read',
        props: true,
      }
    ]
  },
  {
    path: '/hop-thu-den/:id',
    component: Read,
    name: 'read',
    props: true,
  },
  {
    path: '/spam',
    component: Spam,
    name: 'spam'
  },
  {
    path: '/draft',
    component: Draft,
    name: 'draft'
  },
]

export default routes;