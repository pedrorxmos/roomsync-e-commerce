import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductDetailPageComponent } from './product-detail-page.component'
import { AppModule } from 'src/app/app.module'

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent
  let fixture: ComponentFixture<ProductDetailPageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPageComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(ProductDetailPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
