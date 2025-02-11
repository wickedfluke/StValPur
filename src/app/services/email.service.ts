import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://pythonemailsender.onrender.com/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(username: string, name: string, clickCount: number, notCompleted: boolean): Observable<any> {
    const body = {
      username: username,
      name: name,
      clickCount: clickCount,
      notCompleted: notCompleted
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, body, { headers });
  }
}
