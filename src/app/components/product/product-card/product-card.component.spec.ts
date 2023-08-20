import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductCardComponent } from './product-card.component'
import { AppModule } from 'src/app/app.module'

describe('ProductCardComponent', () => {
  let component: ProductCardComponent
  let fixture: ComponentFixture<ProductCardComponent>

  beforeEach(() => {
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
})
