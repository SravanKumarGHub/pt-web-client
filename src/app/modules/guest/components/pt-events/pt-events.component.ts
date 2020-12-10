import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Events } from '../../models/events';
import { AdminEventsService } from '../../services/admin-events.service';

@Component({
  selector: 'pt-events',
  templateUrl: './pt-events.component.html',
  styleUrls: ['./pt-events.component.css']
})
export class PtEventsComponent implements OnInit {
  events:Events[]=[];

  constructor(private eventsService:AdminEventsService,private httpClient:HttpClient,private sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      (events:any) =>
      {
        events.forEach((event:Events) => {
          event.promoPicture = this.format('data:image/jpg;base64',event.promoPicture);
        });
        this.events = events;
        this.eventsService.setCurrentEvents(this.events);
        console.log( this.events);
      }
  );
  }
  format(string1: string, string2: string):string {
    return `${string1},${string2}`;
}
transformImage(base64ImageString:string){
  // this.speakerService.getSpeakerDetailsObs$.subscribe(speakers => {
  //    console.log(speakers)
  // })
  return this.sanitizer.bypassSecurityTrustResourceUrl(base64ImageString);
}
}
