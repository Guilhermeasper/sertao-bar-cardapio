import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
  template: ` <img src="../../assets/horizontal-light.svg" /> `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        z-index: 10;
        position: relative;
        position: fixed;
        height: 8vh;
        background-color: var(--sertao-light);
        transition-property: height, background-color;
        transition-duration: 0.75s;
        transition-timing-function: ease-out;
        justify-content: center;
        align-items: center;

        &.scroll-shadow {
          --shadow-color: #65250b0b;

          box-shadow: 1px 2px 2px var(--shadow-color),
            2px 4px 4px var(--shadow-color), 3px 6px 6px var(--shadow-color);
        }

        &.loading {
          background-color: transparent;
          -webkit-animation: breathing 3s ease infinite;
          animation: breathing 3s ease infinite;
          height: 100%;
        }

        img {
          height: 2rem;
        }
      }

      @-webkit-keyframes breathing {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }

        60% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }

        100% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }

      @keyframes breathing {
        0% {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }

        60% {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }

        100% {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
    `,
  ],
})
export class SBHeaderComponent {
  @Input() @HostBinding('class.scroll-shadow') scrollShadow = false;
  @Input() @HostBinding('class.loading') loading = true;
}
