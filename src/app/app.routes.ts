import { Routes } from '@angular/router';

import { WelcomeScreenComponent } from './presentation/welcome-screen/welcome-screen.component';
import { HomeCustomerComponent  } from './presentation/home-customer/home-customer.component';
import { HomeAddBikeComponent } from './presentation/home-add-bike/home-add-bike.component';
import { CreateAccountComponent } from './presentation/create-account/create-account.component';

export const appRoutes: Routes = [
  { path: '',               component: WelcomeScreenComponent },
  { path: 'alquilar',       component: CreateAccountComponent },
  { path: 'alquilar/home',  component: HomeCustomerComponent  },
  { path: 'rentar',         component: CreateAccountComponent },
  { path: 'rentar/home',    component: HomeAddBikeComponent   },
  { path: '**',             redirectTo: ''                  }
];
