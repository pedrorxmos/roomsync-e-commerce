import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing'

import { CategoryComponent } from './category.component'
import { AppModule } from 'src/app/app.module'
import { category, decorationInnerSvg } from 'src/app/fixtures/category.fixture'
import { Location } from '@angular/common'

describe('CategoryComponent', () => {
  let component: CategoryComponent
  let fixture: ComponentFixture<CategoryComponent>
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(CategoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show title and subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.category = category
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.category-card .card-info')?.textContent
    ).toContain(category.name)

    expect(
      compiled.querySelector('.category-card .card-info')?.textContent
    ).toContain(category.parent)
  })

  it('should render svg icon', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.category = category
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.category-card .card-icon svg')?.innerHTML
    ).toContain(decorationInnerSvg)
  })

  it('should redirect to category page', fakeAsync(() => {
    location = TestBed.inject(Location)
    component.category = category
    component.ngAfterViewInit()
    fixture.detectChanges()

    const btn =
      fixture.debugElement.nativeElement.querySelector('.category-card')
    btn.click()
    tick()
    fixture.detectChanges()

    expect(location.path()).toBe(`/shop/${category.id}`)
  }))
})
