import { Component, Input } from '@angular/core'
import { Cart } from 'src/app/interfaces'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  public product!: Cart
}
