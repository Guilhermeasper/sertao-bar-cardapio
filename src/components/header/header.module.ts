import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ChipModule } from '../chip/chip.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ChipModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
