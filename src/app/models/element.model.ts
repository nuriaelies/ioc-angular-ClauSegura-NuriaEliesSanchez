export interface ElementCatalegBasic {
  id: number;
  nom: string;
  popular: boolean;
}

export interface Element {
  id: number;
  name: string;
  value: number;
  notes?: string;
}

export interface ElementApiResponse {
  id: string;
  titol: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;
}

export interface ElementCataleg {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatgeUrl: string;
  esPopular: boolean;
  popular: boolean; 
  unitats: number;
  notes?: string[];
}
