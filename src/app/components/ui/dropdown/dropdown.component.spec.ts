import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DropdownComponent } from './dropdown.component'
import { AppModule } from 'src/app/app.module'

describe('DropdownComponent', () => {
  let component: DropdownComponent
  let fixture: ComponentFixture<DropdownComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(DropdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
