import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSliderComponent } from './base-slider.component';

describe('BaseSliderComponent', () => {
  let component: BaseSliderComponent;
  let fixture: ComponentFixture<BaseSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
