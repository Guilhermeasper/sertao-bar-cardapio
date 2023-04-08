import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
