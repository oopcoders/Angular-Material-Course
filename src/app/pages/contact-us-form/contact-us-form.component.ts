import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-us-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
    MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss'
})
export class ContactUsFormComponent {
  form: FormGroup;

  weekendFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      topic: [''],
      priority: ['medium'],
      subscribe: [false],
      contactDate: [null]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Message sent!');
    }
  }
}