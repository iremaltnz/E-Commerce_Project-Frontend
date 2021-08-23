import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductListComponent},
  {path:"products",component:ProductListComponent},
  {path:"product-detail/:product_id",component:ProductDetailPageComponent},
  {path:"products/color/:color_id",component:ProductListComponent},
  {path:"products/brand/:brand_id",component:ProductListComponent},
  {path:"products/category/:category_id",component:ProductListComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
