import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../shared/services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from "../../shared/animation/app.animation";

@Component({
  selector: 'dsa-adaptive-screen',
  templateUrl: './adaptive-screen.component.html',
  styleUrls: ['./adaptive-screen.component.scss'],
  animations: [fadeAnimation]
})
export class AdaptiveScreenComponent implements OnInit {
  screen = 'pc';
  public item;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.item = this.portfolioService.getPortfolioItem(id);
  }

}
