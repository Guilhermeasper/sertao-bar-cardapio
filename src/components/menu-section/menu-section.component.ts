import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
} from '@angular/core';
import { SBMenuItemCardComponent } from '@sertao-bar/components/menu-item-card/menu-item-card.component';
import { SBMenuItem } from '@sertao-bar/models/menu-item';

@Component({
  selector: 'sb-menu-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SBMenuItemCardComponent],
  template: `
    <section>
      <h1>{{ name }}</h1>
      <div class="container">
        <sb-menu-item-card
          *ngFor="let item of items"
          [item]="item"
        ></sb-menu-item-card>
      </div>
    </section>
  `,
  styles: [
    `
      h1 {
        font-size: var(--headline-large-size);
        font-family: var(--title-large-family);
        font-weight: 700;
        text-align: left;
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--sertao-primary-shade);
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-right: 1rem;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class SBMenuSectionComponent implements OnInit {
  @Input() name: string = '';
  @Input() items?: SBMenuItem[] = [];
  @Input() isCurrent = false;

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}
}
