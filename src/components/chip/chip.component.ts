import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  Output,
  EventEmitter,
  Input,
  HostBinding,
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
  @Output() stateChange: EventEmitter<string> = new EventEmitter();

  @Input() name: string = '';

  @Input() active: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  onClick(): void {
    this.active = true;
    this.stateChange.emit(this.name);
  }
}
