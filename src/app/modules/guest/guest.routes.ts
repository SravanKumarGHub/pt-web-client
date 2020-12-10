import { Route } from '@angular/compiler/src/core'
import {NgModule} from '@angular/core'
import {Routes,RouterModule, ROUTES} from '@angular/router'
import { GuestLayoutComponent } from 'src/app/@theme/layouts/guest-layout.component';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { EventsPage } from './pages/events/events.page';
import { HomePage } from './pages/home/home.page';
import { SpeakerDetailsComponent } from './pages/speaker-details/speaker-details.component';
import { SpeakersPage } from './pages/speakers/speakers.page';

const routes :Routes = [
    {
        path:'',
        component:GuestLayoutComponent,
        children:[
          {
              path:'',
              component:HomePage
          },
          {
            path:'home',
            component:HomePage
          },
          {
            path:'events',
            component:EventsPage
          },
          {
            path:'about',
            component:AboutPage
          },
          {
            path:'speakers',
            component:SpeakersPage
          },
          {
            path:'speakerDetails/:speakerId',
            component:SpeakerDetailsComponent
          },
          {
            path:'contact',
            component:ContactPage
          }
      ]
    },
    
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class GuestRoutesModule {}