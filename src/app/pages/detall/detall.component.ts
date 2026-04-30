import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetallComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
