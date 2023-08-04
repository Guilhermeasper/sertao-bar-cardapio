import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemCardModule } from '../components/menu-item-card/menu-item-card.module';
import { HeaderModule } from '../components/header/header.module';
import { MenuSectionModule } from '../components/menu-section/menu-section.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionItemsPipe } from '../pipes/section-items.pipe';

@NgModule({
  declarations: [AppComponent, SectionItemsPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuItemCardModule,
    HeaderModule,
    MenuSectionModule,
    HttpClientModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
