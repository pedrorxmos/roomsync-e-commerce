import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IconComponent } from './icon.component'
import { AppModule } from 'src/app/app.module'

describe('IconComponent', () => {
  let component: IconComponent
  let fixture: ComponentFixture<IconComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(IconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
