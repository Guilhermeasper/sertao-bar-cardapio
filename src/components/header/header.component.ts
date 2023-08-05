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
  template: `
    <div class="name">
      <img src="../../assets/horizontal-light.svg" />
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        z-index: 10;
        position: relative;
        position: fixed;
        height: 8vh;
        background-color: var(--sertao-light);

        &.scroll-shadow {
          --shadow-color: #65250b0b;

          box-shadow: 1px 2px 2px var(--shadow-color),
            2px 4px 4px var(--shadow-color), 3px 6px 6px var(--shadow-color);
        }
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
    `,
  ],
})
export class SBHeaderComponent {
  @Input() @HostBinding('class.scroll-shadow') scrollShadow = false;
}
