import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementCataleg, ElementApiResponse } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private readonly elementsIntern = signal<ElementCataleg[]>([]);
  private readonly carregantIntern = signal<boolean>(false);
  private readonly errorIntern = signal<string | null>(null);

  readonly elements: Signal<ElementCataleg[]> = this.elementsIntern.asReadonly();
  readonly carregant: Signal<boolean> = this.carregantIntern.asReadonly();
  readonly error: Signal<string | null> = this.errorIntern.asReadonly();

  private readonly urlBase = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this.carregantIntern.set(true);
    this.errorIntern.set(null);

    this.http.get<ElementApiResponse[]>(`${this.urlBase}/elements`, {
      params: { popular: true }
    }).subscribe({
      next: resposta => {
        const adaptats = adaptarElementsApi(resposta);
        this.elementsIntern.set(adaptats);
        this.carregantIntern.set(false);
      },
      error: _ => {
        this.errorIntern.set('No s’han pogut carregar els elements populars.');
        this.carregantIntern.set(false);
      }
    });
  }

  cercar(terme: string): void {
    this.carregantIntern.set(true);
    this.errorIntern.set(null);

    this.http.get<ElementApiResponse[]>(`${this.urlBase}/elements`, {
      params: { q: terme }
    }).subscribe({
      next: resposta => {
        const adaptats = adaptarElementsApi(resposta);
        this.elementsIntern.set(adaptats);
        this.carregantIntern.set(false);
      },
      error: _ => {
        this.errorIntern.set('Error en recerca');
        this.carregantIntern.set(false);
      }
    });
  }
}
