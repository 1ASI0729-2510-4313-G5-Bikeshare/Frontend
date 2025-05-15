import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseService} from '../../shared/services/base.service';
import {Profile} from '../model/profile.entity';
import {catchError, map, Observable, retry} from 'rxjs';

const profilesResourceEndpointPath = environment.profilesEndpoint;
@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile>{

  constructor() {
    super();
    this.resourceEndpoint = profilesResourceEndpointPath;
  }

  getByUserId(userId: number): Observable<Profile> {
    return this.http.get<Profile[]>(`${this.resourcePath()}?userId=${userId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map(profiles => profiles[0]) // Devuelve solo el primer perfil coincidente
      );
  }

}
