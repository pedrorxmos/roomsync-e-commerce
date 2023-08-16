import { AfterContentChecked, Component, OnInit } from '@angular/core'
import productsDB from '../../../database/products.json'
import { Cart, Product } from 'src/app/interfaces'
import { getCart, removeCart } from 'src/app/helpers'
import { Router } from '@angular/router'

@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, AfterContentChecked {
  public products: Cart[] = getCart()
  public recomendedProducts: Product[] = []
  public subtotal: number = 0

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.recomendedProducts = productsDB
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, 8) as Product[]
  }

  ngAfterContentChecked(): void {
    this.products = getCart()

    this.subtotal = 0

    this.products.forEach((prod: Cart) => {
      this.subtotal += prod.price * prod.qty
    })
  }

  onRemoveAll() {
    removeCart()
    this.router.navigateByUrl('/')
  }
}
