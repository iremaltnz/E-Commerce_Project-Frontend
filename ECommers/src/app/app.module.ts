import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryListComponent } from './components/Category/category-list/category-list.component';
import { BrandListComponent } from './components/Brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/Color/color-list/color-list.component';

import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent,
    SidebarComponent,

    CategoryListComponent,
    BrandListComponent,
    ColorListComponent,

    ProductDetailPageComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
