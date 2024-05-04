import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ResultsPage } from "./pages/ResultsPage"
import { NotFoundPage } from "./pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/results/:keyword',
    element: <ResultsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
