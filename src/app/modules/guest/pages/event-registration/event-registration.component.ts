import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// import { debug } from 'console';
import { EventRegistration } from '../../models/event-registration';
import { Events } from '../../models/events';
import { AdminEventsService } from '../../services/admin-events.service';
import { EventsService } from '../../services/events-service.service';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  eventRegistrationFG: FormGroup;
  eventRegistrationData:EventRegistration;
  submitted = false;
  errorMessage:string=''
  speakerId:number=-1;
  eventId:number=-1;
  events:Events[]=[];
  constructor(private formBuilder: FormBuilder,  private cd: ChangeDetectorRef,private route: ActivatedRoute,
    private eventsService:EventsService,private adminEventsService:AdminEventsService,private sanitizer:DomSanitizer) { 
    this.eventRegistrationFG=this.formBuilder.group({});
    this.eventRegistrationData= <EventRegistration>{};
  }

  ngOnInit(): void {
    this.route.params.forEach((urlParams) => {
      this.speakerId= urlParams['speakerId'];
      this.eventId=urlParams['eventId'];

    });
    this.eventRegistrationFG = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      country: ['', Validators.required],
      phone:['', Validators.required],
      speakerId:[+this.speakerId]
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
  // convenience getter for easy access to form fields
  get f() { return this.eventRegistrationFG.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventRegistrationFG.invalid) {
        return;
    }
    let eventRegistrationData= new FormData();
    eventRegistrationData.append("name", this.eventRegistrationFG.controls['name'].value);
    eventRegistrationData.append("name", this.eventRegistrationFG.controls['name'].value);
    eventRegistrationData.append("email", this.eventRegistrationFG.controls['email'].value);
    eventRegistrationData.append("country", this.eventRegistrationFG.controls['country'].value);
    eventRegistrationData.append("location", this.eventRegistrationFG.controls['location'].value);
    eventRegistrationData.append("phone", this.eventRegistrationFG.controls['phone'].value);
    eventRegistrationData.append("speakerId", this.eventRegistrationFG.controls['speakerId'].value);

    this.eventsService.saveEventRegistration(this.eventRegistrationFG.value).subscribe({
      next: (data:EventRegistration) => {
        debugger
          this.eventRegistrationData = data;
      },
      error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })

    // display form values on success
    // debugger
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.eventRegistrationData, null, 4));
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.eventRegistrationFG.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.eventRegistrationFG.reset();
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
