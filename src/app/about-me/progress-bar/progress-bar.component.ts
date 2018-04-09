import { Component, OnInit } from '@angular/core';
import { SkillModel } from "../../shared/model/skill.model";

@Component({
  selector: 'dsa-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  skills: SkillModel[] = [
    {
      title: 'HTML, CSS', 
      value: 964,
      link: 'http://testprovider.com/ru/Certificate/Search/TP47731977'
    },
    {
      title: 'HTML5 & CSS3', 
      value: 875,
      link: 'http://testprovider.com/ru/Certificate/Search/TP16775239'
    },
    {
      title: 'JavaScript', 
      value: 878,
      link: 'http://testprovider.com/ru/Certificate/Search/TP46619826'
    },
    {
      title: 'JQuery', 
      value: 888,
      link: 'http://testprovider.com/ru/Certificate/Search/TP28196125'
    },
    {
      title: 'Angular',
      value: 857,
      link: 'http://testprovider.com/ru/Certificate/Search/TP39723642'
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
