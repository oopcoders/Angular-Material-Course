import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-profile-manager',
  imports: [],
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
