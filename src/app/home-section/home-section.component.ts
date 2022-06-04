import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  title = 'alexanderbachmann';
  i = 0;
  nameLetters = 'Alexander Bachmann';
  typeSpeed = 60;


  ngOnInit() {
    this.typeWriting();
  }


  typeWriting() {
    if (this.i < this.nameLetters.length) {
      document.getElementById("name-placeholder").innerHTML += this.nameLetters[this.i];
      this.i++;
      setTimeout(this.typeWriting, this.typeSpeed);
    }
  }
}

