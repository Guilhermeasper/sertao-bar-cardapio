import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { SBChipComponent } from '@sertao-bar/components/chip/chip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SBChipComponent],
  standalone: true,
  template: `
    <div class="name">
      <img src="../../assets/horizontal-light.svg" />
    </div>
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
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        z-index: 10;
        position: relative;
        position: fixed;
        background-color: var(--sertao-light);

        box-shadow: 0 4px 12px 0 #0000001a;
      }

      .name {
        height: 4rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 2rem;
        }
      }

      .menu-select {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        height: 3.5rem;
        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        padding-bottom: 1rem;
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
})
export class SBHeaderComponent implements OnInit {
  @Output() sectionChanged: EventEmitter<string> = new EventEmitter();

  @Input() menuLoaded = false;
  @Input() selectedSection = '';
  @Input() sections: string[] = [];

  @ViewChild('menu') menu: ElementRef<HTMLElement> | undefined;

  constructor() {}

  ngOnInit(): void {}

  changeSection(event: string) {
    this.sectionChanged.emit(event);
  }
}
