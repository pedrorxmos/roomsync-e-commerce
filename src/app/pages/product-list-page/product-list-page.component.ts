import {
  Component,
  OnInit,
  Injectable,
  AfterContentChecked
} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import categoriesDB from '../../../database/categories.json'
import productsDB from '../../../database/products.json'
import { Color, Material, Product } from 'src/app/interfaces'
import { colorFilter } from './color.filter'
import { materialFilter } from './material.filter'
import { getFavorites } from 'src/app/helpers'

@Component({
  selector: 'product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit, AfterContentChecked {
  private categoryId?: string
  public category?: string
  public products: Product[] = productsDB as Product[]
  public initialProducts: Product[] = [] //This will be needed when reseting filters
  public pageName: string = 'shop'

  public colorFilterOptions: Color[] = []
  public materialFilterOptions: Material[] = []
  public pageTitle: string = 'Shop All'

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.categoryId = params['category'])
    )

    this.pageName = this.route.routeConfig?.path || ''

    if (this.categoryId) {
      this.category = categoriesDB.filter(
        (cat) => cat.id === this.categoryId
      )[0].name

      this.pageTitle = this.category

      this.products = this.products.filter(
        (prod) => prod.subcategory === this.categoryId
      )
    }

    if (this.pageName === 'favorites') {
      this.products = getFavorites()
      this.pageTitle = 'Favorites'
    }

    this.checkSearchParam()

    this.initialProducts = [...this.products]

    this.colorFilterOptions = colorFilter(this.products)
    this.materialFilterOptions = materialFilter(this.products)

    this.route.queryParams.subscribe((params) => {
      this.applyFilters({
        color: params['color'],
        material: params['material']
      })
    })
  }

  ngAfterContentChecked(): void {
    this.route.queryParams.subscribe((params) => {
      this.applyFilters({
        color: params['color'],
        material: params['material']
      })
    })
  }

  checkSearchParam() {
    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.products = this.products.filter((prod: Product) =>
          prod.name.toLowerCase().includes(params['search'].toLowerCase())
        )

        this.pageTitle = `Search for "${params['search']}"`
      }
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
  }

  changeColor(value?: any): void {
    this.navigateToFilter({ color: value })
  }

  changeMaterial(value?: string): void {
    this.navigateToFilter({ material: value })
  }
}
