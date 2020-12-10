import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Speakers } from '../../models/speakers';
import { SpeakerService } from '../../services/speaker.service';

@Component({
  selector: 'pt-recent-speakers',
  templateUrl: './recent-speakers.component.html',
  styleUrls: ['./recent-speakers.component.css']
})

export class RecentSpeakersComponent implements OnInit {

  expanded:boolean=true;
  speakers:Speakers[]=[];

  constructor(private speakerService:SpeakerService,private httpClient:HttpClient,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
   
    this.speakerService.getSpeakers().subscribe(
      (speakers:any) =>
      {
        speakers.forEach((speaker:Speakers) => {
          speaker.profilePicture = this.format('data:image/jpg;base64',speaker.profilePicture);
        });
        this.speakers = speakers;
        this.speakerService.setCurrentSpeakers(this.speakers);
        console.log(this.speakers);
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

expandCollapse(expanded:boolean){

  this.expanded=!expanded;
}
}
