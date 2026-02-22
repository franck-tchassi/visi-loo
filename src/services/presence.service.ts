import { Location } from '@/lib/types';

interface Directory {
  id: string;
  name: string;
  category: string;
  status: 'synced' | 'disconnected';
}

export const PresenceService = {
  getDirectories: (): Directory[] => {
    // Mock data for directories
    return [
      { id: 'dir_1', name: 'Google Business Profile', category: 'Essentiel', status: 'synced' },
      { id: 'dir_2', name: 'Facebook Local', category: 'Essentiel', status: 'synced' },
      { id: 'dir_3', name: 'Apple Plans', category: 'Essentiel', status: 'synced' },
      { id: 'dir_4', name: 'Waze', category: 'GPS', status: 'synced' },
      { id: 'dir_5', name: 'TripAdvisor', category: 'Voyage', status: 'disconnected' },
    ];
  },

  syncAll: async (locationId: string): Promise<void> => {
    console.log(`Synchronisation de tous les annuaires pour la localisation ${locationId}...`);
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 2000));
  },

  getLocationPresence: (locationId: string): Directory[] => {
    // Mock data for a specific location's presence
    return PresenceService.getDirectories().map(dir => ({
      ...dir,
      status: Math.random() > 0.1 ? 'synced' : 'disconnected', // Simulate some disconnected
    }));
  },
};