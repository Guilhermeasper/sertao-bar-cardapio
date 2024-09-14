import {
  Component,
  HostBinding,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, debounce, fromEvent, interval } from 'rxjs';
import { SBMenuSectionComponent } from '@sertao-bar/components/menu-section/menu-section.component';
import { SBMenuItem } from '@sertao-bar/models/menu-item';
import { MenuService } from '@sertao-bar/services/menu/menu.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedSection = '';
  title = 'Cardápio Sertão Bar';
  sections: string[] = [];
  items: Map<string, SBMenuItem[]> = new Map<string, SBMenuItem[]>();
  headerScrollShadow = false;
  categoryListScrollShadow = true;

  @ViewChildren('section') sectionsRef: QueryList<SBMenuSectionComponent> =
    new QueryList<SBMenuSectionComponent>();

  @HostBinding('class.loading') loading = true;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuObservable.subscribe((menu) => {
      if (menu) {
        this.sections = Array.from(menu.keys());
        this.items = menu;
        this.loading = false;
      }
    });
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

  /**
    Handles the scroll event and updates the selected section based on the current scroll position.
    @returns {void}
  */
  private _onScroll(): void {
    let offsetSum = 0;
    const scrollableHeight =
      window.document.body.scrollHeight - window.innerHeight;
    const tolerance = 10;

    if (
      window.scrollY > tolerance &&
      window.scrollY < scrollableHeight - tolerance
    ) {
      this.headerScrollShadow = true;
      this.categoryListScrollShadow = true;
    } else if (window.scrollY <= tolerance) {
      this.headerScrollShadow = false;
      this.categoryListScrollShadow = true;
    } else if (window.scrollY >= scrollableHeight - tolerance) {
      this.headerScrollShadow = true;
      this.categoryListScrollShadow = false;
    }

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
}
