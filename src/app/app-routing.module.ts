import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:"",redirectTo:"/tdf",pathMatch:"full"},
  {path:"tdf", component: TdfComponent},
  {path:"reactive",component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
