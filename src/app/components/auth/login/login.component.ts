import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = {
    name: '',
    password: '',
  };

  error = '';

  constructor(private api: ApiService, private router: Router) {}

  onLogin() {
    this.api.login(this.form).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/tickets']); // ✅ redirect
      },
      error: () => {
        this.error = 'Invalid credentials';
      },
    });
  }
}