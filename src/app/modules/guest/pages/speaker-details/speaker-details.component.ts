import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpeakerService } from '../../services/speaker.service';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { Speakers } from '../../models/speakers';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'pt-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  speakers:Speakers[]=[];

  speakerDetail:Speakers ={id : 0,name : '',email : '', gender :'', age:0,topic:'',country : '',theme : '',
    oneLineProfile: '',phone :'',profilePicture : '',description :'',isApproved : false };

  speakerId:number=-1;

  constructor(private speakerService:SpeakerService,private httpClient:HttpClient,private sanitizer:DomSanitizer,
    private location: Location,private navigation: NavigationService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      debugger;
      this.speakerId =+params['speakerId'];
    });

    this.speakerService.getSpeakerDetailsObs$.subscribe(speakers => {
      debugger;
      this.speakers = speakers;
      if(speakers && speakers.length > 0){
        this.speakerDetail = this.speakers.filter(
          speaker => speaker.id === this.speakerId)[0];
      }
      else{
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
    
      console.log(this.speakerDetail);
    });

  }
  goBack(){
    this.location.back(); // <-- go back to previous location on cancel
  }
  backWithLocation() {
    this.location.back();
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
