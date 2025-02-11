import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  
  correctNames: string[] = ['Angelica', 'Angelica Albi', 'Emma', 'Emma Rigoni', 'Anna']; // Nomi corretti
  errorMessage: string = ''; // Messaggio di errore
  isShaking: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Svuota l'array quando la pagina viene ricaricata
    sessionStorage.setItem('loginData', JSON.stringify([]));
  }

  checkLogin() {

    let loginData = JSON.parse(sessionStorage.getItem('loginData') || '[]');

    // Aggiungi il nome dell'utente (anche se è sbagliato)
    loginData.push(this.username.trim());

    // Salva l'array aggiornato
    sessionStorage.setItem('loginData', JSON.stringify(loginData));

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
