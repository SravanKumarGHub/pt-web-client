import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Events } from '../../models/events';
import { AdminEventsService } from '../../services/admin-events.service';

@Component({
  selector: 'pt-event-registration',
  templateUrl: './pt-event-registration.component.html',
  styleUrls: ['./pt-event-registration.component.css']
})
export class PtEventRegistrationComponent implements OnInit {
  @Input() data:Events[]=[];
  @Input() speakerId:number=-1;
  @Input() hideDescription:boolean= false;
  @Input() hideRegistrationButton:boolean= false;
  constructor(private sanitizer:DomSanitizer,private eventsService:AdminEventsService) { 
   
  }

  ngOnInit(): void {
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
