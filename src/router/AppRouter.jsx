import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../app/routes/AppRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        { /* Login y Registro */ }
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        { /* App */ }
        <Route path="/*" element={ <AppRoutes /> } />
    </Routes>
  )
}
