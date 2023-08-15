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

  ngOnInit(): void {
    this.imgUrl = `assets/img/product/${this.product.subcategory}/${this.product.id}.webp`
  }
}
