import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/ui/topbar/topbar.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ProductSliderComponent } from './components/product/product-slider/product-slider.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { DropdownComponent } from './components/ui/dropdown/dropdown.component';
import { StarsRateComponent } from './components/ui/stars-rate/stars-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductSliderComponent,
    CartItemComponent,
    DropdownComponent,
    StarsRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
