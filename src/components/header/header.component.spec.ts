import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: SBHeaderComponent;
  let fixture: ComponentFixture<SBHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
