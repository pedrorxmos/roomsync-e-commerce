import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IconComponent } from './icon.component'
import { AppModule } from 'src/app/app.module'
import { innerSvg } from './svg.icons'

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

  it('should change inner html with name', () => {
    const compiled = fixture.nativeElement as SVGElement
    component.name = 'heart'
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.icon')?.innerHTML).toEqual(
      innerSvg.filter((svg) => svg.name === 'heart')[0]?.value
    )
  })

  it('should change size class', () => {
    const compiled = fixture.nativeElement as SVGElement
    component.name = 'heart'
    component.size = 'sm'
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.icon')?.classList.contains('icon-sm')
    ).toBeTruthy()

    component.size = 'lg'
    fixture.detectChanges()
    expect(
      compiled.querySelector('.icon')?.classList.contains('icon-lg')
    ).toBeTruthy()
  })

  it('should add title when it is passed', () => {
    const compiled = fixture.nativeElement as SVGElement
    component.name = 'heart'
    component.title = 'icon has title'
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(compiled.querySelector('.icon')?.innerHTML).toContain(
      '<title>icon has title</title>'
    )
  })

  it('should add class if passed', () => {
    const compiled = fixture.nativeElement as SVGElement
    component.name = 'heart'
    component.className = 'a-new-class'
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.icon')?.classList.contains('a-new-class')
    ).toBeTruthy()
  })

  it('should add fill class when fill passed', () => {
    const compiled = fixture.nativeElement as SVGElement
    component.name = 'heart'
    component.fill = 'red'
    component.ngAfterViewInit()
    fixture.detectChanges()

    expect(
      compiled.querySelector('.icon')?.classList.contains('icon-fill')
    ).toBeTruthy()
  })
})
