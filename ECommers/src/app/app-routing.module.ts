import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Product/product-list/product-list.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductListComponent},
  {path:"products",component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
