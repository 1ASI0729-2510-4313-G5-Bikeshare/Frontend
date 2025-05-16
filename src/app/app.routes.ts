import { Routes } from '@angular/router';

import { WelcomeScreenComponent } from './presentation/welcome-screen/welcome-screen.component';
import { LoginScreenComponent   } from './presentation/login-screen/login-screen.component';
import { HomeCustomerComponent  } from './presentation/home-customer/home-customer.component';
import { HomeAddBikeComponent } from './presentation/home-add-bike/home-add-bike.component';

export const appRoutes: Routes = [
  { path: '',             component: WelcomeScreenComponent },
  { path: 'alquilar',     component: LoginScreenComponent   },
  { path: 'alquilar/home',component: HomeCustomerComponent  },
  { path: 'rentar',       component: LoginScreenComponent   },
  { path: 'rentar/home',  component: HomeAddBikeComponent   },
  { path: '**',           redirectTo: ''                  }
];
