import { Component } from '@angular/core';
import { UserService } from '../service/User.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = { username: '', email: '', password: '' };

  constructor(private userService: UserService) {}

  register() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log(response);
        // Handle success, e.g., redirect to login page
      },
      error => {
        console.error(error);
        // Handle error, e.g., display error message
      }
    );
  }
}
