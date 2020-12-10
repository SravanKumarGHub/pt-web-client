import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PastEvents } from '../../models/past-events';
import { EventsService } from '../../services/events-service.service';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'pt-recent-events',
  templateUrl: './recent-events.component.html',
  styleUrls: ['./recent-events.component.css']
})
export class RecentEventsComponent implements OnInit {
  expanded:boolean=true;
  pastEvents:PastEvents[]=[];
  constructor( private hostElement: ElementRef,private eventsService: EventsService, private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.eventsService.getPastEvents().subscribe(
      (pastEvents: any) => {
        console.log(pastEvents);
        pastEvents.forEach((pastEvent: PastEvents) => {
          pastEvent.pastEventUrl = this.format('https://www.youtube.com/embed/', pastEvent.pastEventUrl);
          pastEvent.safeUrl = this.getSafeUrl(pastEvent.pastEventUrl);
        });
        this.pastEvents = pastEvents;
        console.log('past events')
        console.log(this.pastEvents);
      }
    );
  }
  format(string1: string, string2: string): string {
    console.log(string1)
    console.log(string2)
    return `${string1}${string2}`;
  }
  expandCollapse(expanded:boolean){
    this.expanded=!expanded;
  }
  getSafeUrl(url:string):SafeResourceUrl {
    let safeUrl:SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }
 
}
