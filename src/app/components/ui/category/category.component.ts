import { Component, Input } from '@angular/core'
import { Category } from 'src/app/interfaces'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input({ required: true })
  public category!: Category
}
