import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly clau = 'preferits-cataleg';
  private readonly _preferits = signal<ElementCataleg[]>([]);
  preferits = this._preferits.asReadonly();
  totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregar();
  }

  private carregar() {
    try {
      const text = localStorage.getItem(this.clau);
      if (!text) return;
      const dades = JSON.parse(text) as ElementCataleg[];
      this._preferits.set(dades);
    } catch {
      this._preferits.set([]);
    }
  }

  private desar() {
    try {
      localStorage.setItem(this.clau, JSON.stringify(this._preferits()));
    } catch {}
  }

  afegirPreferit(element: ElementCataleg): void {
    if (this.esPreferit(element.id)) return;
    this._preferits.update(llista => [...llista, { ...element, notes: [] }]);
    this.desar();
  }
  actualitzarNotes(id: string, notes: string[]): void {
  this._preferits.update(llista =>
    llista.map(e => e.id === id ? { ...e, notes } : e)
  );
  this.desar();
}
  eliminarPreferit(id: string): void {
    this._preferits.update(llista => llista.filter(e => e.id !== id));
    this.desar();
  }

  esPreferit(id: string): boolean {
    return this._preferits().some(e => e.id === id);
  }
}
