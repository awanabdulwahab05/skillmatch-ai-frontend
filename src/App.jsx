import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router'
import Homepage from './pages/Homepage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
import AnalysisResult from './pages/AnalysisResult'
import MyReport from './pages/MyReport'
import SingleReport from './pages/SingleReport'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
        />
        <Route path="/analysis-result/:id" element={<AnalysisResult />} />
        <Route path="/my-reports" element={<MyReport />} />
        <Route path="/my-report/:id" element={<SingleReport />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
