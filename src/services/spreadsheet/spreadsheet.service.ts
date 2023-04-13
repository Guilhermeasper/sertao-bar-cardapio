import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpreadsheetResponse } from 'src/models/spreadsheet-response';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  apiUrl: string = environment.api_url;
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) {}

  getSections(): Observable<SpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}sections?alt=json&key=${this.apiKey}`;
    return this.http.get<SpreadsheetResponse>(requestUrl);
  }

  getMenuItems(): Observable<SpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}data?alt=json&key=${this.apiKey}`;
    return this.http.get<SpreadsheetResponse>(requestUrl);
  }
}
