import { Component, Input, OnInit } from '@angular/core'
import { getCart, removeFromCart, updateCart } from 'src/app/helpers'
import { Cart } from 'src/app/interfaces'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  public product!: Cart

  public imgUrl: string = ''

  ngOnInit(): void {
    this.imgUrl = `/assets/img/product/${this.product.subcategory}/${this.product.id}.webp`
  }

  onInputQty(value: number) {
    if (value < 1) {
      updateCart(this.product.id, 1)
      return
    }
    if (value > 20) {
      updateCart(this.product.id, 20)
      return
    }
    updateCart(this.product.id, value)
  }

  onRemove() {
    removeFromCart(this.product.id)
  }
}
