import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SBChipComponent } from '../chip/chip.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SBChipComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
