import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  HomePageComponent,
  ProductDetailPageComponent,
  ProductListPageComponent
} from './pages'
import { CartPageComponent } from './pages/cart-page/cart-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'shop',
    children: [
      { path: '', component: ProductListPageComponent },
      { path: ':category', component: ProductListPageComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
