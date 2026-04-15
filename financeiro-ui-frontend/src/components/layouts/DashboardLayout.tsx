import { Outlet, Navigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../hooks';

export function DashboardLayout() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const { theme } = useTheme();
    const darkMode = theme === 'dark';

    // Se não estiver autenticado, redireciona para o login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
                <Navbar />

                <main className="pb-[80px] min-h-screen overflow-auto">
                    <Outlet context={{ darkMode }} />
                </main>

                <Footer />
            </div>
        </div>
    );
}
