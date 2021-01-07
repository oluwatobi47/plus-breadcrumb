import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import {BreadcrumbService} from './breadcrumb.service';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule
  ]
})
export class PlusBreadcrumbModule {
  static forRoot(): any {
    return {
      ngModule: PlusBreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }
}
