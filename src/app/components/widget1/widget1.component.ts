import { Component, OnInit } from '@angular/core';
import {Widget} from '../model/widget';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements Widget {

  readonly name = 'widget1';

}
