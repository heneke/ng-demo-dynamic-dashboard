import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import {DashboardColumnDirective} from './directives/dashboard-column.directive';
import {Widget1Component} from './components/widget1/widget1.component';
import {WidgetRegistryService} from './services/widget-registry.service';
import {Layout} from './components/model/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(DashboardColumnDirective)
  columns?: QueryList<DashboardColumnDirective>;

  // should be retrieved from services later with arrays sorted
  private layout: Layout = {
    columns: [
      {index: 0, weight: 1}, {index: 1, weight: 2}, {index: 2, weight: 3}
    ],
    widgets: [
      {item: {name: 'widget1'}, column: 0, order: 1},
      {item: {name: 'widget3'}, column: 1, order: 1},
      {item: {name: 'widget2'}, column: 2, order: 1},

      {item: {name: 'widget3'}, column: 0, order: 2},
      {item: {name: 'widget2'}, column: 1, order: 2},
      {item: {name: 'widget1'}, column: 2, order: 2}
    ]
  };

  constructor(
    private readonly widgetRegistry: WidgetRegistryService
  ) {
  }

  ngAfterViewInit() {
    if (this.columns) {

      const indexedColumns: { [i: number]: DashboardColumnDirective } = this.columns.reduce((prev, cur) => {
        prev[cur.column] = cur;
        return prev;
      }, {});

      this.layout.widgets.forEach((positionedWidget) => {
        if (indexedColumns[positionedWidget.column]) {
          indexedColumns[positionedWidget.column].appendWidget(this.widgetRegistry.getRegisteredWidget(positionedWidget.item.name));
        }
      });
    }
  }
}
