import { Component, OnInit } from '@angular/core'
import categories from '../../../database/categories.json'
import { Category } from 'src/app/interfaces'

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public categories?: Category[] = categories
}
