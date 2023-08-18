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

  public cartProducts: number = getCartQtyLength()
  public favorites: number = getFavorites().length

  onToggleSearch() {
    this.searchBar.nativeElement.classList.toggle('open')
  }

  ngAfterContentChecked(): void {
    this.cartProducts = getCartQtyLength()
    this.favorites = getFavorites().length
  }
}
