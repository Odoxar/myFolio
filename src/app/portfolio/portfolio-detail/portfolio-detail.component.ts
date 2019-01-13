import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PortfolioService } from '../shared/services/portfolio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'dsa-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  @Input() portfolioItem;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPortfolioItemById();
    
  }
  getPortfolioItemById() {
    const id = this.route.snapshot.params['id'];
    this.portfolioItem = this.portfolioService.getPortfolioItem(id);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
