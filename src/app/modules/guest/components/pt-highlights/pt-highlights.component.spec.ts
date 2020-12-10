import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtHighlightsComponent } from './pt-highlights.component';

describe('PtHighlightsComponent', () => {
  let component: PtHighlightsComponent;
  let fixture: ComponentFixture<PtHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
