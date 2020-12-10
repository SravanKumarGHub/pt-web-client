import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { Speakers } from '../../models/speakers';
import { SpeakerService } from '../../services/speaker.service';

@Component({
    selector:'guest-home',
    templateUrl:'./home.page.html',
    styleUrls:['./home.page.css']
})

export class HomePage implements OnInit{
    speakers:Speakers[]=[];
  
    constructor(private speakerService:SpeakerService,private httpClient:HttpClient,private sanitizer:DomSanitizer) {};
    
    ngOnInit(): void {
      
          
    };
 
}