import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core'
import { Product } from 'src/app/interfaces'

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {
  @Input({ required: true })
  public products!: Product[]
}
