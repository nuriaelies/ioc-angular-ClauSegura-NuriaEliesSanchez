import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DADES_MOCK } from './mocks/dades-mock';
import { CommonModule } from '@angular/common';
import { BarraCercaComponent } from './barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './llista-elements/llista-elements.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,BarraCercaComponent,LlistaElementsComponent, FormsModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-ClauSegura-NuriaEliesSanchez';

  elements = DADES_MOCK;
  filtre: string = '';
  
 onTextCerca(text: string) {
    this.filtre = text.toLowerCase();
  }
  textCercaForm: string = '';

  filtrarAmbFormulari() {
    this.filtre = this.textCercaForm.toLowerCase();
  }

  get elementsFiltrats() {
    return this.elements.filter(e =>
      e.name.toLowerCase().includes(this.filtre)
    );
  }
  constructor(){
    console.log('App ClauSegura confirmació d’arrancada correcta');
  }
}
