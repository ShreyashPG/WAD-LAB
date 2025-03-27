import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="user.username" name="username" placeholder="Username" required>
      <input [(ngModel)]="user.email" name="email" placeholder="Email" required>
      <input [(ngModel)]="user.password" name="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.register(this.user);
    this.router.navigate(['/login']);
  }
}