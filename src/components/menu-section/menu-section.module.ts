import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSectionComponent } from './menu-section.component';
import { SBMenuItemCardComponent } from '@sertao-bar/components/menu-item-card/menu-item-card.component';

@NgModule({
  declarations: [MenuSectionComponent],
  imports: [CommonModule, SBMenuItemCardComponent],
  exports: [MenuSectionComponent],
})
export class MenuSectionModule {}
