import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from './edit-profile-dialog/edit-profile-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile-manager',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './user-profile-manager.component.html',
  styleUrl: './user-profile-manager.component.scss'
})
export class UserProfileManagerComponent {

  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);

  user = {
    name: 'John Doe',
    bio: 'Angular developer & UI designer.'
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      height: '400px',
      width: '600px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result
        this.snackBar.open("Profile updated!", "Close", { duration: 3000 })
      }
    })
  }

}