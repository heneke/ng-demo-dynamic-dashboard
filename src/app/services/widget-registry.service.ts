import {Injectable, Type} from '@angular/core';
import {Widget1Component} from '../components/widget1/widget1.component';
import {Widget2Component} from '../components/widget2/widget2.component';
import {Widget3Component} from '../components/widget3/widget3.component';
import {Widget} from '../components/model/widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetRegistryService {

  getRegisteredWidget(name: string): Type<Widget> {
    switch (name) {
      case 'widget1':
        return Widget1Component;
      case 'widget2':
        return Widget2Component;
      case 'widget3':
        return Widget3Component;
      default:
        throw new Error(`Widget ${name} is not registered!`);
    }
  }
}
