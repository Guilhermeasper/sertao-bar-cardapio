import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemCardModule } from '../components/menu-item-card/menu-item-card.module';
import { HeaderModule } from '../components/header/header.module';
import { ChipModule } from 'src/components/chip/chip.module';
import { MenuSectionModule } from '../components/menu-section/menu-section.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuItemCardModule,
    HeaderModule,
    ChipModule,
    MenuSectionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
