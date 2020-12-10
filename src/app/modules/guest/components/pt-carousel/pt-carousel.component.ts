import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-pt-carousel',
  templateUrl: './pt-carousel.component.html',
  styleUrls: ['./pt-carousel.component.css']
})
export class PtCarouselComponent implements OnInit {

  constructor() { }
  timeInterval:number = 3000;
  color:string="white";
  proportionCount:number=25;
  slideCount:number=6;
  slides = [{'image': '../assets/carousel_images/image13.jpg'}, {'image': '../assets/carousel_images/image9.jpg'},{'image': '../assets/carousel_images/image14.jpg'}, {'image': '../assets/carousel_images/image11.jpg'}, {'image': '../assets/carousel_images/image12.jpg'}, {'image': '../assets/carousel_images/image7.jpg'}];
  // slides = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  //slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];
  ngOnInit(): void {
  }

}
