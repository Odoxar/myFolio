import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dsa-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})



export class ResumeComponent implements OnInit {
  public education: any;

  public work: any ;


  constructor(
    private metaData: Meta,
    private title: Title,
  ) {
    title.setTitle('Denys Siumak | Frontend developer - resume');
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
        property: 'og:url', content: 'https://odoxar.github.io/resume'
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
    this.education = educationList.reverse();
    this.work = workList.reverse();
  }

}

const educationList: any = [
  {
    institution: 'Krementchuk Мykhailo Ostrohradskyi National University',
    period: '2007 - 2012',
    description: 'Speciality: "Land Use Planning and Cadastre". Degree: "M"'
  },
  {
    institution: 'HTML Academy',
    period: 'January - February 2016',
    description: 'Free courses "HTML&CSS"'
  },
  {
    institution: 'Prometheus',
    period: 'January - February 2016',
    description: 'Video courses from Harvard University "Introduction to Computer Science(CS50)"'
  },
  {
    institution: 'Ninja Frontend',
    period: 'September - October 2016',
    description: 'Course of HTML5/CSS3'
  },
  {
    institution: 'CyberBionic systematics',
    period: 'October 2017 - March 2018',
    description: 'Course "FrontEnd Developer"'
  },
];

const workList: any = [
  {
    workPlace: "Freelance (MEPlife)",
    period: "March - September 2016",
    description:
      "Adding responsive design to existing website. Adding Language options."
  },
  {
    workPlace: "Freelance (Martinika)",
    period: "February - April 2017",
    description:
      "Developed responsive landing page with two version (ukr and eng)."
  },
  {
    workPlace: "Freelance (Homme)",
    period: "June - November 2018",
    description: "Developed Single-page Application with Angular.  "
  }
];
