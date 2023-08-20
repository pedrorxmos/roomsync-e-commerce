import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CartItemComponent } from './cart-item.component'
import { AppModule } from 'src/app/app.module'

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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
