import { Component } from '@angular/core';

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
  title: string = '💖 Vuoi essere la mia Valentina? 💖'; // Titolo della pagina// URL della GIF di successo

  makeYesBigger() {
    this.buttonSize += 5; // Ingrandisce il pulsante "Sì" ogni volta che si preme "No"
  }

  showMessage() {
    this.title = ''
    this.showButtons = false;
    this.message = '🎉 Evviva! Sapevo avresti detto di sì! 🎉';
    this.gifUrl = 'https://www.gifcen.com/wp-content/uploads/2022/11/love-gif-6.gif'; // Cambia la GIF
  }
}
