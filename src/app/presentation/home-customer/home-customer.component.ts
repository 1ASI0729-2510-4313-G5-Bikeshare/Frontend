import { Component }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

interface Rental {
  bike: string;
  departureDate: string;
  departureStation: string;
  returnDate: string;
  returnStation: string;
  duration: string;
}
@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent {
  distanceTraveled = 0; // en metros
  rentals: Rental[] = [];
}
