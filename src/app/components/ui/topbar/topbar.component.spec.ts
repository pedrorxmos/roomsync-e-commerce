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

  it('should render both titles (sm & lg)', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.topbar')?.textContent).toContain('RoomSync')
    expect(compiled.querySelector('.topbar')?.textContent).toContain('RS')
  })

  it('should render search bar', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.topbar')?.innerHTML).toContain(
      'topbar-search'
    )
  })
})
