import { Location, LocationStatus, Review, ReviewSource, StatPoint, Organization, OrganizationRole, User, Role } from './types';

export const CURRENT_USER: User = {
    id: 'u_1',
    name: 'Franck',
    email: 'franck@example.com',
    role: Role.ORG_ADMIN,
    currentOrgId: 'org_1'
};

export const MOCK_ORGS: Organization[] = [
    {
        id: 'org_1',
        name: "Franck's Organization",
        ownerId: 'u_1',
        role: OrganizationRole.ADMIN,
        membersCount: 3
    },
    {
        id: 'org_2',
        name: "Bistrot Network",
        ownerId: 'u_1',
        role: OrganizationRole.MANAGER,
        membersCount: 5
    }
];

export const MOCK_TEAM = [
    { id: 1, name: 'Franck (Vous)', email: 'franck@example.com', role: OrganizationRole.ADMIN, status: 'ACTIVE', avatar: 'https://i.pravatar.cc/150?u=u_1' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@example.com', role: OrganizationRole.MANAGER, status: 'ACTIVE', avatar: 'https://i.pravatar.cc/150?u=u_2' },
    { id: 3, name: 'John Doe', email: 'john.doe@gmail.com', role: OrganizationRole.EDITOR, status: 'PENDING', avatar: null }, // Pending invite
];

export const MOCK_LOCATIONS: Location[] = [
  {
    id: 'loc_1',
    orgId: 'org_1',
    name: 'Le Petit Bistrot - Paris 11',
    address: '12 Rue de la Roquette, 75011 Paris',
    lat: 48.855,
    lng: 2.37,
    status: LocationStatus.ACTIVE,
    rating: 4.5,
    reviewCount: 128,
    photoUrl: 'https://picsum.photos/400/300?random=1',
    website: 'https://petitbistrot-paris.com',
    bookingUrl: 'https://booking.com/petitbistrot-paris',
    phone: '01 45 67 89 10'
  },
  {
    id: 'loc_2',
    orgId: 'org_1',
    name: 'Le Petit Bistrot - Lyon',
    address: '5 Place Bellecour, 69002 Lyon',
    lat: 45.75,
    lng: 4.83,
    status: LocationStatus.ACTIVE,
    rating: 4.2,
    reviewCount: 85,
    photoUrl: 'https://picsum.photos/400/300?random=2',
    website: 'https://petitbistrot-lyon.com',
    bookingUrl: 'https://booking.com/petitbistrot-lyon',
    phone: '04 78 12 34 56'
  },
  {
    id: 'loc_3',
    orgId: 'org_1',
    name: 'Le Petit Bistrot - Bordeaux',
    address: '20 Quai de la Douane, 33000 Bordeaux',
    lat: 44.83,
    lng: -0.57,
    status: LocationStatus.DISCONNECTED,
    rating: 3.8,
    reviewCount: 42,
    photoUrl: 'https://picsum.photos/400/300?random=3',
    website: 'https://petitbistrot-bordeaux.com',
    phone: '05 56 78 90 12'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev_1',
    locationId: 'loc_1',
    locationName: 'Le Petit Bistrot - Paris 11',
    source: ReviewSource.GOOGLE,
    author: 'Jean Dupont',
    rating: 5,
    text: 'Super expérience ! Le service était impeccable et la nourriture délicieuse.',
    sentiment: 'POSITIVE',
    responded: true,
    response: 'Merci Jean pour votre retour chaleureux ! À très vite.',
    date: '2023-10-25'
  },
  {
    id: 'rev_2',
    locationId: 'loc_1',
    locationName: 'Le Petit Bistrot - Paris 11',
    source: ReviewSource.GOOGLE,
    author: 'Sophie Martin',
    rating: 2,
    text: 'Attente trop longue, plats arrivés froids. Déçue.',
    sentiment: 'NEGATIVE',
    responded: false,
    date: '2023-10-24'
  },
  {
    id: 'rev_3',
    locationId: 'loc_2',
    locationName: 'Le Petit Bistrot - Lyon',
    source: ReviewSource.GOOGLE,
    author: 'Marc Webber',
    rating: 4,
    text: 'Très bon rapport qualité prix, mais un peu bruyant.',
    sentiment: 'NEUTRAL',
    responded: false,
    date: '2023-10-23'
  },
  {
    id: 'rev_4',
    locationId: 'loc_2',
    locationName: 'Le Petit Bistrot - Lyon',
    source: ReviewSource.FACEBOOK,
    author: 'Alice Cooper',
    rating: 5,
    text: 'Top ! Je recommande le burger.',
    sentiment: 'POSITIVE',
    responded: true,
    response: 'Merci Alice ! Le burger est notre spécialité.',
    date: '2023-10-22'
  }
];

export const MOCK_STATS_ACTIVITY: StatPoint[] = [
  { name: 'Lun', value: 12 },
  { name: 'Mar', value: 19 },
  { name: 'Mer', value: 3 },
  { name: 'Jeu', value: 5 },
  { name: 'Ven', value: 20 },
  { name: 'Sam', value: 35 },
  { name: 'Dim', value: 28 },
];