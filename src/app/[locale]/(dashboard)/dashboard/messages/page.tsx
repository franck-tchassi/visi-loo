"use client";

import React, { useState } from 'react';
import { Search, MoreHorizontal, Paperclip, Mic, Zap, Send, Smile, Filter, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  avatar: string;
  preview: string;
  time: string;
  platform: 'google' | 'facebook' | 'whatsapp';
  unread: boolean;
}

const MOCK_MESSAGES: Message[] = [
  { id: '1', sender: 'Eryne Levent', avatar: 'https://i.pravatar.cc/150?u=1', preview: 'Bonjour, j\'ai une question à...', time: '5 min', platform: 'google', unread: false },
  { id: '2', sender: 'Eric Durand', avatar: 'https://i.pravatar.cc/150?u=2', preview: 'Bonjour 👋', time: '5 min', platform: 'facebook', unread: true },
  { id: '3', sender: 'John Cartier', avatar: 'https://i.pravatar.cc/150?u=3', preview: 'Merci ! J\'apprécie vraiment...', time: '5 min', platform: 'google', unread: false },
  { id: '4', sender: 'Agathe Boutin', avatar: 'https://i.pravatar.cc/150?u=4', preview: 'A bientôt :)', time: '5 min', platform: 'whatsapp', unread: false },
  { id: '5', sender: 'Julia Pinçon', avatar: 'https://i.pravatar.cc/150?u=5', preview: 'Oui s\'il vous plaît ! :D', time: '5 min', platform: 'facebook', unread: false },
];

const Messages: React.FC = () => {
  const [selectedId, setSelectedId] = useState('2');

  return (
    <div className="h-[calc(100vh-140px)] flex bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      
      {/* Sidebar List */}
      <div className="w-80 flex flex-col border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer">
                <span>📥 Ouverts</span>
                <span className="text-xs">▼</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                <span className="text-sm">Toutes</span>
                <Filter size={14} />
            </div>
        </div>
        
        <div className="overflow-y-auto flex-1">
            {MOCK_MESSAGES.map(msg => (
                <div 
                    key={msg.id} 
                    onClick={() => setSelectedId(msg.id)}
                    className={`p-4 flex items-start cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${selectedId === msg.id ? 'bg-blue-50 border-blue-500' : 'border-transparent'}`}
                >
                    <div className="relative mr-3">
                        <img src={msg.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                            {msg.platform === 'google' && <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-blue-500 border border-gray-200">G</div>}
                            {msg.platform === 'facebook' && <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white">f</div>}
                            {msg.platform === 'whatsapp' && <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white">W</div>}
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className={`text-sm truncate ${msg.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{msg.sender}</h4>
                            <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">Établissement - Jean Moulin</p>
                        <p className={`text-sm truncate mt-1 ${msg.unread ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{msg.preview}</p>
                    </div>
                    {msg.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2"></div>}
                </div>
            ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#F8F9FA]">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-200 bg-white flex justify-between items-center px-6">
            <div className="flex items-center">
                <img src={MOCK_MESSAGES.find(m => m.id === selectedId)?.avatar} className="w-8 h-8 rounded-full mr-3" alt="" />
                <div>
                    <h3 className="text-sm font-bold text-gray-900">Eric Durand</h3>
                    <p className="text-xs text-gray-500">Établissement - Jean Moulin</p>
                </div>
            </div>
            <div className="flex space-x-3">
                <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 font-medium">Non assignée ▼</button>
                <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 font-medium flex items-center">
                    <CheckCircle2 size={14} className="mr-1.5"/> Fermer
                </button>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div className="flex justify-start">
                <div className="bg-[#E9ECEF] rounded-2xl rounded-tl-none py-3 px-4 max-w-md text-gray-800 text-sm leading-relaxed shadow-sm">
                    Bonjour ! Je voulais en savoir un peu plus sur vos services et connaître vos disponibilités. Est-ce que vous pourriez m'indiquer la meilleure façon de procéder pour en bénéficier ? Merci beaucoup et bonne journée !
                </div>
            </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
             <div className="relative">
                <input 
                    type="text" 
                    placeholder='Ecrivez ou utilisez "/" pour les modèles de réponse' 
                    className="w-full pl-4 pr-12 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm"
                />
                <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600"><Smile size={20}/></button>
                    <button className="text-gray-400 hover:text-gray-600"><Paperclip size={20}/></button>
                    <button className="text-gray-400 hover:text-gray-600"><Mic size={20}/></button>
                    <button className="text-gray-400 hover:text-gray-600"><Zap size={20}/></button>
                    <button className="bg-gray-200 text-gray-400 px-4 py-1.5 rounded-lg text-sm font-medium ml-2">Envoyer</button>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;