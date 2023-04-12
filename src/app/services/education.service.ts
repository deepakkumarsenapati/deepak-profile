import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getEducation(): Observable<any> {
    return this.http.get(`${this.appService.appURL}educations.json`);
  }
}
