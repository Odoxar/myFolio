import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent /* loadChildren: './system/system.module#SystemModule' */ },
  { path: 'contact-me', component: ContactComponent}
  /* { path: '**', component: NotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
