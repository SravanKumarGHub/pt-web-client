import { TestBed } from '@angular/core/testing';

import { EventsService } from './events-service.service';

describe('EventsServiceService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
