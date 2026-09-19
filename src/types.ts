export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailPoints: string[];
  sampleOutcome: string;
}

export interface BusinessNeed {
  id: string;
  label: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
  highlight?: boolean;
}

export interface ShowcaseProject {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  visualType: 'vet' | 'eventos' | 'citas' | 'cotizador' | 'dashboard';
  whatsappMessage: string;
  liveUrl?: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
