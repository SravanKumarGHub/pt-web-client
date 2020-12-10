import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSpeakersComponent } from './recent-speakers.component';

describe('RecentSpeakersComponent', () => {
  let component: RecentSpeakersComponent;
  let fixture: ComponentFixture<RecentSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
