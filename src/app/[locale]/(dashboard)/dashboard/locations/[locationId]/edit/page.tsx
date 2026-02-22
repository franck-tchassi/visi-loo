"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Globe, Phone, Tag, Building } from 'lucide-react';

const EditLocation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10 animate-fade-in">
      <div className="flex items-center space-x-4 mb-6">
        <button 
          onClick={() => router.back()} 
          className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Modifier l'établissement</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Building size={16} className="mr-2 text-gray-400" />
                Nom de l'établissement
              </label>
              <input 
                type="text" 
                defaultValue="Nom de mon établissement" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Tag size={16} className="mr-2 text-gray-400" />
                Catégorie
              </label>
              <input 
                type="text" 
                defaultValue="Restaurant français" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                Adresse
              </label>
              <input 
                type="text" 
                defaultValue="12 rue Jean Moulin, 69123 Lyon, France" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                Téléphone
              </label>
              <input 
                type="tel" 
                defaultValue="04 78 12 34 56" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Globe size={16} className="mr-2 text-gray-400" />
                Site web
              </label>
              <input 
                type="url" 
                defaultValue="https://www.monetablissement.com" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={() => router.back()}
              className="px-6 py-2.5 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm transition-colors"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLocation;