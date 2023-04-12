import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getMenus(): Observable<any> {
    return this.http.get(`${this.appService.appURL}menu.json`);
  }
}
