import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-profile-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.scss'
})
export class EditProfileDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      bio: ['']
    });
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
