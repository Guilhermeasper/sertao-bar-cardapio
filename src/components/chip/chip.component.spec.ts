import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: SBChipComponent;
  let fixture: ComponentFixture<SBChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBChipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
