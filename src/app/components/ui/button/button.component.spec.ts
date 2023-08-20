import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing'

import { ButtonComponent } from './button.component'
import { AppModule } from 'src/app/app.module'
import { Location } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { innerSvg } from '../icon/svg.icons'

describe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [AppModule, RouterTestingModule]
    })
    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    location = TestBed.inject(Location)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should change type class', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.type = 'primary'
    component.ngOnInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.btn')?.classList.contains('btn-primary')
    ).toBeTruthy()

    component.type = 'secondary'
    component.ngOnInit()
    fixture.detectChanges()
    expect(
      compiled.querySelector('.btn')?.classList.contains('btn-secondary')
    ).toBeTruthy()
  })

  it('should change size class', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.size = 'sm'
    component.ngOnInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.btn')?.classList.contains('btn-sm')
    ).toBeTruthy()

    component.size = 'lg'
    component.ngOnInit()
    fixture.detectChanges()
    expect(
      compiled.querySelector('.btn')?.classList.contains('btn-lg')
    ).toBeTruthy()
  })

  it('should render <a> if isLink is passed', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.isLink = 'isLink'
    component.ngOnInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.btn')?.nodeName).toEqual('A')
  })

  it('should trigger onClick() if button clicked', () => {
    const onClickSpy = spyOn(component, 'onClick')
    component.ngOnInit()
    fixture.detectChanges()
    const btn = fixture.debugElement.nativeElement.querySelector('.btn')
    btn.click()

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should navigate to url if isLink clicked', fakeAsync(() => {
    component.isLink = 'isLink'
    component.url = '/shop'
    component.ngOnInit()
    fixture.detectChanges()

    const btn = fixture.debugElement.nativeElement.querySelector('.btn')
    btn.click()
    tick()
    fixture.detectChanges()

    expect(location.path()).toBe('/shop')
  }))

  it('should show left icon', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.leftIcon = 'star'
    component.ngOnInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.btn app-icon')).not.toBe(null)
    expect(
      compiled.querySelector('.btn app-icon')?.getAttribute('ng-reflect-name')
    ).toEqual('star')
  })

  it('should show right icon', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.rightIcon = 'star'
    component.ngOnInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.btn app-icon')).not.toBe(null)
    expect(
      compiled.querySelector('.btn app-icon')?.getAttribute('ng-reflect-name')
    ).toEqual('star')
  })

  it('should show both icons', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.rightIcon = 'star'
    component.leftIcon = 'heart'
    component.ngOnInit()
    fixture.detectChanges()

    const icons = compiled.querySelectorAll('.btn app-icon')
    expect(icons[0]?.getAttribute('ng-reflect-name')).toEqual('heart')
    expect(icons[1]?.getAttribute('ng-reflect-name')).toEqual('star')
  })
})
