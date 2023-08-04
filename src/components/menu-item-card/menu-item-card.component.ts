import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MenuItem } from 'src/models/menu-item';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCardComponent implements OnInit {
  @Input() item!: MenuItem;

  constructor() {}

  ngOnInit(): void {}
}
