import { Component, OnInit } from '@angular/core'
import productsDB from '../../../database/products.json'
import { Product } from 'src/app/interfaces'

@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public recomendedProducts: Product[] = []

  ngOnInit(): void {
    this.recomendedProducts = productsDB
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, 8) as Product[]
  }
}
