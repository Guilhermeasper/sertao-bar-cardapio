import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  fontSize = 58;
  fontSizeBar = 32;

  top = 0;

  get fontSizePx(): string {
    return `${this.fontSize}px`;
  }

  get fontSizeBarPx(): string {
    return `${this.fontSizeBar}px`;
  }
  get topPx(): string {
    return `${this.top}px`;
  }
  get height(): string {
    return `${this.top < 132 ? this.fixedHeight - this.top : 60}px`;
  }
  readonly fixedHeight = 192;
  sticky: boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.top = window.scrollY < 132 ? window.scrollY : 132;
    this.fontSize = 58 - (30 / 132) * this.top;
    this.fontSizeBar = 32 - (16 / 132) * this.top;
    this.sticky = window.scrollY >= 132;
    this.changeDetectorRef.markForCheck();
    console.log(this.top, this.height);
  }
}
