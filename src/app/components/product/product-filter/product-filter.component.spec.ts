import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductFilterComponent } from './product-filter.component'
import { AppModule } from 'src/app/app.module'

describe('ProductFilterComponent', () => {
  let component: ProductFilterComponent
  let fixture: ComponentFixture<ProductFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFilterComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(ProductFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
