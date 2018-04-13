import { Component, OnInit } from '@angular/core';
import { InfoModel } from '../shared/model/info.model';
import { PortfolioService } from './portfolio.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  category: Array<string>;
  sort: Array<string>;
  items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.category = this.portfolioService.getArray(this.portfolioService.categorySkill);
    this.sort = this.portfolioService.getArray(this.portfolioService.filterItem);
  }

}
