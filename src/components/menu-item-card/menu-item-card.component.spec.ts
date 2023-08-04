import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBMenuItemCardComponent } from './menu-item-card.component';

describe('MenuItemCardComponent', () => {
  let component: SBMenuItemCardComponent;
  let fixture: ComponentFixture<SBMenuItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBMenuItemCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBMenuItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
