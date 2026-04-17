import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
})
export class PreferitsPanelComponent {
  private fb = inject(FormBuilder);
  private preferitsServei = inject(PreferitsService);

  preferits = this.preferitsServei.preferits();

  formulari = this.fb.group({
    notesPerElement: this.fb.array<FormGroup>([])
  });

get notesPerElement(): FormArray<FormGroup> {
    return this.formulari.get('notesPerElement') as FormArray<FormGroup>;
  }
  constructor() {
    this.preferits.forEach(p => {
      this.notesPerElement.push(this.crearFormNotes(p));
    });
  }

  crearFormNotes(element: ElementCataleg): FormGroup {
    return this.fb.group({
      id: element.id,
      notes: this.fb.array<FormControl>(
        (element.notes ?? []).map(n => this.crearControlNota(n))
      )
    });
  }

  crearControlNota(valor: string = ''): FormControl {
    return this.fb.control(valor, [Validators.required, Validators.minLength(3)]);
  }

  afegirNota(index: number): void {
    const grup = this.notesPerElement.at(index) as FormGroup;
    const notes = grup.get('notes') as FormArray<FormControl>;
    notes.push(this.crearControlNota());
    this.guardar(index);
  }
getNotesControls(index: number) {
  const grup = this.notesPerElement.at(index) as FormGroup;
  const notes = grup.get('notes') as FormArray<FormControl>;
  return notes.controls;
}

  eliminarNota(index: number, notaIndex: number): void {
    const grup = this.notesPerElement.at(index) as FormGroup;
    const notes = grup.get('notes') as FormArray<FormControl>;
    notes.removeAt(notaIndex);
    this.guardar(index);
  }

  guardar(index: number): void {
    const grup = this.notesPerElement.at(index) as FormGroup;
    const id = grup.get('id')?.value;
    const notes = (grup.get('notes') as FormArray<FormControl>).value;
    this.preferitsServei.actualitzarNotes(id, notes);
  }
}
