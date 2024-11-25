import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss'
})
export class ArtComponent {
  gallery = [
    {
      title: 'Me 1',
      src: '/media/art/image0.jpeg',
      styles: 'background-position: center -20px'
    },
    {
      title: 'Nessa',
      src: '/media/art/image1.jpeg'
    },
    {
      title: 'Kater',
      src: '/media/art/image2.jpeg'
    },
    {
      title: 'Kevin',
      src: '/media/art/kevin.jpeg'
    },
    {
      title: 'Bird',
      src: '/media/art/bird.jpeg'
    },
    {
      title: 'Flower Girl',
      src: '/media/art/flowergirl.jpeg'
    },
    {
      title: 'Fisherman',
      src: '/media/art/fishman.jpeg'
    }
  ];
}
