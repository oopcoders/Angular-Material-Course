import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-profile-manager',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './user-profile-manager.component.html',
  styleUrl: './user-profile-manager.component.scss'
})
export class UserProfileManagerComponent {

  user = {
    name: 'John Doe',
    bio: 'Angular developer & UI designer.'
  };

  openDialog(): void {

  }

}