import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Measures, Product } from 'src/app/interfaces'
import productsDB from '../../../database/products.json'
import { addToCart, getFavorites, updateFavorites } from 'src/app/helpers'

@Component({
  selector: 'product-detal-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit, AfterContentChecked {
  public productId!: string
  public product?: Product
  public imgUrl?: string = ``
  public stars = [1, 1, 1, 1, 1]

  public recomendedProducts: Product[] = []
  public qty: number = 1
  public isFav: boolean = false

  constructor(private route: ActivatedRoute) {}

  ngAfterContentChecked(): void {
    this.loadContent()
    this.checkIfFav()
  }

  ngOnInit(): void {
    this.loadContent()
    this.checkIfFav()
  }

  checkIfFav(): void {
    this.isFav = false
    getFavorites().forEach((prod: Product) => {
      if (prod.id === this.product?.id) this.isFav = true
    })
  }

  private loadContent() {
    this.route.params.subscribe((params) => (this.productId = params['id']))
    this.product = productsDB.find(
      (prod) => prod.id === this.productId
    ) as Product

    this.recomendedProducts = productsDB.filter(
      (prod) =>
        prod.category === this.product?.category && prod.id !== this.product.id
    ) as Product[]

    this.imgUrl = `/assets/img/product/${this.product?.subcategory}/${this.product?.id}.webp`

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

  modifyQty(value: number) {
    this.qty += value
  }

  onInputQty(value: number) {
    if (value < 1) {
      this.qty = 1
      return
    }
    if (value > 20) {
      this.qty = 20
      return
    }
    this.qty = value
  }

  onCart(): void {
    addToCart(this.product!, this.qty)
  }

  onLike(): void {
    updateFavorites(this.product!)
  }
}
