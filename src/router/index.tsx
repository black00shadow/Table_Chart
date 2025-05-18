import Main from '@/views/main'
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Discover from '@/views/main'

// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Discover />
      }
    ]
  }
]

export default routes
