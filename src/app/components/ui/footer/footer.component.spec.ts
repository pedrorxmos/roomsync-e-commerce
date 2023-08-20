import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterComponent } from './footer.component'
import { AppModule } from 'src/app/app.module'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render name and subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.header-title')?.textContent).toEqual(
      'RoomSync'
    )
    expect(compiled.querySelector('.header-subtitle')?.textContent).toEqual(
      'Need a change?'
    )
  })

  it('should render copyright notice', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.copyright-text')?.textContent).toEqual(
      '© 2023 RoomSync. All rights reserved.'
    )
  })
})
