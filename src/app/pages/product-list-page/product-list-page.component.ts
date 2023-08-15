import { Component, OnInit, Injectable } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import categoriesDB from '../../../database/categories.json'
import productsDB from '../../../database/products.json'
import { Color, Material, Product } from 'src/app/interfaces'
import { colorFilter } from './color.filter'
import { materialFilter } from './material.filter'

@Component({
  selector: 'product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  private categoryId?: string
  public category?: string
  public products: Product[] = productsDB
  public initialProducts: Product[] = [] //This will be needed when reseting filters

  public colorFilterOptions: Color[] = []
  public materialFilterOptions: Material[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.navigateToFilter = this.navigateToFilter.bind(this)
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.categoryId = params['category'])
    )

    if (this.categoryId) {
      this.category = categoriesDB.filter(
        (cat) => cat.id === this.categoryId
      )[0].name

      this.products = this.products.filter(
        (prod) => prod.subcategory === this.categoryId
      )
    }

    this.initialProducts = [...this.products]

    this.route.queryParams.subscribe((params) => {
      this.applyFilters({
        color: params['color'],
        material: params['material']
      })
    })
  }

  navigateToFilter({ color, material }: { color?: string; material?: string }) {
    const urlTree = this.categoryId ? ['shop', this.categoryId] : ['shop']

    this.route.queryParams.subscribe((params) => {
      const { color: prevColor, material: prevMaterial, ...rest } = params
      this.router.navigate(urlTree, {
        queryParams: {
          color: color === 'reset' ? undefined : color ? color : prevColor,
          material:
            material === 'reset'
              ? undefined
              : material
              ? material
              : prevMaterial,
          ...rest
        }
      })
    })

    this.route.queryParams.subscribe((params) => {
      this.applyFilters({
        color: params['color'],
        material: params['material']
      })
    })
  }

  applyFilters({ color, material }: { color?: string; material?: string }) {
    this.products = this.initialProducts

    if (color)
      this.products = this.products.filter((prod) => prod.color.includes(color))

    if (material)
      this.products = this.products.filter((prod) =>
        prod.material.includes(material)
      )

    this.colorFilterOptions = colorFilter(this.products)
    this.materialFilterOptions = materialFilter(this.products)
    // this.navigateToFilter()
  }

  changeColor(value?: string) {
    console.log(value)
    this.navigateToFilter({ color: value })
  }

  changeMaterial(value?: string) {
    this.navigateToFilter({ material: value })
  }
}
