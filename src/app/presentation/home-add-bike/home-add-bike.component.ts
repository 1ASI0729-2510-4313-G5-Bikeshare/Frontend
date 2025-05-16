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
  selector: 'app-home-addbike',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-add-bike.component.html',
  styleUrls: ['./home-add-bike.component.css']
})
export class HomeAddBikeComponent {
  distanceTraveled = 0; // en metros
  rentals: Rental[] = [];
}
