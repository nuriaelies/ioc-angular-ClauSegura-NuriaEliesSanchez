import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, ScrollingModule],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LlistaElementsComponent {
  @Input() items: any[] = [];
  altadaElement = 120;

  trackById(index: number, item: any) {
    return item.id;
  }
}
