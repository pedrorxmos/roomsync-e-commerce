import { Component, Input, OnInit } from '@angular/core'
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
}
