import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  slides: any[]=[];
  timeInterval = 6000;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  ngOnInit() {
    
    this.slides = [
      {
        id: 'slide-1',
        img: {
          url: 'http://lorempixel.com/900/500?r=1',
          title: 'Random first slide'
        },
        description: {
          title: 'First slide label',
          detail: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }
      },
      {
        id: 'slide-2',
        img: {
          url: 'http://lorempixel.com/900/500?r=2',
          title: 'Random second slide'
        },
        description: {
          title: 'Second slide label',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      },
      {
        id: 'slide-3',
        img: {
          url: 'http://lorempixel.com/900/500?r=3',
          title: 'Random third slide'
        },
        description: {
          title: 'Third slide label',
          detail: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }
      }
    ];
  }
}
