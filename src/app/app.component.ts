import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, debounce, fromEvent, interval, takeUntil } from 'rxjs';
import { HeaderComponent } from 'src/components/header/header.component';
import { MenuSectionComponent } from 'src/components/menu-section/menu-section.component';
import { MenuItem } from 'src/models/menu-item';
import { SpreadsheetService } from 'src/services/spreadsheet/spreadsheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedSection = '';
  title = 'Cardápio Sertão Bar';
  sections: string[] = [];
  sectionsSubject = new Subject<string[]>();
  items: Map<string, MenuItem[]> = new Map<string, MenuItem[]>();
  itemsSubject = new Subject<Map<string, MenuItem[]>>();

  @ViewChildren('section') sectionsRef: QueryList<MenuSectionComponent> =
    new QueryList<MenuSectionComponent>();

  @ViewChild(HeaderComponent) headerRef: HeaderComponent | undefined;

  constructor(private spreadSheetService: SpreadsheetService) {}

  ngOnInit(): void {
    this.sectionsSubject.subscribe((sections) => {
      this.sections = sections;
      this.selectedSection = this.sections[0];
      this._loadItems();
    });

    this.itemsSubject.subscribe((items) => {
      this.items = items;
    });

    this._loadSections();
    fromEvent(window, 'scroll')
      .pipe(debounce(() => interval(100)))
      .subscribe(() => this._onScroll());
  }

  /**
    Handles the section change event and updates the selected section while scrolling to the selected section smoothly.
    @param {string} sectionName - The name of the section that was selected.
    @returns {void}
  */
  onSectionChange(sectionName: string): void {
    this.selectedSection = sectionName;
    this.sectionsRef.forEach((section) => {
      if (section.name === sectionName) {
        const offset = -120;
        const y =
          section.elementRef.nativeElement.getBoundingClientRect().top +
          window.pageYOffset +
          offset;
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    });
  }

  private _loadSections(): void {
    this.spreadSheetService.getSections().subscribe((sections) => {
      this.sectionsSubject.next(sections.values[0]);
    });
  }

  private _loadItems(): void {
    this.spreadSheetService.getMenuItems().subscribe((items) => {
      const itemsArray = items.values;
      const sectionItemsMap = new Map<string, MenuItem[]>();
      this.sections.forEach((section) => {
        sectionItemsMap.set(
          section,
          this._parseItems(itemsArray.filter((item) => item[2] === section))
        );
      });
      this.itemsSubject.next(sectionItemsMap);
    });
  }

  private _parseItems(itemArray: string[][]): MenuItem[] {
    const items: MenuItem[] = [];
    itemArray.forEach((item) => {
      items.push({
        title: this._parseItem(item[0]),
        price: this._parseItem(item[1]),
        category: this._parseItem(item[2]),
        type: this._parseItem(item[3]),
        description: this._parseItem(item[4]),
        image: this._parseItem(item[5]),
      } as MenuItem);
    });
    return items;
  }

  /**
    Handles the scroll event and updates the selected section based on the current scroll position.
    @returns {void}
  */
  private _onScroll(): void {
    let offsetSum = 0;
    for (let index = 0; index < this.sectionsRef.length; index++) {
      const element = this.sectionsRef.get(index);
      const elementSize = 48 + (element?.items?.length ?? 0) * 112;
      offsetSum += elementSize;

      if (
        window.scrollY < offsetSum &&
        window.scrollY > offsetSum - elementSize - 40
      ) {
        this.selectedSection = element?.name ?? this.sections[0];
      }
    }
  }

  private _parseItem(item: string): string | null {
    return item != '-' ? item : null;
  }
}
