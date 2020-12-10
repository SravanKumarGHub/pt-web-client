import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { SpeakerService } from '../../services/speaker.service';

@Component({
    selector:'speakers-list',
    templateUrl:'./speakers.page.html'
})

export class SpeakersPage{
    constructor(private speakerService:SpeakerService,private httpClient:HttpClient,private sanitizer:DomSanitizer) {};
    
    ngOnInit(): void {
      
          
    };
}