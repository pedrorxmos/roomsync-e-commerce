import { Component, EventEmitter, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input({ required: true })
  public type!: string

  @Input({ required: true })
  public size!: string

  @Input({ alias: 'link' })
  public isLink?: string

  @Input()
  public url!: string

  @Input()
  public action: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  public leftIcon?: string

  @Input()
  public rightIcon?: string

  @Input({ alias: 'class' })
  public className?: string

  @Input()
  public disabled?: boolean

  public inlineClass: string = ''
  public svgSize: string = 'md'

  ngOnInit(): void {
    this.inlineClass = `btn btn-${this.type} btn-${this.size} ${
      this.className ? this.className : ''
    }`

    this.svgSize = this.size.slice(-2)
  }

  onClick() {
    this.action.emit()
  }
}
