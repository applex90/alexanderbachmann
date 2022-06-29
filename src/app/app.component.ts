import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import AOS from 'aos';
import { SidenavService } from './side-nav-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
    AOS.init({
      once: true,
    });
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
      AOS.refresh();
    });
  }

}





