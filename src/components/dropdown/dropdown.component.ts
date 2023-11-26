import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu.component';

@Component({
  selector: 'sb-dropdown',
  standalone: true,
  imports: [CommonModule, OverlayModule, DropdownMenuComponent],
  template: `
    <input
      type="text"
      (focus)="open()"
      (click)="clickInside($event)"
      cdkOverlayOrigin
      #trigger="cdkOverlayOrigin"
    />
    <ul sb-dropdown-menu #dropdown [trigger]="trigger">
      <ng-content></ng-content>
    </ul>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        margin: 0.5rem;
        box-sizing: border-box;
      }

      input {
        width: 100%;
        height: 2rem;
        border: 1px solid var(--sertao-primary);
        background-color: transparent;
        color: var(--sertao-primary);
        font-family: var(--title-large-family);
        font-size: var(--headline-small-size);
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        padding: 1rem;
        outline: none;
      }
    `,
  ],
})
export class DropdownComponent {
  @ViewChild('dropdown') dropdown!: DropdownMenuComponent;

  @HostListener('click')
  clickInside($event: any) {
    $event.stopPropagation();
  }

  @HostListener('document:click')
  clickOutside() {
    // this.close();
  }

  open() {
    this.dropdown.open();
  }

  close() {
    this.dropdown.close();
  }
}
