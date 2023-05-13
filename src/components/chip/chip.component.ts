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
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'active',
  },
})
export class ChipComponent implements OnInit {
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
