import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormioModule } from 'angular-formio';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './shared/components/social/social.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './about-me/progress-bar/progress-bar.component';
import { MyInfoComponent } from './about-me/my-info/my-info.component';
import { TechnologyComponent } from './about-me/technology/technology.component';
import { HttpClientModule } from '@angular/common/http';


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
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
