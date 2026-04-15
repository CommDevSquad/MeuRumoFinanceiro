import { Moon, Bell, User, TrendingUp, CreditCard, Target, Sun } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../hooks";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`w-full bg-gray-50 dark:bg-gray-900 relative transition-colors ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center justify-between px-9 py-6">

        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">Meu </span>
          <span className="text-blue-400">Rumo</span>
        </h1>

        <div className="flex items-center gap-8">

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>

          <div className="relative" ref={dropdownRef}>
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Bell className="w-7 h-7 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></span>
            </div>

            {open && (
              <div className="absolute right-0 mt-4 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">

                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Notificações
                  </h2>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500">
                    <TrendingUp className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100">Receita recebida</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Você recebeu R$ 2.500,00
                    </p>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      2h atrás
                    </span>
                  </div>

                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500">
                    <CreditCard className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100">Fatura do cartão</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Vencimento em 5 dias
                    </p>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      1d atrás
                    </span>
                  </div>

                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                </div>

                <div className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500">
                    <Target className="text-white" size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Meta atingida 🎉
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Você alcançou sua meta de economia
                    </p>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      2d atrás
                    </span>
                  </div>
                </div>

                <div className="text-center py-4">
                  <button className="text-indigo-600 text-sm font-medium hover:underline">
                    Ver todas as notificações
                  </button>
                </div>

              </div>
            )}
          </div>

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-br from-blue-300 to-blue-500 text-white cursor-pointer">
            <User size={28} />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;