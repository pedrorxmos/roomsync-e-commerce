import { Component, Input, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Input({ required: true })
  public title: string = 'filter'

  @Input({ required: true })
  public values!: any[]

  @Input({ required: true })
  public action!: (args?: any) => any

  public selectedOption?: any
  public options?: any[]

  @ViewChild('filter') public filterEl!: ElementRef

  ngOnInit(): void {
    this.options = this.values?.filter((x) => x !== this.selectedOption)
  }

  onOpen(): void {
    this.filterEl.nativeElement.classList.add('open')
  }

  onClose(): void {
    this.filterEl.nativeElement.classList.remove('open')
  }

  onClick(value: string): void {
    this.action(value)
  }
}
