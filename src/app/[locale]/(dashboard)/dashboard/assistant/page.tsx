"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Sparkles, RefreshCw, Bot, User, Zap, 
  CheckCircle2, Plus, Info, Lightbulb, 
  MessageSquare, ChevronRight, BarChart3,
  Search, Wand2, Settings2, Globe, Newspaper,
  Mic, Paperclip, MoreHorizontal, Smile
} from 'lucide-react';
import { toast } from 'sonner';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'ai', 
      text: "Bonjour Franck, je suis **Léo**. \n\nJe suis connecté à votre établissement de **Lyon Jean Moulin**. J'ai analysé vos 12 derniers avis et votre visibilité actuelle. Comment puis-je vous aider à optimiser votre présence aujourd'hui ?",
      type: 'welcome'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: messageText, type: 'text' }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: "C'est noté. J'analyse les données et je vous prépare une proposition optimisée. Voici mes suggestions...", 
        type: 'text' 
      }]);
    }, 1200);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6 animate-fade-in pb-4">
      
      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        {/* Modern Header */}
        <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                    <Bot size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <h2 className="text-xl font-black text-gray-900 tracking-tight">Copilote Léo</h2>
                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-green-100">Actif</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold mt-0.5 uppercase tracking-wide">Expert en Marketing Local</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all"><RefreshCw size={18}/></button>
                <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all"><Settings2 size={18}/></button>
            </div>
        </div>

        {/* Messages Container */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-8 py-10 space-y-10 custom-scrollbar">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                        <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm ${msg.sender === 'user' ? 'bg-gray-100 text-gray-500' : 'bg-blue-600 text-white'}`}>
                            {msg.sender === 'user' ? <User size={18} /> : <Sparkles size={18} />}
                        </div>
                        <div className={`p-6 rounded-2xl text-[15px] leading-relaxed ${
                            msg.sender === 'user' 
                            ? 'bg-gray-900 text-white rounded-tr-none font-medium' 
                            : 'bg-blue-50/40 text-gray-800 border border-blue-50 rounded-tl-none font-medium shadow-sm'
                        }`}>
                            {msg.text.split('\n').map((line, i) => (
                                <p key={i} className={i > 0 ? 'mt-3' : ''}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {isTyping && (
                <div className="flex justify-start items-center space-x-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-400">
                        <Bot size={18} className="animate-pulse" />
                    </div>
                    <div className="flex space-x-1.5 p-4 bg-gray-50 rounded-2xl">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            )}
        </div>

        {/* Input & Commands Area */}
        <div className="p-8 border-t border-gray-50 bg-white">
            {/* Quick Commands Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: BarChart3, label: "Analyser avis", color: "text-orange-500", bg: "bg-orange-50" },
                    { icon: Newspaper, label: "Rédiger post", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: Globe, label: "Audit visibilité", color: "text-purple-500", bg: "bg-purple-50" },
                    { icon: Lightbulb, label: "Conseils SEO", color: "text-green-500", bg: "bg-green-50" },
                ].map((action, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSend(`Léo, peux-tu ${action.label.toLowerCase()} pour moi ?`)}
                        className="flex items-center space-x-3 p-3 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all group bg-white"
                    >
                        <div className={`p-2 rounded-xl ${action.bg} ${action.color} group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                            <action.icon size={18} />
                        </div>
                        <span className="text-sm font-black text-gray-700 tracking-tight">{action.label}</span>
                    </button>
                ))}
            </div>

            {/* Input Bar */}
            <div className="relative group max-w-5xl mx-auto">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center space-x-3 text-gray-300">
                    <button className="hover:text-blue-500 transition-colors"><Paperclip size={20}/></button>
                    <div className="w-[1px] h-4 bg-gray-200"></div>
                </div>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Posez votre question à Léo..."
                    className="w-full pl-20 pr-32 py-5 bg-gray-50 border-2 border-transparent focus:border-blue-100 focus:bg-white rounded-2xl outline-none text-[16px] font-bold text-gray-800 placeholder:text-gray-400 transition-all shadow-inner"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all"><Mic size={20}/></button>
                    <button 
                        onClick={() => handleSend()}
                        className="p-3 bg-blue-600 text-white rounded-xl shadow-xl shadow-blue-200 hover:bg-blue-700 transform active:scale-95 transition-all flex items-center justify-center"
                    >
                        <Send size={20} fill="currentColor" />
                    </button>
                </div>
            </div>
            <p className="text-center text-[10px] text-gray-300 font-black uppercase tracking-[0.2em] mt-6">
                Propulsé par le modèle Gemini 3.1 Pro de Visiloo
            </p>
        </div>
      </div>

      {/* RIGHT SIDEBAR: KNOWLEDGE CONTEXT */}
      <div className="w-80 shrink-0 space-y-6 hidden xl:block">
          
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Contexte de Léo</h3>
              
              <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col space-y-3">
                      <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-gray-400 uppercase">Établissement</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-sm font-black text-gray-800 leading-tight">Lyon Jean Moulin</span>
                  </div>

                  <div className="space-y-2">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Sources synchronisées</p>
                      <div className="space-y-2">
                          {['Fiche Google Business', 'Derniers 50 avis', 'Site vitrine .com'].map(source => (
                              <div key={source} className="flex items-center justify-between px-3 py-2 bg-white border border-gray-50 rounded-xl">
                                  <div className="flex items-center space-x-2">
                                      <CheckCircle2 size={14} className="text-blue-500" />
                                      <span className="text-xs font-bold text-gray-600">{source}</span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              <button onClick={() => toast.info("Ajouter un PDF/Lien non implémenté.")} className="w-full mt-6 py-3 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 text-xs font-black hover:border-blue-200 hover:text-blue-500 transition-all flex items-center justify-center">
                <Plus size={16} className="mr-2" /> Ajouter un PDF/Lien
              </button>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-600/40 transition-all"></div>
               <div className="flex items-center justify-between mb-6 relative z-10">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Performances IA</h3>
                    <Zap size={16} className="text-yellow-400" fill="currentColor" />
               </div>
               <div className="space-y-5 relative z-10">
                    <div>
                        <div className="flex items-end space-x-2 mb-1">
                            <span className="text-3xl font-black">4.8</span>
                            <span className="text-xs font-bold text-gray-400 mb-1.5">Note suggérée</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="w-[96%] h-full bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-[11px] text-gray-400 font-bold leading-relaxed">
                        Léo a déjà répondu à 14 avis ce mois-ci, avec un taux d'acceptation de vos corrections de 92%.
                    </p>
               </div>
          </div>
      </div>

    </div>
  );
};

export default Assistant;