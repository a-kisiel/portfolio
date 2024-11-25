import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss'
})

export class ProfessionalComponent implements OnInit {
  @Input() debugging = false;
  @Input() webp = false;

  techs = [
    {
      title: 'Angular',
      href: 'https://angular.dev/',
      icon: '/media/logos/angular.svg'
    },
    {
      title: 'Vue',
      href: 'https://vuejs.org/',
      icon: '/media/logos/vue.svg'
    },
    {
      title: 'React',
      href: 'https://react.dev/',
      icon: '/media/logos/react.svg'
    },
    {
      title: 'Laravel',
      href: 'https://laravel.com/',
      icon: '/media/logos/laravel.svg'
    },
    {
      title: 'php',
      href: 'https://www.php.net/',
      icon: '/media/logos/php.svg',
      style: 'background-size: 70% auto;'
    },
    {
      title: 'MySQL',
      href: 'https://www.mysql.com/',
      icon: '/media/logos/mysql.svg',
      style: 'background-size: 70% auto;'
    },
    // {
    //   title: 'jQuery',
    //   href: 'https://jquery.com/',
    //   icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg'
    // },
    {
      title: 'Python',
      href: 'https://www.python.org/',
      icon: '/media/logos/python.png'
    },
    {
      title: 'Github',
      href: 'https://github.com/a-kisiel',
      icon: '/media/logos/gh.svg'
    },
  ];

  sites = [
    {
      'description': 'art portfolio site (for Kate)',
      'href': 'https://www.katiekisiel.com/',
      'github': 'https://github.com/a-kisiel/KatieSite-React',
      'bg': '',
      'bgOptions': {
        'debugging': '/media/sites/EQJ86HNO43DU.jpg',
        'uncompressed': 'https://katieart.s3.us-east-2.amazonaws.com/hashed_uncompressed/EQJ86HNO43DU.jpg',
        'compressed': 'https://katieart.s3.us-east-2.amazonaws.com/hashed_compressed/EQJ86HNO43DU.webp'
      }
    },
    {
      'description': 'dental practice site (for Dad)',
      'href': 'https://www.kisielfamilydentistry.com',
      'github': 'https://github.com/a-kisiel/kfd',
      'bg': '',
      'bgOptions': {
        'debugging': '/media/sites/kfd.webp',
        'uncompressed': 'https://kfd-imgs.s3.us-east-2.amazonaws.com/jpg/1.jpg',
        'compressed': 'https://kfd-imgs.s3.us-east-2.amazonaws.com/webp/1.webp'
      }
    },
    {
      'description': 'this site (for Me)',
      'href': '/',
      'github': 'https://github.com/a-kisiel/portfolio',
      'bg': '',
      'bgOptions': {
        'debugging': '/media/art/fishman.jpeg',
        'uncompressed': '/media/art/fishman.jpeg',
        'compressed': '/media/art/fishman.jpeg'
      }
    }
  ];

  years = (new Date()).getFullYear() - 2019;

  ngOnInit(): void {
    this.sites.forEach(s => {
      s.bg = this.debugging ?
        s.bgOptions.debugging :
        this.webp ?
          s.bgOptions.compressed :
          s.bgOptions.uncompressed
    });
  };
}
