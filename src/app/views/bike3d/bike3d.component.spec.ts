import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bike3dComponent } from './bike3d.component';

describe('Bike3dComponent', () => {
  let component: Bike3dComponent;
  let fixture: ComponentFixture<Bike3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bike3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bike3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
