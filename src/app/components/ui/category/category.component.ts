import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core'
import { Category } from 'src/app/interfaces'
import { categorySvg } from './category.icons'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit {
  @Input({ required: true })
  public category!: Category

  @ViewChild('svg') svgElement!: ElementRef

  ngAfterViewInit(): void {
    this.svgElement.nativeElement.innerHTML = `<title>${
      this.category.name
    }</title> ${
      categorySvg.filter((svg) => svg.name === this.category.id)[0].value
    }`
  }
}
