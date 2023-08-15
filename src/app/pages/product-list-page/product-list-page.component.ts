import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import categoriesDB from '../../../database/categories.json'
import productsDB from '../../../database/products.json'
import { Product } from 'src/app/interfaces'

@Component({
  selector: 'product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  private categoryId?: string
  public category?: string
  public products: Product[] = productsDB
  public initialProducts: Product[] = [] //This will be needed when reseting filters

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.categoryId = params['category'])
    )

    if (this.categoryId) {
      this.category = categoriesDB.filter(
        (cat) => cat.id === this.categoryId
      )[0].name

      this.products = this.products.filter(
        (prod) => prod.subcategory === this.categoryId
      )
    }

    this.initialProducts = this.products
  }
}
