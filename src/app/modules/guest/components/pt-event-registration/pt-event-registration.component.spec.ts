import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtEventRegistrationComponent } from './pt-event-registration.component';

describe('PtEventRegistrationComponent', () => {
  let component: PtEventRegistrationComponent;
  let fixture: ComponentFixture<PtEventRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtEventRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtEventRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
