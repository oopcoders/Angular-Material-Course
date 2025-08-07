import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
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
    @Inject(MAT_DIALOG_DATA) public data: { name: string, bio: string },
    public dialogRef: MatDialogRef<EditProfileDialogComponent>
  ) {

    this.form = this.fb.group({
      name: [this.data.name, Validators.required],
      bio: [this.data.bio]
    });
  }

  save() {
    if (this.form.value.name !== "test") {
      this.dialogRef.close(this.form.value);
      console.log("Form data sent");
    } else {
      console.log("Unable to close form, form name can't be the value of test")
    }
  }
}