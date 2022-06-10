import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  title = 'alexanderbachmann';

  ngOnInit() {
    let typed = new Typed('#typed', {
      strings: ['Alexander Bachmann.'],
      typeSpeed: 80,
      loop: false,
      showCursor: true,
      startDelay: 1000,
      onComplete: () => {
        let el = document.getElementsByClassName('typed-cursor');
        el[0].remove();
      },
    });
  }
}