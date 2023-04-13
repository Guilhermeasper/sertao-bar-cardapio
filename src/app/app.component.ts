import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { HeaderComponent } from 'src/components/header/header.component';
import { MenuSectionComponent } from 'src/components/menu-section/menu-section.component';
import { MenuItem } from 'src/models/menu-item';
import { SpreadsheetResponse } from 'src/models/spreadsheet-response';
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
  items: Array<string[]> = [];
  itemsSubject = new Subject<string[]>();

  @ViewChildren('section') sectionsRef: QueryList<MenuSectionComponent> =
    new QueryList<MenuSectionComponent>();

  @ViewChild(HeaderComponent) headerRef: HeaderComponent | undefined;

  constructor(private spreadSheetService: SpreadsheetService) {}

  onScroll(): void {
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
        this.headerRef?.menu?.nativeElement.children[index].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
        });
      }
    }
  }

  ngOnInit(): void {
    this.sectionsSubject.subscribe((sections) => {
      this.sections = sections;
      this.selectedSection = this.sections[0];
    });

    this.spreadSheetService.getSections().subscribe((sections) => {
      this.sectionsSubject.next(sections.values[0]);
    });

    this.spreadSheetService.getMenuItems().subscribe((items) => {
      this.items = items.values;
      fromEvent(window, 'scroll')
        .pipe()
        .subscribe(() => this.onScroll());
    });
  }

  sectionItems(section: string) {
    return this.items
      .filter((item) => item.includes(section))
      .map((item) => {
        return {
          title: item[0],
          price: item[1],
          category: item[2] != '-' ? item[2] : '',
          type: item[3] != '-' ? item[3] : '',
          description: item[4] != '-' ? item[4] : '',
        } as MenuItem;
      });
  }

  onSectionChange(event: string) {
    this.selectedSection = event;
    this.sectionsRef.forEach((section) => {
      if (section.name === event) {
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
}
