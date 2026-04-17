import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';


@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [NgIf, NgFor, FormulariCercaComponent, PreferitsPanelComponent],
  templateUrl: './cataleg-page.component.html',
})
export class CatalegPageComponent {
  private readonly elementServei = inject(ElementService);
  private readonly preferitsServei = inject(PreferitsService);

  elements = this.elementServei.elements;
  carregant = this.elementServei.carregant;
  error = this.elementServei.error;

  preferits = this.preferitsServei.preferits;
  totalPreferits = this.preferitsServei.totalPreferits;
  
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
