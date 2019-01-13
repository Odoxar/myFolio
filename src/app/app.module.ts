import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRoutingModule } from './app-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { 
  AppComponent,
  AsideComponent,
  NavComponent,
  AboutMeComponent,
  ResumeComponent,
  ContactComponent,
  SocialComponent,
  FooterComponent,
  ProgressBarComponent,
  MyInfoComponent,
  TechnologyComponent,
  MapComponent
} from './index';

import { FeedbackService } from "./shared/services/feedback.service";
import { IndoorDataService } from './shared/services/indoor-data.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SanitizeUrlPipe } from './shared/pipe/sanitizeurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactComponent,
    SocialComponent,
    FooterComponent,
    ProgressBarComponent,
    MyInfoComponent,
    TechnologyComponent,
    MapComponent,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI9Vtf3snZlQC_-XFes7yrdKj6STdwaII'
    }),
    AgmSnazzyInfoWindowModule,
    MatGridListModule,
    PortfolioModule,
  ],
  providers: [FeedbackService, IndoorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
