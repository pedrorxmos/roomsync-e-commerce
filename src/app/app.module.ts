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
    ProductCardComponent,
    ProductDetailPageComponent,
    ProductListPageComponent,
    ProductSliderComponent,
    StarsRateComponent,
    TopbarComponent,
    IconComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
