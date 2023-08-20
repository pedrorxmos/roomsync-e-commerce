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

  it('should show title', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    component.title = 'Color'
    fixture.detectChanges()

    expect(compiled.querySelector('.filter-dropdown')?.textContent).toContain(
      'Color'
    )
    expect(
      compiled.querySelector('.filter-options__header')?.textContent
    ).toContain('Color')
  })

  it('should open and close (with close btn) itself', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    component.title = 'color'
    fixture.detectChanges()

    fixture.debugElement.nativeElement.querySelector('.filter-dropdown').click()
    expect(
      compiled.querySelector('.product-filter')?.classList.contains('open')
    ).toBeTruthy()

    fixture.debugElement.nativeElement
      .querySelector('.filter-options__header__action')
      .click()
    expect(
      compiled.querySelector('.product-filter')?.classList.contains('open')
    ).toBeFalsy()
  })

  it('should open and close (with overlay) itself', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    component.title = 'color'
    fixture.detectChanges()

    fixture.debugElement.nativeElement.querySelector('.filter-dropdown').click()
    expect(
      compiled.querySelector('.product-filter')?.classList.contains('open')
    ).toBeTruthy()

    fixture.debugElement.nativeElement.querySelector('.filter-overlay').click()
    expect(
      compiled.querySelector('.product-filter')?.classList.contains('open')
    ).toBeFalsy()
  })
})
