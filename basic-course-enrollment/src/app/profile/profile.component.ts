import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Profile</h2>
    <div *ngIf="user">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  `
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }
}