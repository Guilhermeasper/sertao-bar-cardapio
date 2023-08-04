import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@sertao-bar/app/app-routing.module';
import { AppComponent } from '@sertao-bar/app/app.component';
import { MenuSectionModule } from '@sertao-bar/components/menu-section/menu-section.module';
import { SectionItemsPipe } from '@sertao-bar/pipes/section-items.pipe';
import { SBHeaderComponent } from '@sertao-bar/components/header/header.component';

@NgModule({
  declarations: [AppComponent, SectionItemsPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SBHeaderComponent,
    MenuSectionModule,
    HttpClientModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
