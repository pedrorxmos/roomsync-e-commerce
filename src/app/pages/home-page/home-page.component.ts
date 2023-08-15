import { Component, OnInit } from '@angular/core'
import categoriesDB from '../../../database/categories.json'
import productsDB from '../../../database/products.json'
import { Category, Product } from 'src/app/interfaces'

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public categories?: Category[] = categoriesDB
  public products: Product[] = productsDB
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 12)
}
