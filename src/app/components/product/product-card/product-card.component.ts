import { Component, Input, OnInit } from '@angular/core'
import { Product } from 'src/app/interfaces'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true })
  public product!: Product

  public imgUrl = ''
  public stars = [1, 1, 1, 1, 1]

  ngOnInit(): void {
    this.imgUrl = `assets/img/product/${this.product.subcategory}/${this.product.id}.webp`

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
