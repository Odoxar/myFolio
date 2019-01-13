import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioService } from './shared/services/portfolio.service';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioFilterPipe } from './shared/services/filter.pipe';
import { SafePipe } from './shared/services/safe.pipe';
import { AdaptiveScreenComponent } from './adaptive-screen/adaptive-screen.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent,
    PortfolioDetailComponent,
    PortfolioFilterPipe,
    SafePipe,
    AdaptiveScreenComponent
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
