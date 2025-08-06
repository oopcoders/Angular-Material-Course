import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-edit-profile-dialog',
  imports: [ReactiveFormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule],
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