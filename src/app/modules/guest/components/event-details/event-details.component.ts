import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../../models/events';
import { AdminEventsService } from '../../services/admin-events.service';

@Component({
  selector: 'pt-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
 
  speakerId:number=-1;
  eventId:number=-1;
  events:Events[]=[];
  constructor( private route: ActivatedRoute,
     private adminEventsService:AdminEventsService,private sanitizer:DomSanitizer) { 
     
  }


  ngOnInit(): void {
    this.route.params.forEach((urlParams) => {
      this.speakerId= urlParams['speakerId'];
      this.eventId=urlParams['eventId'];

    });
    
  this.adminEventsService.getEventsObs$.subscribe((events:Events[]) => {
    this.events = events;
    debugger;
    if(events && events.length > 0){
      events.forEach((event:Events) => {
        if(event.promoPicture.indexOf('data:image/jpg;base64') < 0)
            event.promoPicture = this.format('data:image/jpg;base64',event.promoPicture,','); 
        let url = this.format('https://www.youtube.com/embed/', event.promoVideo,'');
        event.safeUrl = this.getSafeUrl(url);
      });
      this.events = events;
      this.events = this.events.filter(event => event.speakerId ==  +this.speakerId)
    }
    else{
      this.adminEventsService.getEvents().subscribe(
        (events:Events[]) =>
        {
          events.forEach((event:Events) => {
            if(event.promoPicture.indexOf('data:image/jpg;base64') < 0)
               event.promoPicture = this.format('data:image/jpg;base64',event.promoPicture,',');
            debugger
            let url = this.format('https://www.youtube.com/embed/', event.promoVideo,'');
            event.safeUrl = this.getSafeUrl(url);
          });
          this.events = events;
          this.adminEventsService.setCurrentEvents(this.events);
          this.events = this.events.filter(event => event.speakerId ==  +this.speakerId)
          // this.eventsService.setCurrentEvents(this.events);
          console.log( this.events);
        }
    );
    }
  })
  }

  format(string1: string, string2: string, delimiter:string):string {
    if(delimiter =='')
      return `${string1}${string2}`;
    else    
      return `${string1}${delimiter}${string2}`;
  }
  
  transformImage(base64ImageString:string){
    // this.speakerService.getSpeakerDetailsObs$.subscribe(speakers => {
    //    console.log(speakers)
    // })
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64ImageString);
  }
  getSafeUrl(url:string):SafeResourceUrl {
    let safeUrl:SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }
}
