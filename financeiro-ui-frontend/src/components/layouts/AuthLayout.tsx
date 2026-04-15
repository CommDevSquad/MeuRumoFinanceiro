import { Moon, Sun } from 'lucide-react';
import { Outlet, Navigate } from 'react-router';
import { useTheme } from '../../hooks';

export function AuthLayout() {
    const { theme, toggleTheme } = useTheme();
    const darkMode = theme === 'dark';

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // Se estiver autenticado, redireciona para o dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">

                <div className="fixed top-6 right-6 z-10">
                    <button
                        onClick={toggleTheme}
                        className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors shadow-lg cursor-pointer"
                    >
                        {darkMode ? (
                            <Sun className="w-6 h-6 text-yellow-400" />
                        ) : (
                            <Moon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                        )}
                    </button>
                </div>

                <Outlet />
            </div>
        </div>
    );
}
