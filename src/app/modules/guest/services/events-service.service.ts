import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speakers } from '../models/speakers';
import { map, filter, take, tap } from "rxjs/operators";
import { interval, pipe } from "rxjs";
import { PastEvents } from '../models/past-events';
import { EventRegistration } from '../models/event-registration';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  pastEvents:PastEvents[]=[];
  apiURL: string = 'https://localhost:44320/api/pastevents';
  eventApiURI:string="https://localhost:44320/api/EventRegistrations";
  constructor(private httpClient: HttpClient) {}
  
  getPastEvents():any{
    if(this.apiURL){
      return this.httpClient.get<PastEvents[]>(this.apiURL);
   }   
  }

  saveEventRegistration(formData:FormData):any{
    if(this.eventApiURI){
      let header = new HttpHeaders();
      header.set('Access-Control-Allow-Origin', '*');
      debugger
       return this.httpClient.post<EventRegistration>(this.eventApiURI,formData);
    }   
  }
  
}
