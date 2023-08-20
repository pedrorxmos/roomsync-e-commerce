import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductCardComponent } from './product-card.component'
import { AppModule } from 'src/app/app.module'
import { product } from 'src/app/fixtures/products.fixture'
import { getCart, getFavorites } from 'src/app/helpers'
import { Cart } from 'src/app/interfaces'

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  beforeEach(() => {
    localStorage.clear()
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(ProductCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show product name and price', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.product = product
    fixture.detectChanges()

    expect(compiled.querySelector('.product-card')?.textContent).toContain(
      product.name
    )
    expect(compiled.querySelector('.product-card')?.textContent).toContain(
      product.price
    )
  })

  it('should add to cart', () => {
    component.product = product
    fixture.detectChanges()

    const addToCartBtn = fixture.debugElement.nativeElement.querySelector(
      '.product-card-actions__cart'
    )
    addToCartBtn.click()

    const productCart: Cart = {
      name: product.name,
      id: product.id,
      price: product.price,
      subcategory: product.subcategory,
      qty: 1
    }

    expect(getCart()).toEqual([productCart])
  })

  it('should add to favorites', () => {
    component.product = product
    fixture.detectChanges()

    component.onLike()

    expect(getFavorites()).toEqual([product])
  })

  it('should render img', () => {
    const compiled = fixture.nativeElement
    component.product = product
    component.ngOnInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.product-card-info__img')?.src).toContain(
      `/assets/img/product/${product.subcategory}/${product.id}.webp`
    )

    expect(compiled.querySelector('.product-card-info__img')?.alt).toContain(
      product.name
    )
  })

  it('should change stars array', () => {
    component.product = product
    component.ngOnInit()
    fixture.detectChanges()

    const productStars = [
      product.stars >= 1 ? 1 : product.stars,
      product?.stars >= 2 ? 1 : product.stars - 1 < 0 ? 0 : product.stars - 1,
      product?.stars >= 3 ? 1 : product.stars - 2 < 0 ? 0 : product.stars - 2,
      product?.stars >= 4 ? 1 : product.stars - 3 < 0 ? 0 : product.stars - 3,
      product?.stars >= 5 ? 1 : product.stars - 4 < 0 ? 0 : product.stars - 4
    ]

    expect(component.stars).toEqual(productStars)
  })
})
