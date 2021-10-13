import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { BrandListComponent } from './components/Brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/Color/color-list/color-list.component';
import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/User/user/user.component';
import { EditorAddComponent } from './components/Editor/editor-add/editor-add.component';
import { OperationsComponent } from './components/Product/operations/operations.component';
import { ProductUpdateComponent } from './components/Product/product-update/product-update.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


export function HttpLoadFactory(http:HttpClient){

  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent,
    SidebarComponent,

    CategoryListComponent,
    BrandListComponent,
    ColorListComponent,

    ProductDetailPageComponent,

    RegisterComponent,

    LoginComponent,

    UserComponent,

    EditorAddComponent,

    OperationsComponent,

    ProductUpdateComponent,

    ShoppingCartComponent,

    OrderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoadFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
