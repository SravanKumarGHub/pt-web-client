import  { NgModule, ModuleWithProviders} from '@angular/core'
import { GuestRoutesModule } from './guest.routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RecentSpeakersComponent } from './components/recent-speakers/recent-speakers.component';
import { RecentEventsComponent } from './components/recent-events/recent-events.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { PtHighlightsComponent } from './components/pt-highlights/pt-highlights.component';
import { MatCarouselComponent, MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PtCarouselComponent } from './components/pt-carousel/pt-carousel.component';

import { CommonModule, DatePipe } from '@angular/common';
import { SpeakerService } from './services/speaker.service';
import { SpeakerDetailsComponent } from './pages/speaker-details/speaker-details.component';
import { NavigationService } from './services/navigation.service';
import { BackButtonDirective } from './directives/back-button.directive';
import { AdminEventsService } from './services/admin-events.service';
import { SpeakersPage } from './pages/speakers/speakers.page';
import { PtEventsComponent } from './components/pt-events/pt-events.component';
import { EventsPage } from './pages/events/events.page';
import { SpeakerRegistrationComponent } from './pages/speaker-registration/speaker-registration.component';
import { ContactPage } from './pages/contact/contact.page';
import { PtEventRegistrationComponent } from './components/pt-event-registration/pt-event-registration.component';
import { EventRegistrationComponent } from './pages/event-registration/event-registration.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';


@NgModule({
    imports: [GuestRoutesModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        CommonModule,
        MatCarouselModule.forRoot()],
        providers:[SpeakerService,NavigationService,AdminEventsService,DatePipe],
    exports: [RecentSpeakersComponent],
    declarations: [HomePage,SpeakerRegistrationComponent,SpeakerDetailsComponent,EventsPage,SpeakersPage,PtCarouselComponent,BackButtonDirective, RecentSpeakersComponent, RecentEventsComponent, UpcomingEventsComponent, PtHighlightsComponent, CarouselComponent, PtEventsComponent,ContactPage, PtEventRegistrationComponent, EventRegistrationComponent, EventDetailsComponent]
})

export class GuestModule {
    constructor(){
        
    }
}