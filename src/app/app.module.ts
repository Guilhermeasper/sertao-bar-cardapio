import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@sertao-bar/app/app.component';
import { SBSectionItemsPipe } from '@sertao-bar/pipes/section-items.pipe';
import { SBMenuSectionComponent } from '@sertao-bar/components/menu-section/menu-section.component';
import { SBCategoryListComponent } from '@sertao-bar/components/category-list/category-list.component';
import { MenuService } from '@sertao-bar/services/menu/menu.service';

@NgModule({
  declarations: [AppComponent, SBSectionItemsPipe],
  imports: [
    BrowserModule,
    SBMenuSectionComponent,
    SBCategoryListComponent,
    HttpClientModule,
  ],
  providers: [
    { provide: Window, useValue: window },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      multi: true,
      deps: [MenuService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
