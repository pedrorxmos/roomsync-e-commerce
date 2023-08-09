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

  @ViewChild('icon') iconElement!: ElementRef

  ngAfterViewInit(): void {
    this.iconElement.nativeElement.innerHTML = innerSvg.filter(
      (svg) => svg.name === this.name
    )[0].value
  }
}
