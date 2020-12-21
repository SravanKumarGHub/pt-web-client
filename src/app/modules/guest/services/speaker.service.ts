import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speakers } from '../models/speakers';
import { map, filter, take, tap } from "rxjs/operators";
import { interval, Observable, pipe,BehaviorSubject } from "rxjs";
import { SpeakerRegistration } from '../models/speaker-registration';
import { SpeakerRegistrationComponent } from '../pages/speaker-registration/speaker-registration.component';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  apiURL: string = 'https://localhost:44320/api/SpeakerRegistrations';

  speakers:Speakers[]=[];
  private _speakerDetailsBS = new BehaviorSubject<Speakers[]>(this.speakers);  
  getSpeakerDetailsObs$ = this._speakerDetailsBS.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getSpeakers(url?: string):any{
    if(this.apiURL){

       return this.httpClient.get<Speakers[]>(this.apiURL);
    }   
  }
  
  setCurrentSpeakers(value:Speakers[]){
     this.speakers= value;
     this._speakerDetailsBS.next(value);
  }

  public saveSpeakerRegistration(formData:FormData):any{
    if(this.apiURL){
      let header = new HttpHeaders();
      header.set('Access-Control-Allow-Origin', '*');
      debugger
       return this.httpClient.post<SpeakerRegistration>(this.apiURL,formData);
    }   
  }

  // public saveSpeakerRegistration(speakerRegistration:SpeakerRegistration):any{
  //   if(this.apiURL){
  //     let header = new HttpHeaders();
  //     header.set('Access-Control-Allow-Origin', '*');
  //     debugger
  //      return this.httpClient.post<SpeakerRegistration>(this.apiURL,speakerRegistration);
  //   }   
  // }
 
}
