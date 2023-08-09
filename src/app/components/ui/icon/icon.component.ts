import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core'
import { innerSvg } from './svg.icons'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {
  @Input()
  public name: string = 'arrow-down'

  @Input()
  public title?: string

  @Input()
  public size: string = 'md'

  @Input()
  public className?: string

  public inlineClass = `icon icon-${this.size} feather feather-airplay ${
    this.className ? this.className : ''
  }`

  @ViewChild('icon') iconElement!: ElementRef

  ngAfterViewInit(): void {
    this.iconElement.nativeElement.innerHTML = `${
      this.title ? `<title>${this.title}</title>` : ''
    }${innerSvg.filter((svg) => svg.name === this.name)[0].value}`
  }
}
