import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';

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
  active: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(event: Event): void {
    this.active = !this.active;
  }
}
