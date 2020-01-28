import { Component, OnInit } from '@angular/core';
import {Widget} from '../model/widget';

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.scss']
})
export class Widget3Component implements Widget {

  readonly name = 'widget3';

}
