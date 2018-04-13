import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  categorySkill: Array<string> = [
    'HTML5',
    'CSS',
    'JavaScript',
    'Angular',
    'jQuery',
    'ES2015',
    'SASS(SCSS)'
  ];
  filterItem: Array<string> = [
    'All Works',
    'Latest',
    'Difficulty',
    'Practicing'
  ];

  getArray(arr) {
    return arr;
  }
  constructor() { }

}
