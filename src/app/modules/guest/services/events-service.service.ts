import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speakers } from '../models/speakers';
import { map, filter, take, tap } from "rxjs/operators";
import { interval, pipe } from "rxjs";
import { PastEvents } from '../models/past-events';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  pastEvents:PastEvents[]=[];
  apiURL: string = 'https://localhost:44320/api/pastevents';
  constructor(private httpClient: HttpClient) {}
  
  getPastEvents():any{
    if(this.apiURL){
      return this.httpClient.get<PastEvents[]>(this.apiURL);
   }   
  }
  
}
