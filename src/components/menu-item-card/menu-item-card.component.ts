import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  HostListener,
  inject,
  ElementRef,
} from '@angular/core';
import { SBMenuItem } from '@sertao-bar/models/menu-item';

@Component({
  selector: 'sb-menu-item-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-container" *ngIf="item.image">
      <img [attr.src]="item.image" />
    </div>
    <div class="description-container">
      <div class="description-header">
        <span class="title">{{ item.title }}</span>
        <span class="price"
          ><span class="price-sign">R$</span> {{ item.price }}</span
        >
      </div>
      <span class="description"
        >{{ item.type }} {{ item.type && item.description ? '•' : '' }}
        {{ item.description }}</span
      >
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: var(--sertao-primary-shade);
        border-top-right-radius: 2.5rem;
        height: 6rem;

        &:focus-visible {
          outline: none;
          -webkit-box-shadow: 0px 0px 0px 2px var(--sertao-light), 0px 0px 0px 4px var(--sertao-primary-shade);
          box-shadow: 0px 0px 0px 2px var(--sertao-light), 0px 0px 0px 4px var(--sertao-primary-shade);
        }
      }

      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: var(--sertao-primary);
        width: 5rem;
        height: 6rem;
        margin-left: 1rem;

        img {
          width: 5rem;
          height: 6rem;
          object-fit: cover;
        }
      }

      .description-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        gap: 0.5rem;
        padding: 1rem;
        padding-left: 0.5rem;

        color: var(--sertao-light);

        .description-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .title {
            font-family: var(--display-large-family);
            font-size: var(--title-medium-size);
            font-weight: 400;
            max-width: 70%;
          }

          .price {
            font-family: var(--display-large-family);
            font-size: var(--title-large-size);
            font-weight: 400;

            &-sign {
              font-size: var(--label-small-size);
            }
          }
        }

        .description {
          font-family: var(--label-large-family);
          font-size: var(--body-medium-size);
          font-weight: 300;
        }
      }
    `,
  ],
})
export class SBMenuItemCardComponent implements OnInit {
  @Input() item!: SBMenuItem;

  @HostBinding('tabindex') tabindex = 0;

  @HostListener('focus') onFocus() {
    this._elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  private _elementRef = inject(ElementRef);

  constructor() {}

  ngOnInit(): void {}
}
