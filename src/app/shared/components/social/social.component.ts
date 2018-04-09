import { Component, OnInit } from '@angular/core';
import { SocialModel } from "../../model/social.model";

@Component({
  selector: 'dsa-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {


  social: SocialModel[] = [
    { name: 'facebook', link: 'https://www.facebook.com/odoxar'},
    { name: 'github-text', link: 'https://github.com/Odoxar/' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/denys-siumak-757b47136/' },
    { name: 'skype', link: 'skype:denisyumak?chat' } 
  ]

  constructor() { }

  ngOnInit() {
  }

}
