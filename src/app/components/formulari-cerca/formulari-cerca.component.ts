import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { debounceTime, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent {

  private fb = inject(FormBuilder);

  formulari = this.fb.group({
    termeCerca: ['', {
      validators: [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      asyncValidators: [
        this.validadorAsync()
      ],
      updateOn: 'change'
    }]
  });

  validadorAsync() {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length < 2) {
        return of(null);
      }

      return timer(500).pipe(
        switchMap(() => {
          const teResultats = control.value.toLowerCase() !== 'zzz';
          return of(teResultats ? null : { sensResultats: true });
        })
      );
    };
  }

  ngOnInit() {
    this.formulari.get('termeCerca')!.valueChanges
      .pipe(debounceTime(400))
      .subscribe(valor => {
        console.log('Cercant:', valor);
      });
  }

  netejar() {
    this.formulari.reset();
  }
}
