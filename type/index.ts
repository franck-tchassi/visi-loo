// types/index.ts
export interface Invoice {
  id: string;
  name: string;
  userId: string;
  issuerName: string;
  issuerAddress: string;
  clientName: string;
  clientAddress: string;
  invoiceDate: string;
  dueDate: string;
  vatActive: boolean;
  vatRate: number;
  status: number;
  lines: InvoiceLine[];
}

export interface InvoiceLine {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  invoiceId: string;
}

export interface Totals {
  totalHT: number;
  totalVAT: number;
  totalTTC: number;
}

export interface NavItem {
  label: string;
  hasDropdown: boolean;
  type: 'mega' | 'simple';
  id: string;
  href?: string; // For simple links like Pricing
}

export interface Language {
  code: string;
  label: string;
}

export interface IconLinkItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export interface ResourceLinkItem {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

export interface JimAIFeature {
  text: string;
}