import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomePageComponent } from './home-page.component'
import { AppModule } from 'src/app/app.module'
import categoriesDB from '../../../database/categories.json'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show title and subtitle', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('RoomSync')
    expect(compiled.textContent).toContain('Need a change?')
  })

  it('should show product slider', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    expect(compiled.querySelector('.home-products')?.innerHTML).toContain(
      'app-product-slider'
    )
  })

  it('should show all categories', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement

    expect(
      compiled.querySelectorAll('.categories-list app-category').length
    ).toBe(categoriesDB.length)
  })
})
