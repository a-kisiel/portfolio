import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  @Input('debugging') debugging: boolean = false;
  currentYear = (new Date()).getFullYear();
  pianoYears = this.currentYear - 1999;
  guitarYears = this.currentYear - 2011;

  tracks = [
    {
      title: "Mary Jane's Last Dance",
      date: '2015',
      src: '/media/music/mj.mp3',
      player: null,
      active: false
    },
    {
      title: 'Agua 4',
      date: '2023',
      src: '/media/music/agua4.mp3',
      player: null,
      active: false
    },
    {
      title: 'H A R K',
      date: '2020',
      src: '/media/music/HARK.m4a',
      type: 'audio/x-m4a',
      player: null,
      active: false
    }
  ];

  playerAction = (id: number, action: string) => {
    const player = this.tracks[id].player ?? document.getElementById(`${id}_player`);
    this.tracks.forEach((t, k) => {
      if (k === id)
        this.tracks[k].active = !t.active;
    });

    if (!player || !(player instanceof HTMLAudioElement))
        return;
      
    switch (action) {
      case 'play':
        player.play();
        break;
      case 'pause':
        player.pause();
        break;
    }
  };
}