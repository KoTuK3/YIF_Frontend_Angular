export interface University {
  id: string;
  name: string;
  abbreviation: string;
  site: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  imagePath: string;
  lat: number;
  lon: number;
  startOfCampaign: Date;
  endOfCampaign: Date;
  isFavorite: boolean;
}
