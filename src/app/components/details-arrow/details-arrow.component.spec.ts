import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArrowComponent } from './details-arrow.component';

describe('DetailsArrowComponent', () => {
  let component: DetailsArrowComponent;
  let fixture: ComponentFixture<DetailsArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
