import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['users']);
    }
  }
  onSubmit(): void {
    if (this.loginform.valid) {
      this.auth.login(this.loginform.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/users']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}