import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CartPageComponent } from './cart-page.component'
import { AppModule } from 'src/app/app.module'

describe('CartPageComponent', () => {
  let component: CartPageComponent
  let fixture: ComponentFixture<CartPageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(CartPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
