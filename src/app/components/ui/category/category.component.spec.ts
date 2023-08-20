import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CategoryComponent } from './category.component'
import { AppModule } from 'src/app/app.module'

describe('CategoryComponent', () => {
  let component: CategoryComponent
  let fixture: ComponentFixture<CategoryComponent>

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
})
