import { Mail, Phone, MapPin, Settings, Bell, Shield, HelpCircle, LogOut } from "lucide-react";

export const ProfilePage = () => {
    return(
        <div className="p-8 space-y-8 bg-gray-100 min-h-screen pb-28">
        
              <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">
        
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-xl">
                    JD
                  </div>
        
                  <div>
                    <h2 className="text-lg font-semibold">João da Silva</h2>
                    <p className="text-gray-500 text-sm">Cliente Premium</p>
                  </div>
                </div>
        
                <div className="space-y-3 text-sm text-gray-600">
        
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span>joao.silva@email.com</span>
                  </div>
        
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span>(11) 98765-4321</span>
                  </div>
        
                  <div className="flex items-center gap-3">
                    <MapPin size={16} />
                    <span>São Paulo, SP</span>
                  </div>
        
                </div>
        
                <button className="w-full py-3 rounded-2xl bg-gray-100 text-indigo-600 font-medium hover:bg-gray-200 transition cursor-pointer">
                  Editar Perfil
                </button>
        
              </div>
        
              <div className="grid grid-cols-3 gap-4">
        
                <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                  <p className="text-lg font-semibold">3</p>
                  <p className="text-gray-500 text-sm">Contas</p>
                </div>
        
                <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                  <p className="text-lg font-semibold">2</p>
                  <p className="text-gray-500 text-sm">Cartões</p>
                </div>
        
                <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
                  <p className="text-lg font-semibold">8</p>
                  <p className="text-gray-500 text-sm">Metas</p>
                </div>
        
              </div>
        
              <div className="space-y-4">

  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white">
        <Settings size={20} />
      </div>

      <div>
        <p className="font-medium">Configurações</p>
        <p className="text-sm text-gray-500">
          Preferências do aplicativo
        </p>
      </div>
    </div>

    <span className="text-gray-400 text-xl">{">"}</span>
  </div>

  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white">
        <Bell size={20} />
      </div>

      <div>
        <p className="font-medium">Notificações</p>
        <p className="text-sm text-gray-500">
          Gerencie suas notificações
        </p>
      </div>
    </div>

    <span className="text-gray-400 text-xl">{">"}</span>
  </div>

  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white">
        <Shield size={20} />
      </div>

      <div>
        <p className="font-medium">Segurança</p>
        <p className="text-sm text-gray-500">
          Senha e autenticação
        </p>
      </div>
    </div>

    <span className="text-gray-400 text-xl">{">"}</span>
  </div>

  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
        <HelpCircle size={20} />
      </div>

      <div>
        <p className="font-medium">Ajuda e Suporte</p>
        <p className="text-sm text-gray-500">
          Central de ajuda
        </p>
      </div>
    </div>

    <span className="text-gray-400 text-xl">{">"}</span>
  </div>

</div>

<div className="mt-6">
  <button className="w-full py-4 rounded-2xl bg-red-50 text-red-600 font-medium flex items-center justify-center gap-2 hover:bg-red-100 transition cursor-pointer">
    <LogOut size={20} />
    Sair da Conta
  </button>
</div>
        
            </div>
    )
}
