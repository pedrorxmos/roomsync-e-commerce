import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DropdownComponent } from './dropdown.component'
import { AppModule } from 'src/app/app.module'
import { Component } from '@angular/core'

describe('DropdownComponent', () => {
  let component: DropdownComponent
  let fixture: ComponentFixture<DropdownComponent>
  let testFixture: ComponentFixture<TestDropdown>

  @Component({
    template: '<app-dropdown title="some title">Some Content</app-dropdown>'
  })
  class TestDropdown {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent, TestDropdown],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(DropdownComponent)
    testFixture = TestBed.createComponent(TestDropdown)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render title and content', () => {
    const compiled = testFixture.debugElement.nativeElement as HTMLElement
    testFixture.detectChanges()

    expect(compiled.querySelector('.dropdown')?.textContent).toContain(
      'some title'
    )
    expect(compiled.querySelector('.dropdown')?.textContent).toContain(
      'Some Content'
    )
  })

  it('should open and close', () => {
    const compiled = testFixture.debugElement.nativeElement as HTMLElement
    testFixture.detectChanges()

    const btn =
      testFixture.debugElement.nativeElement.querySelector('.dropdown-header')
    btn.click()
    testFixture.detectChanges()

    expect(
      compiled.querySelector('.dropdown')?.classList.contains('open')
    ).toBeTruthy()

    btn.click()
    testFixture.detectChanges()

    expect(
      compiled.querySelector('.dropdown')?.classList.contains('open')
    ).toBeFalsy()
  })
})
