import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './guards/auth.guard';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
import { CercaComponent } from './pages/cerca/cerca.component';
import { LoginComponent } from './pages/login/login.component';
import { DetallComponent } from './pages/detall/detall.component';


export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },

  {
    path: 'cataleg',
    loadComponent: () =>
      import('./pages/cataleg-page/cataleg-page.component')
        .then(m => m.CatalegPageComponent)
  },

  {
    path: 'cerca',
    loadComponent: () =>
      import('./pages/cerca/cerca.component')
        .then(m => m.CercaComponent)
  },

  {
    path: 'detall/:id',
    loadComponent: () =>
      import('./pages/detall/detall.component')
        .then(m => m.DetallComponent)
  },
  {
  path: 'preferits',
  loadComponent: () =>
    import('./pages/preferits/preferits.component').then(m => m.PreferitsComponent),
  canActivate: [authGuard]
},
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  

  { path: 'app', component: AppComponent },

  { path: '**', redirectTo: 'cataleg' }
];
