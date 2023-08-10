import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  Inject
} from '@angular/core'
import { innerSvg } from './svg.icons'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {
  @Input({ required: true })
  public name!: string

  @Input()
  public title?: string

  @Input({ required: true })
  public size!: string

  @Input()
  public className?: string

  public inlineClass: string = ''

  @ViewChild('icon') iconElement!: ElementRef

  ngAfterViewInit(): void {
    this.inlineClass = `icon icon-${this.size} feather feather-airplay ${
      this.className ? this.className : ''
    }`

    this.iconElement.nativeElement.innerHTML = `${
      this.title ? `<title>${this.title}</title>` : ''
    }${innerSvg.filter((svg) => svg.name === this.name)[0].value}`
  }
}
