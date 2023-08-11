import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({ required: true })
  public type!: string

  @Input({ required: true })
  public size!: string

  @Input({ alias: 'link' })
  public isLink?: string

  @Input({ required: true })
  public action!: any

  @Input()
  public leftIcon?: string

  @Input()
  public rightIcon?: string

  @Input({ alias: 'class' })
  public className?: string
}
