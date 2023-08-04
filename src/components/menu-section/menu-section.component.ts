import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
} from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSectionComponent implements OnInit {
  @Input() name: string = '';
  @Input() items?: MenuItem[] = [];
  @Input() isCurrent = false;

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}
}
