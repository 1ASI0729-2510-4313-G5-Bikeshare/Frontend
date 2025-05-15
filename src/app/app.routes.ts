import { Routes } from '@angular/router';
import {ProfileComponent} from './profile/pages/profile/profile.component';

const baseTitle = 'BikeShare';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent, title: `${baseTitle} | Profile` },

];
