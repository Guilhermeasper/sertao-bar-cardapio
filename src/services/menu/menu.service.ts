import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, Observable, of } from 'rxjs';
import { SBSpreadsheetResponse } from '@sertao-bar/models/spreadsheet-response';
import { environment } from '@sertao-bar/environments/environment';
import { SBMenuItem } from '@sertao-bar/models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuObservable: Observable<Map<string, SBMenuItem[]> | null>;
  private menuSubject: BehaviorSubject<Map<string, SBMenuItem[]> | null> =
    new BehaviorSubject<Map<string, SBMenuItem[]> | null>(null);
  apiUrl: string = environment.api_url;
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) {
    this.menuObservable = this.menuSubject.asObservable();
    this.loadMenu();
  }

  getSections(): Observable<SBSpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}sections?alt=json&key=${this.apiKey}`;
    return this.http.get<SBSpreadsheetResponse>(requestUrl);
  }

  getMenuItems(): Observable<SBSpreadsheetResponse> {
    const requestUrl = `${this.apiUrl}data?alt=json&key=${this.apiKey}`;
    return this.http.get<SBSpreadsheetResponse>(requestUrl);
  }

  async loadMenu(): Promise<void> {
    const sections = (await firstValueFrom(this.getSections())).values[0];
    const menuItems = (await firstValueFrom(this.getMenuItems())).values;
    const sectionItemsMap = new Map<string, SBMenuItem[]>();
    sections.forEach((section) => {
      sectionItemsMap.set(
        section,
        this._parseItems(menuItems.filter((item) => item[2] === section))
      );
    });
    this.menuSubject.next(sectionItemsMap);
  }

  private _parseItems(itemArray: string[][]): SBMenuItem[] {
    const items: SBMenuItem[] = [];
    itemArray.forEach((item) => {
      items.push({
        title: this._parseItem(item[0]),
        price: this._parseItem(item[1]),
        category: this._parseItem(item[2]),
        type: this._parseItem(item[3]),
        description: this._parseItem(item[4]),
        image: this._parseItem(item[5]),
      } as SBMenuItem);
    });
    return items;
  }

  private _parseItem(item: string): string | null {
    return item != '-' ? item : null;
  }
}
