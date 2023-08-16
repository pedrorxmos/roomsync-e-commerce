import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/interfaces'
import productsDB from '../../../database/products.json'

@Component({
  selector: 'product-detal-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  public productId!: string
  public product?: Product
  public imgUrl?: string = ``
  public stars = [1, 1, 1, 1, 1]

  public recomendedProducts: Product[] = []

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.productId = params['id']))
    this.product = productsDB.find(
      (prod) => prod.id === this.productId
    ) as Product

    this.recomendedProducts = productsDB.filter(
      (prod) => prod.category === this.product?.category
    )

    this.imgUrl = `/assets/img/product/${this.product.subcategory}/${this.product.id}.webp`

    this.stars[0] = this.product.stars >= 1 ? 1 : this.product.stars
    this.stars[1] =
      this.product.stars >= 2
        ? 1
        : this.product.stars - 1 < 0
        ? 0
        : this.product.stars - 1
    this.stars[2] =
      this.product.stars >= 3
        ? 1
        : this.product.stars - 2 < 0
        ? 0
        : this.product.stars - 2
    this.stars[3] =
      this.product.stars >= 4
        ? 1
        : this.product.stars - 3 < 0
        ? 0
        : this.product.stars - 3
    this.stars[4] =
      this.product.stars >= 5
        ? 1
        : this.product.stars - 4 < 0
        ? 0
        : this.product.stars - 4
  }
}
