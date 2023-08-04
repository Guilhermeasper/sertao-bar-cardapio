import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SBSpreadsheetResponse } from '@sertao-bar/models/spreadsheet-response';
import { environment } from '@sertao-bar/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  apiUrl: string = environment.api_url;
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) {}

  getSections(): Observable<SBSpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}sections?alt=json&key=${this.apiKey}`;
    return this.http.get<SBSpreadsheetResponse>(requestUrl);
  }

  getMenuItems(): Observable<SBSpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}data?alt=json&key=${this.apiKey}`;
    return this.http.get<SBSpreadsheetResponse>(requestUrl);
  }
}
