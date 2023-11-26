import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@sertao-bar/app/app.component';
import { SBSectionItemsPipe } from '@sertao-bar/pipes/section-items.pipe';
import { SBHeaderComponent } from '@sertao-bar/components/header/header.component';
import { SBMenuSectionComponent } from '@sertao-bar/components/menu-section/menu-section.component';
import { SBCategoryListComponent } from '@sertao-bar/components/category-list/category-list.component';
import { DropdownComponent } from '@sertao-bar/components/dropdown/dropdown.component';

@NgModule({
  declarations: [AppComponent, SBSectionItemsPipe],
  imports: [
    BrowserModule,
    SBHeaderComponent,
    SBMenuSectionComponent,
    SBCategoryListComponent,
    DropdownComponent,
    HttpClientModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
