import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DADES_MOCK } from './mocks/dades-mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-ClauSegura-NuriaEliesSanchez';

  elements = DADES_MOCK;

  constructor(){
    console.log('App ClauSegura confirmació d’arrancada correcta');
  }
}
