import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtCarouselComponent } from './pt-carousel.component';

describe('PtCarouselComponent', () => {
  let component: PtCarouselComponent;
  let fixture: ComponentFixture<PtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
