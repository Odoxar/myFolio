import { Component, OnInit } from '@angular/core';
import { TechnologyModel } from '../../shared/model/technology/technology.model';
//import { LogoModel } from '../../shared/model/logo/logo.model';

@Component({
  selector: 'dsa-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  logos: TechnologyModel[] = [
    {
      category: 'OS',
      logo: [
        {
          title: 'Linux',
          link: 'linux.png'
        }
      ]
    },
    {
      category: 'Language spec',
      logo: [
        {
          title: 'TypeScript',
          link: 'ts.png'
        }
      ]
    },
    {
      category: 'Build tool',
      logo: [
        {
          title: 'WebPack',
          link: 'webpack.png'
        },
        {
          title: 'Gulp',
          link: 'gulp.png'
        }
      ]
    },
    {
      category: 'Preproccesors',
      logo: [
        {
          title: 'Sass(Scss)',
          link: 'sass.png'
        },
        {
          title: 'Less',
          link: 'less.png'
        }/* ,
        {
          title: 'Pug(Jade)',
          link: 'pug.png'
        } */
      ]
    },
    {
      category: 'Framework',
      logo: [
        {
          title: 'Bootstrap',
          link: 'bootstrap-logo.jpg'
        }
      ]
    },
    {
      category: 'Versions control system',
      logo: [
        {
          title: 'Git',
          link: 'git.png'
        }
      ]
    },
    {
      category: 'Package managers',
      logo: [
        {
          title: 'npm',
          link: 'npm.png'
        }
      ]
    },
    {
      category: 'PSD editors',
      logo: [
        {
          title: 'Photoshop',
          link: 'photoshop.png'
        },
        {
          title: 'Adobe creative cloud (assets) ',
          link: 'assets.png'
        },
        {
          title: 'Avocode',
          link: 'avocode.png'
        }
      ]
    },
    {
      category: 'Text editors',
      logo: [
        {
          title: 'Visual studio code',
          link: 'vscode.png'
        },
        {
          title: 'Sublime text',
          link: 'sublime.jpg'
        },
      ]
    }
  ]

  /*  logos: LogoModel[] = [
    {

      title: 'Linux',
      link: 'linux.png'
    },

    {
      title: 'TypeScript',
      link: 'ts.png'
    },
    {
      title: 'WebPack',
      link: 'webpack.png'
    },
    {
      title: 'Gulp',
      link: 'gulp.png'
    },
    {
      title: 'Sass(Scss)',
      link: 'sass.png'
    },
    {
      title: 'Less',
      link: 'less.png'
    },
    {
      title: 'Pug(Jade)',
      link: 'pug.png'
    },
    {
      title: 'Git',
      link: 'git.png'
    },
    {
      title: 'npm',
      link: 'npm.png'
    },
    {
      title: 'Photoshop',
      link: 'photoshop.png'
    },
    {
      title: 'Adobe creative cloud (assets) ',
      link: 'assets.png'
    },
    {
      title: 'Avocode',
      link: 'avocode.png'
    },
    {
      title: 'Visual studio code',
      link: 'vscode.png'
    },
    {
      title: 'Sublime text',
      link: 'sublime.jpg'
    },
  ] */
  constructor() { }

  ngOnInit() {
  }

}
