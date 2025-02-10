import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  
  correctNames: string[] = ['Valentino', 'San Valentino']; // Nomi corretti
  errorMessage: string = ''; // Messaggio di errore
  isShaking: boolean = false;

  constructor(private router: Router) {}

  checkLogin() {
    if (this.correctNames.map(name => name.toLowerCase()).includes(this.username.trim().toLowerCase())) {
      this.errorMessage = ''; // Resetta il messaggio di errore
      this.router.navigate(['/home']); // Reindirizza alla home
    } else {
      this.errorMessage = '💔 Non sei chi sto cercando! 💔';
      this.isShaking = true;
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
      setTimeout(() => {
        this.isShaking = false; // Dopo 500ms rimuove la classe
      }, 500);
    }
  }
}
