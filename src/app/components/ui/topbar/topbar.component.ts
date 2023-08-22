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

  public cartProducts: number = getCartQtyLength()
  public favorites: number = getFavorites().length

  constructor(private router: Router) {}

  onToggleSearch() {
    this.searchBar.nativeElement.classList.toggle('open')
  }

  onSearchSubmit() {
    this.router.navigate(['/shop'], {
      queryParams: {
        search: this.searchInput.nativeElement.value
      }
    })

    this.searchBar.nativeElement.reset()
    this.searchInput.nativeElement.blur()
  }

  ngAfterContentChecked(): void {
    this.cartProducts = getCartQtyLength()
    this.favorites = getFavorites().length
  }
}
