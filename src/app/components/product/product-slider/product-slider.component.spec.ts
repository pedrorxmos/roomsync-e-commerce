import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductSliderComponent } from './product-slider.component'
import { AppModule } from 'src/app/app.module'

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
})
