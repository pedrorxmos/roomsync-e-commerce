import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  ButtonComponent,
  CartItemComponent,
  CategoryComponent,
  DropdownComponent,
  FooterComponent,
  IconComponent,
  ProductCardComponent,
  ProductFilterComponent,
  ProductSliderComponent,
  StarsRateComponent,
  TopbarComponent
} from './components'
import {
  CartPageComponent,
  HomePageComponent,
  ProductDetailPageComponent,
  ProductListPageComponent
} from './pages'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CartItemComponent,
    CartPageComponent,
    CategoryComponent,
    DropdownComponent,
    FooterComponent,
    HomePageComponent,
    IconComponent,
    ProductCardComponent,
    ProductDetailPageComponent,
    ProductFilterComponent,
    ProductListPageComponent,
    ProductSliderComponent,
    StarsRateComponent,
    TopbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
