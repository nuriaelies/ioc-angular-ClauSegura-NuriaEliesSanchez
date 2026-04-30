import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSessio() {
    const ok = this.auth.login(this.email, this.contrasenya);

    if (ok) {
      this.router.navigate(['/preferits']);
    } else {
      this.error = true;
    }
  }
}
