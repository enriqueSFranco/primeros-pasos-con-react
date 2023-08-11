import DetailsBook from '@/views/DetailsBook'
import InterviewTwo from '@/views/InterviewTwo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <InterviewTwo />
  },
  {
    path: ':title',
    element: <DetailsBook />
  }
])

function ReadingLinst () {
  return (
    <RouterProvider router={router} />
  )
}

export default ReadingLinst