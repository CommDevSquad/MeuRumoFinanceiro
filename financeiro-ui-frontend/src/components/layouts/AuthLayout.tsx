import { Moon, Sun } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router';

export function AuthLayout() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // Se estiver autenticado, redireciona para o dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 transition-colors">

                <div className="fixed top-6 right-6 z-10">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors shadow-lg"
                    >
                        {darkMode ? (
                            <Sun className="w-6 h-6 text-yellow-400" />
                        ) : (
                            <Moon className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                <Outlet context={{ darkMode }} />
            </div>
        </div>
    );
}
