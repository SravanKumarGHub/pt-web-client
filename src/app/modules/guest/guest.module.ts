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

import { CommonModule } from '@angular/common';
import { SpeakerService } from './services/speaker.service';
import { SpeakerDetailsComponent } from './pages/speaker-details/speaker-details.component';
import { NavigationService } from './services/navigation.service';
import { BackButtonDirective } from './directives/back-button.directive';
import { AdminEventsService } from './services/admin-events.service';
import { SpeakersPage } from './pages/speakers/speakers.page';
import { PtEventsComponent } from './components/pt-events/pt-events.component';
import { EventsPage } from './pages/events/events.page';


@NgModule({
    imports: [GuestRoutesModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        CommonModule,
        MatCarouselModule.forRoot()],
        providers:[SpeakerService,NavigationService,AdminEventsService],
    exports: [RecentSpeakersComponent],
    declarations: [HomePage,EventsPage,SpeakersPage,PtCarouselComponent,BackButtonDirective, RecentSpeakersComponent, RecentEventsComponent, UpcomingEventsComponent, PtHighlightsComponent, CarouselComponent, PtEventsComponent]
})

export class GuestModule {
    constructor(){
        
    }
}