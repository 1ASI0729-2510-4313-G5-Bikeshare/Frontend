import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent {
  constructor(private router: Router) {}

  goAlquilar(): void {
    this.router.navigate(['/alquilar']);
  }

  goRentar(): void {
    this.router.navigate(['/rentar']);
  }
}
