import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: any = null;

  register(user: { username: string, email: string, password: string }) {
    this.currentUser = user;
  }

  login(username: string, password: string): boolean {
    return this.currentUser?.username === username && this.currentUser?.password === password;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}