import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing'

import { ProductListPageComponent } from './product-list-page.component'
import { AppModule } from 'src/app/app.module'
import { someProducts } from 'src/app/fixtures/products.fixture'
import { RouterTestingModule } from '@angular/router/testing'
import { ActivatedRoute } from '@angular/router'

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent
  let fixture: ComponentFixture<ProductListPageComponent>
  let route: ActivatedRoute

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPageComponent],
      imports: [AppModule, RouterTestingModule]
    })
    fixture = TestBed.createComponent(ProductListPageComponent)
    component = fixture.componentInstance
    route = TestBed.inject(ActivatedRoute)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show "Shop all" on default', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    fixture.detectChanges()
    expect(compiled.textContent).toContain('Shop All')
  })

  it('should show material and color filters', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    component.products = someProducts
    component.ngOnInit()

    const filters = compiled.querySelectorAll('app-product-filter')

    expect(filters[0].textContent).toContain('Color')
    expect(filters[1].textContent).toContain('Material')
  })

  it('should change color filter and reset', fakeAsync(() => {
    component.products = someProducts
    component.ngOnInit()
    fixture.detectChanges()

    component.changeColor('grey')
    fixture.detectChanges()
    tick()
    route.queryParams.subscribe((params) => {
      expect(params['color']).toBe('grey')
    })
  }))

  it('should change material filter', fakeAsync(() => {
    component.products = someProducts
    component.ngOnInit()
    fixture.detectChanges()

    component.changeMaterial('wood')
    fixture.detectChanges()
    tick()
    route.queryParams.subscribe((params) => {
      expect(params['material']).toBe('wood')
    })
  }))

  it('should reset filters', fakeAsync(() => {
    component.products = someProducts
    component.ngOnInit()
    fixture.detectChanges()

    component.changeMaterial('wood')
    fixture.detectChanges()
    tick()

    component.changeMaterial('reset')
    fixture.detectChanges()
    tick()
    route.queryParams.subscribe((params) => {
      expect(params['material']).toBe(undefined)
    })
  }))
})
