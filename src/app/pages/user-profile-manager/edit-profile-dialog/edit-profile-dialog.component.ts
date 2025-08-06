import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'


@Component({
  selector: 'app-edit-profile-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.scss'
})
export class EditProfileDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, bio: string }
  ) {

    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
      bio: [this.data.bio]
    });
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}