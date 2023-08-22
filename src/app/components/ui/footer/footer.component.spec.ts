import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterComponent } from './footer.component'
import { AppModule } from 'src/app/app.module'
import { ElementRef } from '@angular/core'

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
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    expect(compiled.querySelector('.copyright-text')?.textContent).toEqual(
      '© 2023 RoomSync. All rights reserved.'
    )
  })

  it('should open newsletter notice if email is correct', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    if (component.input) {
      component.input.nativeElement.value = 'email@email.es'
    }
    component.onNewsletterOpen()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.newsletter-notice')?.classList.contains('open')
    ).toBeTruthy()
  })

  it('should not open newsletter notice if email is invalid and add error', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    if (component.input) {
      component.input.nativeElement.value = 'wrongemail'
    }
    component.onNewsletterOpen()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.newsletter-error')?.classList.contains('error')
    ).toBeTruthy()

    expect(
      compiled.querySelector('.newsletter-notice')?.classList.contains('open')
    ).toBeFalsy()
  })

  it('should close newsletter when close', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement
    compiled.querySelector('.newsletter-notice')?.classList.add('open')

    expect(
      compiled.querySelector('.newsletter-notice')?.classList.contains('open')
    ).toBeTruthy()

    component.onNewsletterClose()

    expect(
      compiled.querySelector('.newsletter-notice')?.classList.contains('open')
    ).toBeFalsy()
  })
})
