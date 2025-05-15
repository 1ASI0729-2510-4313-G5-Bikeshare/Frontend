import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Profile} from '../../model/profile.entity';
import {FormsModule, NgForm} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-profile-edit',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    NgIf,
    MatSlideToggle,
    MatSelect,
    MatOption,
    MatButton,
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})

/**
 * @summary Handles editable profile data and emits updates when changes are made
 */
export class ProfileEditComponent implements OnChanges{

  /** The profile being edited */
  @Input() profile!: Profile;

  /** Edit mode state (true if the profile is being edited) */
  @Input() editMode: boolean = false;

  /** Event emitted when a profile update is requested */
  @Output() protected profileUpdateRequested = new EventEmitter<Profile>();

  /** Event emitted when edit is canceled */
  @Output() protected cancelRequested = new EventEmitter<void>();

  /** Reference to the form for validation */
  @ViewChild('profileForm', { static: false })
  protected profileForm?: NgForm;

  editedProfile!: Profile;

  selectedPaymentMethod: string = '';

  /**
   * Handles changes to input properties.
   * Clones the profile to allow safe editing without modifying the original.
   * @param changes Object containing the changed properties
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['profile'] && this.profile) {
      this.editedProfile = {
        ...this.profile,
        preferences: { ...this.profile.preferences },
        paymentMethods: { ...this.profile.paymentMethods }
      };

      //Inicializamos el método de pago seleccionado según el perfil
      if (this.editedProfile.paymentMethods.creditCard) {
        this.selectedPaymentMethod = 'creditCard';
      } else if (this.editedProfile.paymentMethods.paypal) {
        this.selectedPaymentMethod = 'paypal';
      } else {
        this.selectedPaymentMethod = '';
      }
    }
  }

  /**
   * Updates the selected payment method in the profile.
   */
  updatePaymentMethod() {
    this.editedProfile.paymentMethods = {
      creditCard: this.selectedPaymentMethod === 'creditCard',
      paypal: this.selectedPaymentMethod === 'paypal',
    };
  }

  /**
   * Checks if the form is valid.
   * @returns `true` if the form is valid, `false` if invalid, `null` if undefined
   */
  protected isValid = (): boolean | null => this.profileForm?.valid ?? null;

  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      this.profileUpdateRequested.emit(this.editedProfile);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }

  /**
   * Resets the edit state and restores the original profile data.
   */
  private resetEditState() {
    this.editedProfile = { ...this.profile };
    this.editMode = false;
    this.profileForm?.resetForm(this.editedProfile);
  }
}
