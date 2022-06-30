import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, <ExtraOptions>config)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
