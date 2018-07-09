import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterTabModule} from '../../projects/zerohouse/router-tab/src/lib/router-tab.module';
import {RouterModule} from '@angular/router';
import {AppComponent, PageAComponent, PageBComponent, PageCComponent} from './app.components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, PageAComponent, PageBComponent, PageCComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'a'},
      {path: 'a', component: PageAComponent},
      {path: 'b', component: PageBComponent},
      {path: 'c', component: PageCComponent}
    ]),
    BrowserModule,
    RouterTabModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
