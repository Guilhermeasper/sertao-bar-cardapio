import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.sticky]': 'sticky',
  },
})
export class HeaderComponent implements OnInit {
  @Output() sectionChanged: EventEmitter<string> = new EventEmitter();

  @Input() selectedSection = '';
  @Input() sections: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  changeSection(event: string) {
    this.sectionChanged.emit(event);
  }
}
