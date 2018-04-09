import { Component, OnInit } from '@angular/core';
import { InfoModel } from '../../shared/model/info.model';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'dsa-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {

  contact = true;
  public pathPage;

  info: InfoModel[] = [
    { title: 'Full Name:', value: 'Denys Siumak' },
    { title: 'Birthday:', value: '28 june 1990' },
    { title: 'Job:', value: 'Freelancer' },
    { title: 'Website:', value: 'odoxar.github.io' },
    { title: 'Email:', value: 'denys_siumak@outlook.com' },
    { title: 'Skype:', value: 'denisyumak' }
  ]

  contacts: InfoModel[] = [
    { title: 'Location:', value: 'Ukraine, Kuiv' },
    { title: 'Phone:', value: '+38 (095) 599-66-00' },
    { title: 'Website:', value: 'odoxar.github.io' },
    { title: 'Email:', value: 'denys_siumak@outlook.com' },
    { title: 'Skype:', value: 'denisyumak' }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRoutesPath();
    this.getCurentPage(); 
  }

  getRoutesPath() {
     return this.route.snapshot.url.forEach((page) => this.pathPage = page.path);
  }

  getCurentPage() {
    if (this.pathPage === 'contact-me') {
      this.contact = false;
    } else {
      this.contact = true;
    }
  }

}
