import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, PiggyBank, X } from "lucide-react";

interface QuickActionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAction: (action: string) => void;
}

export const QuickActionsModal = ({ isOpen, onClose, onAction }: QuickActionsModalProps) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-t-3xl p-6 animate-slide-up transition-colors">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Ações Rápidas</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => onAction('transfer')}
                        className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-700 rounded-2xl hover:scale-105 transition-transform"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                            <ArrowLeftRight className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Transferir</span>
                    </button>

                    <button
                        onClick={() => onAction('pay')}
                        className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-gray-700 rounded-2xl hover:scale-105 transition-transform"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center">
                            <ArrowUpRight className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Pagar</span>
                    </button>

                    <button
                        onClick={() => onAction('receive')}
                        className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-700 rounded-2xl hover:scale-105 transition-transform"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                            <ArrowDownLeft className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Receber</span>
                    </button>

                    <button
                        onClick={() => onAction('invest')}
                        className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-700 dark:to-gray-700 rounded-2xl hover:scale-105 transition-transform"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                            <PiggyBank className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Investir</span>
                    </button>
                </div>
            </div>
        </div>
    )
}