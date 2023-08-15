import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsBook from '@/views/DetailsBook'
import InterviewTwo from '@/views/InterviewTwo'
import ReadingList from '@/views/ReadingList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <InterviewTwo />
  },
  {
    path: ':title',
    element: <DetailsBook />
  },
  {
    path: '/reading-list',
    element: <ReadingList />
  }
])

function ReadingLinst () {
  return (
    <RouterProvider router={router} />
  )
}

export default ReadingLinst