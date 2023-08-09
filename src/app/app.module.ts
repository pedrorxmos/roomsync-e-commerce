import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  TopbarComponent,
  FooterComponent,
  ProductCardComponent,
  ProductSliderComponent,
  CartItemComponent,
  DropdownComponent,
  StarsRateComponent,
  CategoryComponent
} from './components'
import {
  HomePageComponent,
  ProductListPageComponent,
  ProductDetailPageComponent,
  CartPageComponent
} from './pages';
import { ButtonComponent } from './components/ui/button/button.component';
import { IconComponent } from './components/ui/icon/icon.component'

@NgModule({
  declarations: [
    AppComponent,
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
    ButtonComponent,
    IconComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
