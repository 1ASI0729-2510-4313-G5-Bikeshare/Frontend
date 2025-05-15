import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SideNavigationBarComponent} from './public/components/side-navigation-bar/side-navigation-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BikeShare-frontend';

  constructor(private translateService: TranslateService) {
    translateService.use('en');
    translateService.addLangs(['en', 'es']);
  }
}
