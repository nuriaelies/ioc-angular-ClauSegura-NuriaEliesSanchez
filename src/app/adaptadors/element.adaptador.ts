import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export function adaptarElementApi(api: ElementApiResponse): ElementCataleg {
  return {
    id: api.id,
    nom: api.titol,
    descripcio: api.descripcio,
    categoria: api.categoria,
    preu: api.preu,
    imatgeUrl: api.imatge,
    esPopular: api.popular,
	popular: api.popular,
    unitats: api.stock
  };
}

export function adaptarElementsApi(apiResponses: ElementApiResponse[]): ElementCataleg[] {
  return apiResponses.map(adaptarElementApi);
}
