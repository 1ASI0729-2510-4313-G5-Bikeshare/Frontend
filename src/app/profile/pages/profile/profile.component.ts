import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {Profile} from '../../model/profile.entity';
import {ProfileService} from '../../services/profile.service';
import {ProfileEditComponent} from '../../components/profile-edit/profile-edit.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {User} from '../../model/user.entity';
import {UserService} from '../../services/user.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardTitle,
    MatFabButton,
    MatCardContent,
    ProfileEditComponent,
    NgIf,
    NgForOf,
    NgClass,
    TranslatePipe,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

/**
 * Component responsible for displaying and managing the user profile.
 * Allows profile viewing, editing, and updating via services.
 */
export class ProfileComponent implements OnInit {

  /** Stores the user's profile data */
  protected profileData!: Profile;

  /** Stores basic user information */
  protected userData!: User;

  protected editMode: boolean = false;

  stars: number[] = [1, 2, 3, 4, 5];

  /** Injected service for handling profile operations */
  private profileService = inject(ProfileService);

  /** Injected service for handling user operations */
  private userService = inject(UserService);

  constructor() {
    this.editMode = false;
    this.profileData = new Profile({});
    this.userData = new User({});
  }

  /**
   * Lifecycle hook that initializes user and profile data on component load.
   */
  ngOnInit() {
    this.loadUser();
    this.loadProfile();
  }

  /**
   * Loads profile data for a given user ID.
   * Fetches the profile from the `ProfileService`.
   */
  private loadProfile() {
    const userId = 1;
    this.profileService.getByUserId(userId).subscribe(profile => {
      this.profileData = profile;
    })
  }

  /**
   * Loads basic user information.
   * Fetches the user details from the `UserService`.
   */
  private loadUser(){
    const id = 1;
    this.userService.getById(id).subscribe(user => {
      this.userData = user;
    })
  }

  /**
   * Determines the type of star to display based on the user's rating.
   * @param starIndex - Index of the star (1 to 5)
   * @returns The corresponding Material icon name for full, half, or empty stars.
   */
  getStarType(starIndex: number): string {
    const rating = this.profileData.rating;
    if (rating >= starIndex) {
      return 'star'; // Llena
    } else if (rating >= starIndex - 0.5) {
      return 'star_half'; // Media estrella
    } else {
      return 'star_border'; // Vacía
    }
  }


  protected onEditRequested(){
    this.editMode = true;
  }

  protected onCancelRequested(){
    this.editMode = false;
    this.loadProfile();
  }

  /**
   * Updates the profile with new data from `ProfileEditComponent`.
   * @param updatedProfile - The modified profile data
   */
  protected onProfileUpdatedRequested(updatedProfile: Profile){
    this.profileService.update(updatedProfile.id, updatedProfile).subscribe((savedProfile) => {
      this.profileData = savedProfile;
      this.editMode = false;
    })
  }
}
