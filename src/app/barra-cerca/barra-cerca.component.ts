import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'barra-cerca',
  standalone: true,
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() textCerca = new EventEmitter<string>();

  onSearch(event: any) {
    this.textCerca.emit(event.target.value);
  }
}
