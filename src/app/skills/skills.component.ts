import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {title: 'HTML / CSS', imgname: 'html_css'},
    {title: 'SCSS', imgname: 'scss'},
    {title: 'JavaScript', imgname: 'js'},
    {title: 'PHP', imgname: 'php'},
    {title: 'Angular', imgname: 'angular'},
    {title: 'REST - Application Programming Interface', imgname: 'api'},
    {title: 'Bootstrap', imgname: 'bootstrap'},
    {title: 'Scrum', imgname: 'scrum'},
    {title: 'Design Thinking', imgname: 'design'},
    {title: 'DBMS / DB', imgname: 'db'},
    {title: 'Git', imgname: 'git'},
    {title: 'Test Automation', imgname: 'test'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
