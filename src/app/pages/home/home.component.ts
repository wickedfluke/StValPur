import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  buttonSize: number = 20; // Dimensione iniziale del pulsante "Sì"
  message: string = ''; // Messaggio che compare quando si preme "Sì"
  showButtons: boolean = true;
  gifUrl: string = 'https://i.pinimg.com/originals/e5/24/a2/e524a2cf47d6ee6b22585b4f98dacdc3.gif'; 
  title: string = '💖 Vuoi essere la mia Valentina? 💖'; // Titolo della pagina
  noClickCount: number = 0; // Contatore per il pulsante "No"

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    // Recuperiamo i dati dalla sessionStorage
    let loginData = JSON.parse(sessionStorage.getItem('loginData') || '[]');
    console.log('Dati di login:', loginData); // Qui puoi visualizzare l'array di nomi salvati
  }

  sendEmail(names: string, clicks: number, notCompleted: boolean) {
    // Dati per l'email
    const emailData = {
      username: "gianbu00@gmail.com", // Email del destinatario
      name: names, // Lista dei nomi
      clickCount: clicks, // Numero di clic sul pulsante "No"
      notCompleted: notCompleted // True se l'utente ha lasciato la pagina senza premere "Sì"
    };

    this.emailService.sendEmail(emailData.username, emailData.name, emailData.clickCount, emailData.notCompleted)
      .subscribe(response => {
        console.log('Email inviata con successo', emailData);
      }, error => {
        console.error('Errore nell\'invio dell\'email', error);
      });
  }

  makeYesBigger() {
    this.noClickCount += 1; 
    this.buttonSize += 5;
    console.log(this.noClickCount)
  }

  showMessage() {
    this.title = '';
    this.showButtons = false;
    this.message = '🎉 Evviva! Sapevo avresti detto di sì! 🎉';
    this.gifUrl = 'https://www.gifcen.com/wp-content/uploads/2022/11/love-gif-6.gif'; // Cambia la GIF
    // Invio l'email quando l'utente preme "Sì"
    const loginData = JSON.parse(sessionStorage.getItem('loginData') || '[]');
    const namesList = loginData.join(', ');
    this.sendEmail(namesList, this.noClickCount, false); // notCompleted è falso quando si preme "Sì"
  }
}
