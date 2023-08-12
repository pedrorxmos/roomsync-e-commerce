import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @ViewChild('searchBar') private searchBar!: ElementRef

  onToggleSearch() {
    this.searchBar.nativeElement.classList.toggle('open')
  }
}
