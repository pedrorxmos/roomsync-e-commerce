import { Component, Input, OnInit, AfterContentChecked } from '@angular/core'
import {
  addToCart,
  getCart,
  getFavorites,
  updateFavorites
} from 'src/app/helpers'
import { Product } from 'src/app/interfaces'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, AfterContentChecked {
  @Input({ required: true })
  public product!: Product

  @Input()
  public className?: string

  @Input()
  public disabled?: boolean

  public imgUrl = ''
  public stars = [1, 1, 1, 1, 1]

  public isFav: boolean = false

  ngOnInit(): void {
    this.checkIfFav()

    this.imgUrl = `assets/img/product/${this.product?.subcategory}/${this.product?.id}.webp`

    this.stars[0] = this.product?.stars >= 1 ? 1 : this.product?.stars
    this.stars[1] =
      this.product?.stars >= 2
        ? 1
        : this.product?.stars - 1 < 0
        ? 0
        : this.product?.stars - 1
    this.stars[2] =
      this.product?.stars >= 3
        ? 1
        : this.product?.stars - 2 < 0
        ? 0
        : this.product?.stars - 2
    this.stars[3] =
      this.product?.stars >= 4
        ? 1
        : this.product?.stars - 3 < 0
        ? 0
        : this.product?.stars - 3
    this.stars[4] =
      this.product?.stars >= 5
        ? 1
        : this.product?.stars - 4 < 0
        ? 0
        : this.product?.stars - 4
  }

  ngAfterContentChecked(): void {
    this.checkIfFav()
  }

  checkIfFav(): void {
    this.isFav = false
    getFavorites().forEach((prod: Product) => {
      if (prod.id === this.product?.id) this.isFav = true
    })
  }

  onLike(): void {
    updateFavorites(this.product)
  }

  onCart(): void {
    addToCart(this.product, 1)
  }
}
