import { DatePipe } from '@angular/common';
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
  filteredEvents:Events[]=[];
  startDate:string='';
  endDate:string='';
  isValidDate:boolean= true;
  constructor(private eventsService:AdminEventsService,private httpClient:HttpClient,private sanitizer:DomSanitizer,
    private datePipe: DatePipe) { }
 
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      (events:any) =>
      {
        events.forEach((event:Events) => {
          if(event.promoPicture.indexOf('data:image/jpg;base64') < 0)
              event.promoPicture = this.format('data:image/jpg;base64',event.promoPicture); 
              event.eventDate = this.datePipe.transform(event.eventTime, 'yyyy-MM-dd')|| ''; 
        });
        this.events = events;
        this.filteredEvents = this.events;
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
filterData():Events[]{
  let areDatesValid = this.validateDates(this.datePipe.transform(this.startDate, 'yyyy-MM-dd')|| '',this.datePipe.transform(this.endDate, 'yyyy-MM-dd')|| '');
  if(areDatesValid){
    var startDate:Date = new Date(this.datePipe.transform(this.startDate, 'yyyy-MM-dd')|| '');
    var endDate:Date = new Date(this.datePipe.transform(this.endDate, 'yyyy-MM-dd')|| '');
  
    var filteredEvents = this.events.filter(function (event) {
    console.log(event.eventDate)
     return  new Date(event.eventDate) >= startDate && new Date(event.eventDate) <= endDate
    });
    console.log('filteredData')
    console.log(filteredEvents)
    this.filteredEvents = filteredEvents;
    return this.filteredEvents;
  }
  else
    return this.events;
 
}

validateDates(sDate: string, eDate: string){
  this.isValidDate = true;
  if((sDate == null || eDate ==null) || (sDate == "" || eDate =="")){
    alert('Start date and end date are required.')
    // this.error={isError:true,errorMessage:'Start date and end date are required.'};
    this.isValidDate = false;
  }

  if((sDate != null && eDate !=null) && (eDate) < (sDate)){
    alert('End date should be grater then start date.')
    // this.error={isError:true,errorMessage:'End date should be grater then start date.'};
    this.isValidDate = false;
  }
  return this.isValidDate;
}


}
