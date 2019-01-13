import { Component } from '@angular/core';
import { fadeAnimation, headerAnimationsTrigger} from './shared/animation/app.animation';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(300, style({ opacity: 1 }))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(300, style({ opacity: 0 }))
    ])
  ]), fadeAnimation, headerAnimationsTrigger]
})
export class AppComponent {
  public menu: boolean = false ;

  toggleMenu(): void {
    this.menu = !this.menu;
  }

  menuClicked(e) {
    this.menu = e;
  }
}
