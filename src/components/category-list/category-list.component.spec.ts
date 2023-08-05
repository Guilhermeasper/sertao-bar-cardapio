import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBCategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let component: SBCategoryListComponent;
  let fixture: ComponentFixture<SBCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SBCategoryListComponent],
    });
    fixture = TestBed.createComponent(SBCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
