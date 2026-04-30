import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';
import { signal } from '@angular/core';
import { DADES_MOCK } from '../../mocks/dades-mock';
import { ScrollingModule } from '@angular/cdk/scrolling';




@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [NgIf, NgFor, FormulariCercaComponent, PreferitsPanelComponent, ScrollingModule],
  templateUrl: './cataleg-page.component.html',
  styleUrls: ['./cataleg-page.component.css']

})
export class CatalegPageComponent {
  private readonly elementServei = inject(ElementService);
  private readonly preferitsServei = inject(PreferitsService);

  elements = this.elementServei.elements;
  carregant = this.elementServei.carregant;
  error = this.elementServei.error;

  preferits = this.preferitsServei.preferits;
  totalPreferits = this.preferitsServei.totalPreferits;
  elementsMock = signal(DADES_MOCK);
  errorMock = signal<string | null>(null);

  
  constructor() {
    this.elementServei.obtenirPopulars();
	
  }

  reintentar(): void {
    this.elementServei.obtenirPopulars();
  }

  cercar(terme: string): void {
    this.elementServei.cercar(terme);
  }
   esPreferit(id: string): boolean {
    return this.preferitsServei.esPreferit(id);
  }

  canviarPreferit(element: ElementCataleg): void {
    if (this.esPreferit(element.id)) {
      this.preferitsServei.eliminarPreferit(element.id);
    } else {
      this.preferitsServei.afegirPreferit(element);
    }
}
}
