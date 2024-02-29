import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }
  registerform = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })
  

  onSubmit(): void {
    // Create an object with form data
    
  

    // Save registration data using the service
    this.auth.saveRegistrationData(this.registerform.value);

    // Clear form fields
    const registrations = this.auth.getRegistrationData();
    console.log(registrations);
    this.router.navigate(['/login']);
  }



}