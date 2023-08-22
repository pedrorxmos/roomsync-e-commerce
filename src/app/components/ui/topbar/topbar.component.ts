import { Router } from '@angular/router'
import { getCartQtyLength, getFavorites } from './../../../helpers'
import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentChecked
} from '@angular/core'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements AfterContentChecked {
  @ViewChild('searchBar') private searchBar!: ElementRef
  @ViewChild('searchInput') private searchInput!: ElementRef
  @ViewChild('overlay') private overlay!: ElementRef

  public cartProducts: number = getCartQtyLength()
  public favorites: number = getFavorites().length

  constructor(private router: Router) {}

  onToggleSearch() {
    this.searchBar.nativeElement.classList.toggle('open')
    this.overlay.nativeElement.classList.toggle('open')
    this.searchInput.nativeElement.focus()
  }

  onCloseSearch() {
    this.searchBar.nativeElement.classList.remove('open')
    this.overlay.nativeElement.classList.remove('open')
    this.searchInput.nativeElement.blur()
  }

  onSearchSubmit() {
    this.router.navigate(['/shop'], {
      queryParams: {
        search: this.searchInput.nativeElement.value
      }
    })
    this.onCloseSearch()
    this.searchBar.nativeElement.reset()
  }

  ngAfterContentChecked(): void {
    this.cartProducts = getCartQtyLength()
    this.favorites = getFavorites().length
  }
}
