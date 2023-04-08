import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemCardModule } from '../components/menu-item-card/menu-item-card.module';
import { HeaderModule } from '../components/header/header.module';
import { ChipModule } from 'src/components/chip/chip.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuItemCardModule,
    HeaderModule,
    ChipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
