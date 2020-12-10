import { SafeResourceUrl } from '@angular/platform-browser';


export interface PastEvents {
    id: number;
    pastEventUrl: string;
    createdDate:Date;
    safeUrl:SafeResourceUrl
  }