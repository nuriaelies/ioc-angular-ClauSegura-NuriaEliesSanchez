import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/cataleg-page/cataleg-page.component').then(m => m.CatalegPageComponent)
  },
  {
    path: 'app',
    component: AppComponent
  }
];
