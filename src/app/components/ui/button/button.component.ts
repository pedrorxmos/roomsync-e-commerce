import { Component, Input, OnInit } from '@angular/core'

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
  public action!: (args?: any) => any

  @Input()
  public leftIcon?: string

  @Input()
  public rightIcon?: string

  @Input({ alias: 'class' })
  public className?: string

  public inlineClass: string = ''

  ngOnInit(): void {
    this.inlineClass = `btn btn-${this.type} btn-${this.size} ${
      this.className ? this.className : ''
    }`
  }
}
