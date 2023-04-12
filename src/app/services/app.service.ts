import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appURL = environment.firebaseDatabaseUrl;
  emailServiceUrl = environment.emailUrl;
  sericeId = environment.service_id;
  templateId = environment.template_id;
  userId = environment.user_id;
}
