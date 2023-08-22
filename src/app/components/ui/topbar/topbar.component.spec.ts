import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing'

import { TopbarComponent } from './topbar.component'
import { AppModule } from 'src/app/app.module'
import { ActivatedRoute, Router } from '@angular/router'

describe('TopbarComponent', () => {
  let component: TopbarComponent
  let fixture: ComponentFixture<TopbarComponent>
  let route: ActivatedRoute
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarComponent],
      imports: [AppModule]
    })
    fixture = TestBed.createComponent(TopbarComponent)
    component = fixture.componentInstance
    route = TestBed.inject(ActivatedRoute)
    router = TestBed.inject(Router)
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

  it('should open searchBar', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.onToggleSearch()

    expect(
      compiled.querySelector('.topbar-search')?.classList.contains('open')
    ).toBeTruthy()
  })

  it('should close searchBar', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.onToggleSearch()

    expect(
      compiled.querySelector('.topbar-search')?.classList.contains('open')
    ).toBeTruthy()

    component.onCloseSearch()

    expect(
      compiled.querySelector('.topbar-search')?.classList.contains('open')
    ).toBeFalsy()
  })

  it('should change route to /shop?search= when submiting', fakeAsync(() => {
    if (component.searchInput) {
      component.searchInput.nativeElement.value = 'value'
    }
    component.onSearchSubmit()
    tick()

    expect(router.routerState.snapshot.url).toEqual('/shop?search=value')
  }))
})
