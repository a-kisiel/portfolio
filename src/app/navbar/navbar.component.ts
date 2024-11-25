import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input('webp') webp: boolean = false;

  navClass = 'light-nav';
  y = 0;
  hasScrolled = false;

  locations = [
    {
      title: 'HOME',
      value: 'home',
      y: 0,
      active: false
    },
    {
      title: 'PROFESSIONAL',
      value: 'professional',
      y: 0,
      active: false
    },
    {
      title: 'MUSIC',
      value: 'music',
      y: 0,
      active: false
    },
    {
      title: 'DRAWINGS',
      value: 'art',
      y: 0,
      active: false
    },
  ];

  @HostListener('window:scroll', ['$event']) onScrollEvent(){
    setTimeout(() => {
      this.navClass = window.scrollY < 60 ? 'light-nav' : 'dark-nav';

      this.locations.forEach((l,k) => {
        if (l.y === 0 && l.value !== 'home') {
          const top = document.getElementById(l.value + '-anchor')?.getBoundingClientRect().top ?? 0;
          l.y =  top + window.scrollY - 60;
        }
      });

      let activeIndex = 0;
      this.locations.forEach((l,k) => {
        if (l.y - 10 <= window.scrollY) {
          activeIndex = k;
        }
      });
      this.locations.forEach((l,k) => l.active = k === activeIndex);
    }, 250);
  } 

  navigate = (n: number) => {
    this.locations.forEach((l,k) => {
      if (l.y === 0 && l.value !== 'home') {
        const top = document.getElementById(l.value + '-anchor')?.getBoundingClientRect().top ?? 0;
        l.y =  top + window.scrollY - 60;
      }
    });

    const offset = this.locations[n]?.y;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  };
}
