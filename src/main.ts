
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter }        from '@angular/router';
import { AppConfig }            from './app/app.config';    // <-- AppConfig, no appConfig
import { AppComponent }         from './app/app.component';
import { appRoutes }            from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    { provide: 'APP_CONFIG', useValue: AppConfig }         // <-- AppConfig aquí también
  ]
})
  .catch(err => console.error(err));
