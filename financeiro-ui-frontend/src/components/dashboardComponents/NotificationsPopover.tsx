interface NotificationsPopoverProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NotificationsPopover = ({ isOpen, onToggle }: NotificationsPopoverProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-gray-700 transition-colors">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Notificações</h3>
          <button
            className="text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
            onClick={onToggle}
          >
            Fechar
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Nenhuma notificação por enquanto.</p>
      </div>
    </div>
  );
};