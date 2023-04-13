import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSectionComponent } from './menu-section.component';
import { MenuItemCardModule } from '../menu-item-card/menu-item-card.module';

@NgModule({
  declarations: [MenuSectionComponent],
  imports: [CommonModule, MenuItemCardModule],
  exports: [MenuSectionComponent],
})
export class MenuSectionModule {}
