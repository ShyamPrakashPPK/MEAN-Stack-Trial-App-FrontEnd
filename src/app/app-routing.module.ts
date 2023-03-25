import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:UserComponent
  },
  {
     path:'create',component:CreateComponent
  },
  {
    path:'edit/:id',component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
