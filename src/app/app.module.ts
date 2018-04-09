import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
  TechnologyComponent
} from './index';

import { FeedbackService } from "./shared/services/feedback.service";

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
