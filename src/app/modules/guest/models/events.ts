import { SafeResourceUrl } from "@angular/platform-browser";

export interface Events {
    id: number;
    eventName: string;
    promoVideo: string;
    cauroselPicture: string;
    descrption: string;
    eventTime: Date;
    eventDate:string;
    promoPicture : string;
    createdDate:Date;
    speakerId:number;
    safeUrl:SafeResourceUrl
  }