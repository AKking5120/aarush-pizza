import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { RequireAdmin } from './RequireAdmin'
import { DashboardPage } from './pages/DashboardPage'
import { EnquiriesPage } from './pages/EnquiriesPage'
import { GalleryAdminPage } from './pages/GalleryAdminPage'
import { LoginPage } from './pages/LoginPage'
import { ServicesAdminPage } from './pages/ServicesAdminPage'
import { SettingsPage } from './pages/SettingsPage'
import { SparePartsAdminPage } from './pages/SparePartsAdminPage'

export function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="services" element={<ServicesAdminPage />} />
        <Route path="spare-parts" element={<SparePartsAdminPage />} />
        <Route path="gallery" element={<GalleryAdminPage />} />
        <Route path="enquiries" element={<EnquiriesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  )
}
