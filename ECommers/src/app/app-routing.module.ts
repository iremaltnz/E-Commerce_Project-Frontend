import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductListComponent},
  {path:"products",component:ProductListComponent},
  {path:"product-detail/:product_id",component:ProductDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
