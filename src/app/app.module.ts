import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardColumnDirective} from './directives/dashboard-column.directive';
import {Widget1Component} from './components/widget1/widget1.component';
import { Widget2Component } from './components/widget2/widget2.component';
import { Widget3Component } from './components/widget3/widget3.component';
import {WidgetRegistryService} from './services/widget-registry.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardColumnDirective,
    Widget1Component,
    Widget2Component,
    Widget3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WidgetRegistryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Widget1Component,
    Widget2Component,
    Widget3Component
  ]
})
export class AppModule {
}
