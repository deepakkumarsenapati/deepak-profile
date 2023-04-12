import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient, private appService: AppService) {}

  sendEmail(templateParam: any): Observable<any> {
    return this.http.post(
      this.appService.emailServiceUrl,
      {
        service_id: this.appService.sericeId,
        template_id: this.appService.templateId,
        user_id: this.appService.userId,
        template_params: templateParam,
      },
      { responseType: 'text' }
    );
  }
}
