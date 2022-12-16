import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreatComponent } from './components/views/category/category-create/category-create.component';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';



const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"categories",
    component:CategoryReadComponent    
  },
  {
    path:"category/create",
    component:CategoryCreatComponent   
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
