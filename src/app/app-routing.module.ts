import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {CardsComponent} from "./cards/cards.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {AnalysisComponent} from "./analysis/analysis.component";

const routes: Routes = [{
  path:'home',
  component:HomeComponent,
  children:[{
    path:'cards',
    component:CardsComponent
  },{
    path:'transactions',
    component:TransactionsComponent
  },{
    path:'analysis',
    component:AnalysisComponent
  },{
    path:'',
    redirectTo:'cards',
    pathMatch:'full'
  }]
},{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
