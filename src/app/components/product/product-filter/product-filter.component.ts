import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core'
import { ActivatedRoute, Event } from '@angular/router'

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
  public type!: string

  @Output()
  public action: EventEmitter<string> = new EventEmitter<string>()

  public selectedOption?: any
  public options?: any[]
  public isActive: boolean = false

  @ViewChild('filter') public filterEl!: ElementRef

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.options = this.values?.filter((x) => x !== this.selectedOption)
    this.setFilterActive()
  }

  onOpen(): void {
    this.filterEl.nativeElement.classList.add('open')
  }

  onClose(): void {
    this.filterEl.nativeElement.classList.remove('open')
  }

  onClick(value: string): void {
    this.action.emit(value)
    this.onClose()

    setTimeout(() => {
      this.setFilterActive()
    }, 200)
  }

  setFilterActive(): void {
    this.route.queryParams.subscribe((params) => {
      this.isActive = params[this.type] !== undefined
    })
    console.log(this.type, this.isActive)
  }
}
