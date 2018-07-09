import {NgModule} from '@angular/core';
import {RouterTabDirective} from './router-tab.directive';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [RouterTabDirective],
  exports: [MatTabsModule, RouterTabDirective]
})
export class RouterTabModule {
}
