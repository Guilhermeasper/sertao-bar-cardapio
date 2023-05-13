import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {},
})
export class HeaderComponent implements OnInit {
  @Output() sectionChanged: EventEmitter<string> = new EventEmitter();

  @Input() menuLoaded = false;
  @Input() selectedSection = '';
  @Input() sections: string[] = [];

  @ViewChild('menu') menu: ElementRef<HTMLElement> | undefined;

  constructor() {}

  ngOnInit(): void {}

  changeSection(event: string) {
    this.sectionChanged.emit(event);
  }
}
