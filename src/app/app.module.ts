import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { MatProgressBarModule, MatGridListModule } from '@angular/material';

import { 
  AppComponent,
  AsideComponent,
  NavComponent,
  AboutMeComponent,
  ResumeComponent,
  PortfolioComponent,
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
import { PortfolioService } from './portfolio/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    SocialComponent,
    FooterComponent,
    ProgressBarComponent,
    MyInfoComponent,
    TechnologyComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI9Vtf3snZlQC_-XFes7yrdKj6STdwaII'
    }),
    MatGridListModule
  ],
  providers: [FeedbackService, IndoorDataService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
