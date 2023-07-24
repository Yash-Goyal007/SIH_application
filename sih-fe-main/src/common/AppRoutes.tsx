import React from 'react'
import { Route } from 'react-router-dom'
import AuthRoute from '../components/AuthRoute/AuthRoute'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
import Dashboard from '../pages/Dashboard/Dashboard'
import Landing from '../pages/Landing/Landing'
import LogIn from '../pages/LogIn/LogIn'
import PageConstruction from '../pages/PageConstruction/PageConstruction'
import Resources from '../pages/Resources/Resources'

//Always import using lazy loding
const AppRoutes = (
  <React.Fragment>
    <Route path="/*" element={<PageConstruction />} />
    <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<LogIn formState="signup" />} />
    <Route path="/login" element={<LogIn formState="login" />} />
    <Route
      path="/dashboard"
      element={
        <AuthRoute>
          <Dashboard />
        </AuthRoute>
      }
    />
    <Route
      path="/myschedule"
      element={
        <AuthRoute>
          <PageConstruction />
        </AuthRoute>
      }
    />
    <Route path="/resources" element={<Resources />} />
    <Route path="/help-centre" element={<PageConstruction />} />
    <Route path="/qna" element={<Blog />} />
    <Route path="/about" element={<About />} />
  </React.Fragment>
)

export default AppRoutes
