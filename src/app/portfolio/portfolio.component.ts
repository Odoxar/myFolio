import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { PortfolioService } from './shared/services/portfolio.service';
import { Meta, Title } from '@angular/platform-browser';
import { fadeInOutTrigger } from '../shared/animation/app.animation';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    fadeInOutTrigger
  ]
})
export class PortfolioComponent implements OnInit, OnChanges {
  public categories: Array<string>;
  public items: any[] = [];
  public mobileFilter: boolean = false

  @Input() filterBy?: string = 'All';
  hover;
  
  constructor(
    private portfolioService: PortfolioService,
    private metaData: Meta,
    private title: Title,
  ) {
    title.setTitle('Denys Siumak | Frontend developer - portfolio');
    metaData.addTags([
      {
        name: 'keywords', content: `
        Frontend, Front-end, Frontend developer, HTML, CSS, JS,
        Web, Web developer, Javascript, ECMAScript 6, Angular, Responsive design, 
        good website, website, Mobile Web Development, Cross-Browser
      ` },
      {
        name: 'description', content: `
        My name is Denys Siumak I'm Front-end developer.
        The site has collected most of my entire professional 
        activity over the past few years.
      ` },
      {
        property: 'og:title', content: 'Denys Siumak | Frontend developer | Kyiv, Ukraine'
      },
      {
        property: 'og:type', content: 'website'
      },
      {
        property: 'og:url', content: 'https://odoxar.github.io/portfolio'
      },
      {
        property: 'og:image', content: 'https://odoxar.github.io/assets/foto/my-foto.jpg'
      },
      {
        property: 'og:description', content: `
          My name is Denys Siumak I'm Front-end developer.
          The site has collected most of my entire professional 
          activity over the past few years.
        ` },
    ])
  }

  ngOnInit() {
    this.categories = this.portfolioService.getCategories();
    this.items = this.portfolioService.getVisibleItems();
  }

  ngOnChanges() {
    this.items = this.portfolioService.getVisibleItems();
  }
}
