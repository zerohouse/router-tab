import {NgModule} from '@angular/core';
import {RouterTab} from './router-tab.directive';
import {MatTabsModule} from '@angular/material';
import {RouterTabs} from './router-tabs.directive';

@NgModule({
  declarations: [RouterTab, RouterTabs],
  exports: [MatTabsModule, RouterTabs, RouterTab]
})
export class RouterTabModule {
}
