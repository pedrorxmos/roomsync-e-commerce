import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductSliderComponent } from './product-slider.component'
import { AppModule } from 'src/app/app.module'
import { someProducts } from 'src/app/fixtures/products.fixture'

describe('ProductSliderComponent', () => {
  let component: ProductSliderComponent
  let fixture: ComponentFixture<ProductSliderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(ProductSliderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should load as many product cards as products passed', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.products = someProducts
    fixture.detectChanges()

    expect(
      compiled.querySelectorAll('.product-slider app-product-card').length
    ).toBe(someProducts.length)
  })
})
