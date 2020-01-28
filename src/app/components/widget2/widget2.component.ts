import { Component, OnInit } from '@angular/core';
import {Widget} from '../model/widget';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements Widget {

  readonly name = 'widget2';

}
