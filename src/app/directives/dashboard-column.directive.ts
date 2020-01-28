import {ComponentFactoryResolver, Directive, Input, Type, ViewContainerRef} from '@angular/core';
import {Widget} from '../components/model/widget';

@Directive({
  selector: '[appDashboardColumn]'
})
export class DashboardColumnDirective {

  @Input('appDashboardColumn')
  column = 0;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef
  ) {
  }

  appendWidget<T extends Widget>(widget: Type<T>) {
    this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(widget)
    );
  }
}
