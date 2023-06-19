import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';
import { CreateBaseComponent } from './create-base/create-base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-base', component: CreateBaseComponent },

  { path: 'base-line-list-final', component: BaseLineListFinalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
