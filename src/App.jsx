import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import MainLayout from './components/layout/MainLayout.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import DepartmentsPage from './pages/DepartmentsPage.jsx'
import ClassesPage from './pages/ClassesPage.jsx'
import SemestersPage from './pages/SemestersPage.jsx'
import SubjectsPage from './pages/SubjectsPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import TeachersPage from './pages/TeachersPage.jsx'
import StudentsPage from './pages/StudentsPage.jsx'
import CourseClassesPage from './pages/CourseClassesPage.jsx'
import EnrollmentsPage from './pages/EnrollmentsPage.jsx'
import GradesPage from './pages/GradesPage.jsx'
import AttendancesPage from './pages/AttendancesPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import MessagesPage from './pages/MessagesPage.jsx'

function App() {
  let { token } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/dashboard" />} />
      <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/dashboard" />} />
      <Route path="/forgot-password" element={!token ? <ForgotPasswordPage /> : <Navigate to="/dashboard" />} />
      <Route path="/reset-password/:token" element={!token ? <ResetPasswordPage /> : <Navigate to="/dashboard" />} />
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
    </Routes>
  )
}

export default App
