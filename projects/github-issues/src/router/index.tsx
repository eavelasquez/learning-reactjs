import { createBrowserRouter, Navigate } from 'react-router-dom'

import { App } from '../App'
import { IssueDetailView, IssueListView, NotFoundView } from '../issues/views'

export const router = createBrowserRouter([
  {
    path: '/issues',
    element: <App />,
    children: [
      { path: 'list', element: <IssueListView /> },
      { path: 'issue/:id', element: <IssueDetailView /> },
      { path: '*', element: <Navigate to='list' /> }
    ],
  },
  { path: '/', element: <Navigate to='issues/list' /> },
  { path: '*', element: <NotFoundView /> }
])
