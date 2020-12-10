import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speakers } from '../models/speakers';
import { map, filter, take, tap } from "rxjs/operators";
import { interval, Observable, pipe,BehaviorSubject } from "rxjs";
import { Events } from '../models/events';
 
@Injectable({
  providedIn: 'root'
})
export class AdminEventsService {

  apiURL: string = 'https://localhost:44320/api/AdminEvents';

  events:Events[]=[];
  private _eventsBS = new BehaviorSubject<Events[]>(this.events);  
  getEventsObs$ = this._eventsBS.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getEvents(url?: string):any{
    if(this.apiURL){
       return this.httpClient.get<Events[]>(this.apiURL);
    }   
  }
  
  setCurrentEvents(value:Events[]){
     this.events= value;
     this._eventsBS.next(value);
  }
 
}
