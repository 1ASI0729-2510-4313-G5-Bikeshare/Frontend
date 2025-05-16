import { Component }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  fullName     = '';
  emailOrPhone = '';
  password     = '';
  agreeTerms   = false;
  flow: 'alquilar' | 'rentar';

  constructor(private router: Router) {
    this.flow = this.router.url.startsWith('/alquilar') ? 'alquilar' : 'rentar';
  }

  createAccount(): void {
    // aquí tu lógica de registro...
    this.router.navigate([`/${this.flow}/home`]);
  }

  goToSignIn(): void {
    this.router.navigate([`/${this.flow}`]);
  }
}
