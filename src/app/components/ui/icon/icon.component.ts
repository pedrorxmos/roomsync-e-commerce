import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  Inject,
  OnInit,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core'
import { innerSvg } from './svg.icons'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit, OnInit {
  @Input({ required: true })
  public name!: string

  @Input()
  public title?: string

  @Input({ required: true })
  public size!: string

  @Input({ alias: 'class' })
  public className?: string

  public inlineClass: string = ''

  @ViewChild('icon') iconElement!: ElementRef

  ngAfterViewInit(): void {
    this.iconElement.nativeElement.innerHTML = `${
      this.title ? `<title>${this.title}</title>` : ''
    }${innerSvg.filter((svg) => svg.name === this.name)[0].value}`
  }

  ngOnInit(): void {
    this.inlineClass = `icon icon-${this.size} feather feather-${this.name} ${
      this.className ? this.className : ''
    }`
  }
}
