import { SBChipComponent } from '@sertao-bar/components/chip/chip.component';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-category-list',
  standalone: true,
  imports: [CommonModule, SBChipComponent],
  template: `
    <div *ngIf="menuLoaded" #menu class="menu-select">
      <sb-chip
        *ngFor="let item of sections"
        [name]="item"
        [active]="item === selectedSection"
        (stateChange)="changeSection($event)"
        >{{ item }}</sb-chip
      >
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

      :host {
        &.scroll-shadow .menu-select {
          --shadow-color: #65250b0b;

          box-shadow: 1px -2px 2px var(--shadow-color),
            2px -4px 4px var(--shadow-color), 3px -6px 6px var(--shadow-color);
        }
      }

      .menu-select {
        display: flex;
        position: fixed;
        background-color: var(--sertao-light);
        bottom: 0;
        left: 0;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        height: 4rem;
        padding: 0 0.5rem;

        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        z-index: 20;

        :first-child {
          margin-left: 2rem;
        }

        :last-child {
          margin-right: 2rem;
        }

        &::-webkit-scrollbar,
        &::-webkit-scrollbar-button,
        &::-webkit-scrollbar-track-piece,
        &::-webkit-scrollbar-track,
        &::-webkit-scrollbar-thumb {
          height: 0;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SBCategoryListComponent {
  @Output() sectionChanged: EventEmitter<string> = new EventEmitter();

  @Input() menuLoaded = false;
  @Input() sections: string[] = [];
  @Input() selectedSection = '';

  @Input() @HostBinding('class.scroll-shadow') scrollShadow = true;

  changeSection(section: string) {
    this.selectedSection = section;
    this.sectionChanged.emit(section);
  }
}
