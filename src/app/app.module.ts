import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {RssFeedService} from './search-itinerary/rss-feed.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { SearchItineraryComponent } from './search-itinerary/search-itinerary.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateItineraryComponent,
    SearchItineraryComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([  
       { path: 'welcome', component: WelcomeComponent },
       { path: 'create', component: CreateItineraryComponent },
       { path: 'search', component: SearchItineraryComponent },
       { path: '**', redirectTo:'welcome',pathMatch:'full'  }
       ])
  ],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
