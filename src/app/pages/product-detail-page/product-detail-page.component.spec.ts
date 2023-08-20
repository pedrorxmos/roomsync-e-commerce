import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductDetailPageComponent } from './product-detail-page.component'
import { AppModule } from 'src/app/app.module'
import { product } from 'src/app/fixtures/products.fixture'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { getCart, getFavorites } from 'src/app/helpers'
import { cartItem } from 'src/app/fixtures/cart.fixture'

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent
  let fixture: ComponentFixture<ProductDetailPageComponent>

  beforeEach(() => {
    localStorage.clear()
    TestBed.configureTestingModule({
      declarations: [ProductDetailPageComponent],
      imports: [AppModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: product.id
            })
          }
        }
      ]
    })
    fixture = TestBed.createComponent(ProductDetailPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render product name', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    fixture.detectChanges()

    expect(
      compiled.querySelector('.product-detail__info__header__title')
        ?.textContent
    ).toContain(product.name)
  })

  it('should render product subcategory', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    fixture.detectChanges()

    expect(
      compiled.querySelector('.product-detail__info__header__title')
        ?.textContent
    ).toContain(product.subcategory)
  })

  it('should render product price', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    fixture.detectChanges()

    expect(
      compiled.querySelector('.product-detail__info__header__subtitle')
        ?.textContent
    ).toContain(product.price)
  })

  it('should add to favorites', () => {
    const addToFavBtn = fixture.debugElement.nativeElement.querySelector(
      '.product-detail__info__actions__favorite'
    )
    addToFavBtn.click()

    expect(getFavorites()).toEqual([product])
  })

  it('should remove from favorites', () => {
    localStorage.setItem('favorites', JSON.stringify([product]))

    const addToFavBtn = fixture.debugElement.nativeElement.querySelector(
      '.product-detail__info__actions__favorite'
    )
    addToFavBtn.click()
    fixture.detectChanges()
    expect(getFavorites()).toEqual([])
  })

  it('should add to cart', () => {
    const addCart = fixture.debugElement.nativeElement.querySelector(
      '.product-detail__info__actions__cart'
    )
    addCart.click()

    expect(getCart()).toEqual([cartItem])
  })

  it('should add twice to cart if qty=2', () => {
    component.qty = 2
    const addCart = fixture.debugElement.nativeElement.querySelector(
      '.product-detail__info__actions__cart'
    )
    addCart.click()

    expect(getCart()).toEqual([{ ...cartItem, qty: 2 }])
  })

  it('should add to qty', () => {
    component.qty = 2
    fixture.debugElement.nativeElement
      .querySelector('.product-detail__info__actions__qty__btn.plus')
      .click()

    expect(component.qty).toBe(3)
  })

  it('should substract to qty', () => {
    component.qty = 10

    component.modifyQty(-1)

    expect(component.qty).toBe(9)
  })

  it('should not add to qty if qty=20', () => {
    component.qty = 20
    fixture.debugElement.nativeElement
      .querySelector('.product-detail__info__actions__qty__btn.plus')
      .click()

    expect(component.qty).toBe(20)
  })

  it('should not substract to qty if qty=1', () => {
    component.qty = 1

    component.modifyQty(-1)

    expect(component.qty).toBe(1)
  })
})
