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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    HomeSectionComponent,
    PortfolioSectionComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
