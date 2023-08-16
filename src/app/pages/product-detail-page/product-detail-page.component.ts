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

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.productId = params['id']))
    this.product = productsDB.find((prod) => (prod.id = this.productId))
  }
}
