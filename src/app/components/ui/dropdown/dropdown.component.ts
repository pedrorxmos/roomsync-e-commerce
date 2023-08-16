import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input({ required: true })
  public title!: string

  @Input()
  public isOpen: boolean = false

  @ViewChild('content') public content?: ElementRef

  onToggle() {
    this.isOpen = !this.isOpen
  }
}
