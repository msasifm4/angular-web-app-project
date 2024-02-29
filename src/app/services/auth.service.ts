import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  saveRegistrationData(formData: any): void {
    // Get existing data from local storage or initialize an empty array
    let registrations: any[] = JSON.parse(localStorage.getItem('registrations') || '[]');

    // Add the new form data to the array
    registrations.push(formData);

    // Save the updated array back to local storage
    localStorage.setItem('registrations', JSON.stringify(registrations));
  }

  getRegistrationData(): any[] {
    // Retrieve registration data from local storage
    return JSON.parse(localStorage.getItem('registrations') || '[]');
  }

 

login({ email, password }: any): Observable<any> {
  // Check if email and password are provided
  if (!email || !password) {
    return throwError(new Error('Please enter both email and password'));
  }

  // Check user credentials against data stored in local storage
  const users = JSON.parse(localStorage.getItem('registrations') || '[]');
  const foundUser = users.find((user: any) => user.email === email);

  if (foundUser) {
    if (foundUser.password === password) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: foundUser.name, email: foundUser.email });
    } else {
      return throwError(new Error('Incorrect password'));
    }
  } else {
    return throwError(new Error('User not found'));
  }
}

}