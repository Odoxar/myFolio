import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'portfolioFilter' })

export class PortfolioFilterPipe implements PipeTransform {
  // take certain items and criteria
  transform(items: any[], criteria: string): any {

    if (criteria === 'All') {      
      return items;
    } else {
      return items.filter(item => {
        return item.classCategory.includes(criteria);
      })
      
    }
  }
}