import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})

export class PortfolioSectionComponent implements OnInit {
  projects = [
    { title: 'Canvas Game', description: 'El Pollo Loco is an object-oriented jump-and-run-game based on JavaScript.', imgsrc: 'assets/img/el_pollo_loco.jpg', alt: 'el_pollo_loco', url: 'https://www.alexander-bachmann-portfolio.de/canvas_game' },
    { title: 'Quiz-App', description: 'A simple quiz app that tests your general knowledge of HTML, CSS and JavaScript.', imgsrc: 'assets/img/quizapp.jpg', alt: 'quizapp', url: 'https://www.alexander-bachmann-portfolio.de/quiz_app' },
    { title: 'Ring of Fire', description: 'The popular drinking game as multi-user-app based on Angular and Firebase.', imgsrc: 'assets/img/ringoffire.jpg', alt: 'Ring of Fire', url: 'https://ring-of-fire-e4f0f.web.app/' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
