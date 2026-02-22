export enum Role {
  ORG_ADMIN = 'ADMIN',
  ORG_MANAGER = 'MANAGER',
  ORG_EDITOR = 'EDITOR',
  ORG_VIEWER = 'VIEWER',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  currentOrgId: string;
}

export enum OrganizationRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export interface Organization {
  id: string;
  name: string;
  ownerId: string;
  role: OrganizationRole;
  membersCount: number;
}

export enum LocationStatus {
  ACTIVE = 'ACTIVE',
  DISCONNECTED = 'DISCONNECTED',
  PENDING = 'PENDING',
}

export interface Location {
  id: string;
  orgId: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  status: LocationStatus;
  rating: number;
  reviewCount: number;
  photoUrl: string;
  website?: string;
  bookingUrl?: string;
  phone?: string;
}

export enum ReviewSource {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  OTHER = 'OTHER',
}

export interface Review {
  id: string;
  locationId: string;
  locationName: string;
  source: ReviewSource;
  author: string;
  rating: number;
  text: string;
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
  responded: boolean;
  response?: string;
  date: string;
}

export interface StatPoint {
  name: string;
  value: number;
}