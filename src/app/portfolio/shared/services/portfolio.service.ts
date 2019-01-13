import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  categories: Array<string> = [
    'All',
    'HTML5',
    'CSS',
    'JavaScript',
    'Angular',
    'jQuery',
    'ES2015',
    'SASS(SCSS)',
    'LESS'
  ];
  visibleItems = [];


  getCategories() {
    return this.categories;
  }

  getVisibleItems() {
    return this.visibleItems = items.slice(0).reverse();
  }

  getPortfolioItem(id) {
    return items[id-1];
  }
  constructor() { }

}

const items = [
  {
    id: 1,
    imgLink: "zonya.png",
    classCategory: [
      "All",
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "SASS(SCSS)"
    ],
    src: "zonya",
    link: "assets/myWorks/zonya/index.html",
    services: ["Responsive", "Cross Browser"],
    description: "Simple responsive landing page."
  },
  {
    id: 2,
    imgLink: "versus.png",
    classCategory: [
      "All",
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "SASS(SCSS)"
    ],
    src: "modusVersus",
    link: "assets/myWorks/modusVersus/index.html",
    services: ["Responsive design", "Cross Browser compatibility"],
    description:
      "coding of PSD site layout (HTML, CSS, jQuery-library), responsive design."
  },
  {
    id: 3,
    imgLink: "millidesign.png",
    classCategory: [
      "All",
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "SASS(SCSS)"
    ],
    src: "millidesign",
    link: "assets/myWorks/millidesign/index.html",
    services: ["Responsive", "Cross Browser"],
    description: "Simple responsive landing page with animation."
  },
  {
    id: 4,
    imgLink: "martinika.svg",
    classCategory: [
      "All",
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "SASS(SCSS)"
    ],
    src: "martinika",
    link: "assets/myWorks/martinika/index.html",
    services: ["Responsive", "Cross Browser"],
    description:
      "Commercial project, responsive landing page with portfolio plus one additional page. "
  },
  {
    id: 5,
    imgLink: "newProvidence.png",
    classCategory: ["All", "HTML5", "CSS", "JavaScript", "ES2015", "LESS"],
    src: "newProvidence",
    link: "assets/myWorks/newProvidence/index.html",
    services: ["Responsive", "Cross Browser"],
    description: "Simple responsive landing page. Using ES2015, with no jQuery."
  },
  {
    id: 6,
    imgLink: "homme.png",
    classCategory: [
      "All",
      "HTML5",
      "CSS",
      "JavaScript",
      "Angular",
      "ES2015",
      "SASS(SCSS)"
    ],
    src: "homme",
    link: "assets/myWorks/homme/index.html",
    services: ["Responsive", "Cross Browser"],
    description: "Single page application, use Angular."
  }
];
