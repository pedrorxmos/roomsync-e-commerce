import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  category?: string

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.category = params['category'])
    )
  }
}
