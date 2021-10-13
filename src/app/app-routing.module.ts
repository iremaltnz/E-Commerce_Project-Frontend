import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorAddComponent } from './components/Editor/editor-add/editor-add.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { OperationsComponent } from './components/Product/operations/operations.component';
import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/Product/product-update/product-update.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserComponent } from './components/User/user/user.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductListComponent},
  {path:"products",component:ProductListComponent},
  {path:"product-detail/:product_id",component:ProductDetailPageComponent},
  {path:"products/color/:color_id",component:ProductListComponent},
  {path:"products/brand/:brand_id",component:ProductListComponent},
  {path:"products/filter/:filter",component:ProductListComponent},
  {path:"products/category/:category_id",component:ProductListComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserComponent},
  {path:"editörAdd",component:EditorAddComponent},
  {path:"operations",component:OperationsComponent},
  {path:"product-update/product_id/:productId",component:ProductUpdateComponent},
  {path:"cart",component:ShoppingCartComponent},
  {path:"orders",component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
