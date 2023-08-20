import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopbarComponent } from './topbar.component'
import { AppModule } from 'src/app/app.module'

describe('TopbarComponent', () => {
  let component: TopbarComponent
  let fixture: ComponentFixture<TopbarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(TopbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
