import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'ul[sb-dropdown-menu]',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  template: ` <ng-template
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="isOpen"
    [cdkConnectedOverlayOffsetY]="2"
    [cdkConnectedOverlayWidth]="trigger.elementRef.nativeElement.clientWidth"
  >
    <ul>
      <ng-content></ng-content>
    </ul>
  </ng-template>`,
  styles: [
    `
      ul {
        width: 100%;
        border: solid 1px #ccc;
        border-radius: 5px;
        background: #fff;
        padding: 10px;
        margin: 0;
      }
    `,
  ],
})
export class DropdownMenuComponent {
  @Input() trigger!: CdkOverlayOrigin;

  @HostListener('click')
  clickInside($event: any) {
    console.log('clickInside');
    $event.stopPropagation();
  }

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
