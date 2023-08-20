import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CartPageComponent } from './cart-page.component'
import { AppModule } from 'src/app/app.module'
import {
  cartStorage,
  cartStorageMultipleItems
} from 'src/app/fixtures/cart.fixture'
import { Cart } from 'src/app/interfaces'
import { getCart } from 'src/app/helpers'
import { ActivatedRoute, Router } from '@angular/router'
import { inject } from '@angular/core'

describe('CartPageComponent', () => {
  let component: CartPageComponent
  let fixture: ComponentFixture<CartPageComponent>
  let router: Router

  beforeEach(() => {
    localStorage.clear()
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(CartPageComponent)
    router = TestBed.inject(Router)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    localStorage.setItem('cart', JSON.stringify(cartStorage))
    expect(component).toBeTruthy()
  })

  it('should show as much cart items as cart products in localstorage', () => {
    localStorage.setItem('cart', JSON.stringify(cartStorage))
    component.ngAfterContentChecked()
    expect(component.products).toEqual(cartStorage)
  })

  it('should calculate subtotal of cart', () => {
    localStorage.setItem('cart', JSON.stringify(cartStorageMultipleItems))
    component.ngAfterContentChecked()
    let subtotal = 0

    cartStorageMultipleItems.forEach((prod: Cart) => {
      subtotal += prod.price * prod.qty
    })

    expect(component.subtotal).toEqual(subtotal)
  })

  it('should remove cart items and localStorage on checkout', () => {
    localStorage.setItem('cart', JSON.stringify(cartStorageMultipleItems))
    component.ngAfterContentChecked()
    expect(component.products).toEqual(cartStorageMultipleItems)

    component.onRemoveAll()
    expect(getCart()).toEqual([])
  })

  it('should change route on checkout', () => {
    localStorage.setItem('cart', JSON.stringify(cartStorage))
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl')
    component.onRemoveAll()

    expect(navigateByUrlSpy).toHaveBeenCalledWith('/')
  })
})
