import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CreateBaseComponent } from './create-base/create-base.component';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';


@NgModule({
  declarations: [
    CreateBaseComponent,
    BaseLineListFinalComponent
  ],
  imports: [
	SharedModule,

    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
