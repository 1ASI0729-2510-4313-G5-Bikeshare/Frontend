import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  emailOrPhone = '';
  password     = '';
  flow: 'alquilar' | 'rentar';

  constructor(private router: Router) {
    if (router.url.startsWith('/alquilar')) {
      this.flow = 'alquilar';
    } else {
      this.flow = 'rentar';
    }
  }

  signIn(): void {
    // tu lógica de sign-in…
    this.router.navigate([`/${this.flow}/home`]);
  }

  forgotPassword(): void {
    // navega al reset de contraseña
    this.router.navigate(['/forgot-password']);
  }

  signUp(): void {
    this.router.navigate(['/signup']);
  }

  applyTechnician(): void {
    this.router.navigate(['/technician/apply']);
  }
}
