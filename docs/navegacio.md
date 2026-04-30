# Navegació i rutes

## Mapa de rutes

| Path        | Component     | Accés |
|-------------|---------------|--------|
| /           | Redirecció a /cataleg | Públic |
| /cataleg    | CatalegPage   | Públic |
| /cerca      | Cerca         | Públic |
| /detall/:id | Detall        | Públic |
| /preferits  | Preferits     | Privat |
| /login      | Login         | Públic |
| **          | Redirecció a /cataleg | Públic |

## Configuració

S'ha definit la constant `routes` a `app.routes.ts` i s'ha registrat amb `provideRouter(routes)` a `app.config.ts`.

L'arrel de l'aplicació conté `<router-outlet>` per carregar les vistes.

Els enllaços de navegació utilitzen `routerLink` i `routerLinkActive` per indicar la ruta activa.
