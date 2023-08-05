import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from '@angular/core';
import { debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'sb-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'active',
  },
  standalone: true,
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        padding: 1.5rem;
        background-color: var(--sertao-secondary);
        color: var(--sertao-primary-shade);
        border-radius: 4rem;
        align-items: center;
        height: 2rem;
        cursor: pointer;
        border: none;
        white-space: pre;
        font-family: var(--title-large-family);
        font-size: var(--headline-small-size);
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        -webkit-tap-highlight-color: transparent;

        &.active {
          background-color: var(--sertao-secondary-shade);
          color: var(--sertao-light);
        }
      }
    `,
  ],
})
export class SBChipComponent implements OnInit {
  @Output() stateChange: EventEmitter<string> = new EventEmitter();

  @Input() name: string = '';

  @Input() active = false;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private window: Window
  ) {}

  ngOnInit(): void {
    fromEvent(this.window, 'scroll')
      .pipe(debounce(() => interval(150)))
      .subscribe(() => this._onScroll());
  }

  private _onScroll(): void {
    if (this.active) {
      this._scrollIntoView();
    }
  }

  private _scrollIntoView(): void {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }

  @HostListener('click')
  onClick(): void {
    this.active = true;
    this._scrollIntoView();
    this.stateChange.emit(this.name);
  }
}
