import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'li[sb-dropdown-item]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>>`,
  styles: [
    `
      :host {
        padding: 1rem;

        cursor: pointer;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: var(--sertao-secondary);
        }
      }
    `,
  ],
})
export class DropdownItemComponent {
  @HostListener('click')
  clickInside($event: any) {
    console.log('clickInside');
    $event.stopPropagation();
  }

  @HostBinding('class') class = 'sb-dropdown-item';
}
