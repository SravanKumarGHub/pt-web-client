import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Events } from '../../models/events';
import { AdminEventsService } from '../../services/admin-events.service';
import { EventsService } from '../../services/events-service.service';

@Component({
  selector: 'pt-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  expanded: boolean = true;
  events: Events[] = [];


  constructor(private eventsService: AdminEventsService, private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      (events: any) => {
        events.forEach((event: Events) => {
          event.promoPicture = this.format('data:image/jpg;base64', event.promoPicture);
        });
        this.events = events;
        this.eventsService.setCurrentEvents(this.events);
        console.log(this.events);
      }
    );
  }
  format(string1: string, string2: string): string {
    return `${string1},${string2}`;
  }
  expandCollapse(expanded: boolean) {

    this.expanded = !expanded;
  }
  transformImage(base64ImageString: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64ImageString);
  }
}
