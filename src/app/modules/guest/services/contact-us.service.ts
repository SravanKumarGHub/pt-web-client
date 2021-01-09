import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, filter, take, tap } from "rxjs/operators";
import { interval, Observable, pipe,BehaviorSubject } from "rxjs";
import { ContactData } from '../models/contact-details';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  apiURL: string = 'https://localhost:44320/api/ContactData';

  contacts:ContactData[]=[];
  private _contactDetailsBS = new BehaviorSubject<ContactData[]>(this.contacts);  
  getContactDetailsObs$ = this._contactDetailsBS.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getContactDetails(url?: string):any{
    if(this.apiURL){

       return this.httpClient.get<ContactData[]>(this.apiURL);
    }   
  }
  
//   setCurrentSpeakers(value:Speakers[]){
//      this.speakers= value;
//      this._speakerDetailsBS.next(value);
//   }

  public saveContactDetails(contacts:ContactData):any{
    if(this.apiURL){
      let header = new HttpHeaders();
      header.set('Access-Control-Allow-Origin', '*');
      debugger
       return this.httpClient.post<ContactData>(this.apiURL,contacts);
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
