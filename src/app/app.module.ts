import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from './side-nav-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationService } from './navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    HomeSectionComponent,
    PortfolioSectionComponent,
    AboutMeComponent,
    ImprintComponent,
    DataProtectionComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [SidenavService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 0]);
    router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        //a good solve but it still does not scroll to anchor element after second click on the same anchor
        //one fix should be to set routing config option onSameUrlNavigation: 'reload',
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor);
          });
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
