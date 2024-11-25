import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  year = (new Date()).getFullYear();

  contacts = [
    {
      value: 'email', 
      label: 'arkisiel01@gmail.com',
      href: 'mailto:arkisiel01@gmail.com',
      icon: '/media/icons/mail.svg'
    },
    {
      value: 'github',
      label: 'a-kisiel',
      href: 'https://github.com/a-kisiel',
      icon: '/media/icons/gh.svg'
    },
    {
      value: 'linkedin',
      label: 'alex-kisiel',
      href: 'https://www.linkedin.com/in/alex-kisiel/',
      icon: '/media/icons/li.svg'
    }
  ];
}
