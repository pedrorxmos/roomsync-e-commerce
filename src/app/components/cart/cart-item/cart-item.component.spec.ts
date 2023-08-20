import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CartItemComponent } from './cart-item.component'
import { AppModule } from 'src/app/app.module'
import { cartItem } from 'src/app/fixtures/cart.fixture'

describe('CartItemComponent', () => {
  let component: CartItemComponent
  let fixture: ComponentFixture<CartItemComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(CartItemComponent)
    component = fixture.componentInstance
    component.product = cartItem
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show product name, price and qty', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.ngOnInit()
    fixture.detectChanges()
    expect(
      compiled.querySelector('.cart-item__header__info .title')?.textContent
    ).toContain(cartItem.name)

    expect(
      compiled.querySelector('.cart-item__header__info .price')?.textContent
    ).toContain(cartItem.price)

    expect(
      compiled.querySelector('.cart-item__actions__qty span')?.textContent
    ).toContain(cartItem.qty)
  })

  it('should show item subtotal due to price and qty', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.ngOnInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.cart-item__actions__price')?.textContent
    ).toContain(cartItem.price * cartItem.qty)
  })

  it('should load item image', () => {
    const compiled = fixture.nativeElement
    component.ngOnInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.cart-item__header__img')?.src).toContain(
      `/assets/img/product/${cartItem.subcategory}/${cartItem.id}.webp`
    )

    expect(compiled.querySelector('.cart-item__header__img')?.alt).toContain(
      cartItem.name
    )
  })
})
