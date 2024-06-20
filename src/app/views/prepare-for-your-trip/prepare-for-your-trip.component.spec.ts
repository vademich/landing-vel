import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareForYourTripComponent } from './prepare-for-your-trip.component';

describe('PrepareForYourTripComponent', () => {
  let component: PrepareForYourTripComponent;
  let fixture: ComponentFixture<PrepareForYourTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepareForYourTripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrepareForYourTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
