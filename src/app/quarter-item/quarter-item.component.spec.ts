import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterItemComponent } from './quarter-item.component';

describe('QuarterItemComponent', () => {
  let component: QuarterItemComponent;
  let fixture: ComponentFixture<QuarterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
