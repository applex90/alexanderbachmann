import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../side-nav-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private sidenav: SidenavService) { }

  ngOnInit(): void {
  }

  toggleRightSidenav() {
    this.sidenav.toggle();
 }
}
