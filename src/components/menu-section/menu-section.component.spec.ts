import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBMenuSectionComponent } from './menu-section.component';

describe('MenuSectionComponent', () => {
  let component: SBMenuSectionComponent;
  let fixture: ComponentFixture<SBMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBMenuSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
