### Components amb OnPush
- **ElementCardComponent**: component purament visual que només rep dades via `@Input`.
- **DetallComponent**: mostra informació segons la ruta activa i no gestiona estat propi.

### Virtualització
- **Component utilitzat**: `LlistaElementsComponent`.
- **Alçada per element (`itemSize`)**: 120 px.
- **Quantitat d’elements**: més de 50 per activar la virtualització.
