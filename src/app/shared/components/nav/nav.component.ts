import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dsa-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() clickMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedMenu() {
    this.clickMenu.emit(false);
  }
}
