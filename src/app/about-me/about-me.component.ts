import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

 

  constructor(
    private metaData: Meta,
    private title: Title,
  ) { 
    title.setTitle('Denys Siumak | Frontend developer - about me');
    metaData.addTags([
      { name: 'keywords', content: `
        Frontend, Front-end, Frontend developer, HTML, CSS, JS,
        Web, Web developer, Javascript, ECMAScript 6, Angular, Responsive design, 
        good website, website, Mobile Web Development, Cross-Browser
      ` },
      { name: 'description', content: `
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
        property: 'og:url', content: 'https://odoxar.github.io/about-me'
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
  }

}
